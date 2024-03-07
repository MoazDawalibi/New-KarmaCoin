import Layout from '../../Layout/Ui/Layout'
import { Field, Form, Formik, useFormikContext } from 'formik'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
// import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';
import { useTranslation } from 'react-i18next';
// import Select from 'react-select'
//@ts-ignore
import countryList from 'react-select-country-list'
import { Select, Space } from 'antd';
//@ts-ignore
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { USER_EMAIL } from '../../config/AppKey';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Register = () => {

  const navigate = useNavigate()
  const { mutate, isSuccess, data , isLoading } = useRegister()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [isVirfied, setisVirfied] = useState(false)

  const handelSubmit = (values: any) => {
    mutate(
      {
        name: values['name'],
        email: values['email'],
        password: values['password'],
        country:value,
        phone: values['phone']
      }
    )
   return localStorage.setItem(USER_EMAIL , values.email );
  }

  useEffect(() => {
    if (isSuccess) {
      // dispatch(register((data as any)?.data))
      
      navigate('/verified ', { replace: true })
    }
  }, [isSuccess, navigate, data , dispatch])


  const options = useMemo(() => countryList().getData(), [])
  const formik = useFormikContext();

  const SelecthandleChange = (value:any,label:any) => {

    setValue(label?.label)

 };
 const form = useRef<any>(null);

 const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (form.current) {
    emailjs.sendForm('service_49y5tqk', 'template_w4976q5', form.current, 'ivQFaIMbNe3DbNhA0')
      .then((result:any) => {
        console.log(result.text);
        form.current.reset();
        toast.success(t('contact.emailSentSuccess'));
      })
      .catch((error:any) => {
        console.log(error.text);
      });
  }
};


  return (
    <Layout>
      <div className='title_container_reg'>
        <h1 className='title'>{t("Register")}</h1>
        <p className='text'>{t("Register here to participate in our auctions and get your own My Leu account")}.</p>    
      </div>
      <div className='body'>
        <Formik
          initialValues={{ name: '', email: "", password: '',country:"", phone:"" }}
          onSubmit={handelSubmit}
        >
          <Form ref={form} className='form'>
            <h2>{t("Create Your Account")}</h2>
            <div className='login_dev'>
              <Field className="Feild" name="name" type="text" placeholder={t("Name")} />
            </div>

            <div className='login_dev'>
              <Field className="Feild" name="email" type="email" placeholder={t("Email")} />
            </div>


            <div className='login_dev'>
              <Field className="Feild"  name="phone" type="text" placeholder={t("phone")} />
            </div>

            <div className='login_dev'>
              <Field className="Feild" name="password" type="password" placeholder={t("Password")} />
            </div>

            <div className='login_dev'>
              <Select
              // style={{ width: "100%" }}
              className='select'
              onChange={SelecthandleChange}
              options={options}
              placeholder="choose your country"
              />
            </div>
            <div className='button_container'>
              <LoadingButton isLoading={isLoading} >{t("Register")} <MdKeyboardDoubleArrowRight/></LoadingButton >
            </div>
          </Form>
        </Formik>
      </div>
      
    </Layout>
  )
}

export default Register