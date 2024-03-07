import React, { useEffect, useState } from 'react'
import PaymentForm from './PaymentForm';
import { Button, Divider, Input, Radio, Space } from 'antd';
import { useCheckout } from '../../../api/cart';
import { useFormikContext } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const PaymentBody = ({ setViewPage , isLoading}: any) => {
  const formikContext = useFormikContext();
  const {t} = useTranslation();
  const {values, setFieldValue, submitForm , getFieldProps } = formikContext;
  const handleSubmit = () => {
    toast.info("Your Data in proccess")
    
    submitForm()
  };


  const [selectedValue, setSelectedValue] = useState(getFieldProps('payment_method').value == 'online' ? 2 :3);

  const handleChange = (value: any) => {
    if(value ==3){
      setSelectedValue(value);
      setFieldValue('payment_method', 'cash_on_delivery')
    }else{
      setSelectedValue(value);
      setFieldValue('payment_method', 'online')
    }


  };



  type TRadioUi = { value: number; title: string, className?: string; children: React.ReactNode }
  const RadioUi = ({ value, children, title, className }: TRadioUi) => {
    return (
      <div>
        <Radio
          value={value}
          checked={selectedValue === value}
          onChange={() => handleChange(value)}

        >
          <span>{title} </span>
        </Radio>
        {selectedValue === value && <div className={className}>{children}  </div>}
              <Divider />

      </div>
    )
  }
  return (
    <div className="PaymentBody">
      <div className="PaymentBody_Left">
        {t("Payment Method")}
        <Divider/>
        <Space direction='vertical' className='point_container' >
          <RadioUi className='point'  value={3} title={t("Cash On Delivery")}  >
              <></>
          </RadioUi>
          <RadioUi  className='point'  value={2} title={t("Online")} >
              <></>
          </RadioUi>
        </Space>
       <div>
           <div className='Buttons_Tr'>
            <Button type="dashed" block onClick={()=>setViewPage(1)} >
      {t("back to Details")}
    </Button>
         <Button onClick={()=>{
        
          handleSubmit()
          
          }} className='primary' type="primary" block>
       {isLoading ? t("Loading...") : t("Review") }
    </Button>
           </div>
    

           </div>
      </div>
      {/* <div className='PaymentBody_Right'>
        <PaymentForm />
      </div> */}
    </div>
  )
}

export default PaymentBody