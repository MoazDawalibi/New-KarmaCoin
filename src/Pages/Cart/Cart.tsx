import React, { useState, memo, useEffect } from 'react';
import { Formik, Form } from 'formik';
import StepsUi from '../../Components/Cart/StepsUi';
import CartBody from '../../Components/Cart/CartBody';
import DetailsBody from '../../Components/Cart/Details/DetailsBody';
import PaymentBody from '../../Components/Cart/Payment/PaymentBody';
import ReviewBody from '../../Components/Cart/Review/ReviewBody';
import { useCheckout, useCreatePayment, useGetCart } from '../../api/cart';
import LoadingPage from '../Loading/LoadingPage';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout/Ui/Layout';


const CartPage: React.FC = () => {
  const [ViewPage, setViewPage] = useState<number>(0);
  const propsState = { ViewPage, setViewPage };
  const { data, isLoading } = useGetCart();
  const { mutate, isLoading: LoadingCheckout, isSuccess } = useCheckout()
  const { mutate: createPayment, isLoading: LoadingPayment, isSuccess: SuccessPayemnt, data: UrlPaymnet } = useCreatePayment()
  const navigate = useNavigate()
  useEffect(() => {
    if (SuccessPayemnt) {
      window.location.href = ((UrlPaymnet?.data));

    }
  }, [SuccessPayemnt])
  useEffect(() => {
    console.log(isSuccess);

    if (isSuccess) {
      console.log(isSuccess, "OORRR");
      navigate('/success_payment')


    }
  }, [isSuccess])

  if (isLoading) {
    return <LoadingPage />
  }

  const MemoizedStepsUi = memo(() => {
    return <StepsUi {...propsState} />;
  });

  const RenderPageContent = memo(() => {
    switch (ViewPage) {
      case 0:
        return <CartBody data={data?.data?.at(0)?.cart_items} cart={data?.data?.at(0)} {...propsState} />;
      case 1:
        return <DetailsBody {...propsState} />;
      case 2:
        return <PaymentBody {...propsState} isLoading={isLoading} />;
      case 3:
        return <ReviewBody {...propsState} />;
      default:
        return null;
    }
  });
  const handleSubmit = (values: ValuesType, actions: any) => {
    console.log(ViewPage);

    if (ViewPage == 2) {
      console.log('thx');

      if (values['payment_method'] == 'online') {
        localStorage.setItem('payemnt_online', JSON.stringify(values));
        createPayment({ ...values, zone_number: values.zone, building_number: values?.building + "" })
      } else {
        mutate({ ...values, zone_number: values.zone, building_number: values?.building + "" })

      }
    }
    // console.log(values);

  };


  return (
    <Layout className='CartPage'>
      <Formik
        initialValues={{
          cartItems: data?.data?.at(0)?.cart_items || [],
          zone: '',
          building: '',
          note: '',
          payment_method: "online",
          lat: "36.480",
          long: "36.848"
        }}
        validationSchema={yup.object().shape({
          // zone: yup.number().required('required'),
          // building: yup.number().required('required'),
          // note: yup.string(),
          // lat: yup.string().required('required'),
          // long: yup.string().required('required'),
          zone: yup.string().required('Zone is required'),
          building: yup.string().required('Building is required'),
          // note: yup.string().required('note is required'),
          lat: yup.string().required('required'),
          long: yup.string().required('required'),
        })}
        onSubmit={handleSubmit}
        >
        <Form>
          <MemoizedStepsUi />
          <RenderPageContent />
        </Form>
      </Formik>
    </Layout>
  );
};

export default CartPage;


interface ValuesType {
  building: string,

  lat: string,
  long: string,
  note: string,
  payment_method: string,
  zone: string,

}