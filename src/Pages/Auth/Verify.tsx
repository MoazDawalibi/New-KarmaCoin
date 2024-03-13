
import React, { useEffect, useState } from 'react'
import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSendCode, useVerify } from '../../api/auth';
import { useTranslation } from 'react-i18next';
import ReactCodeInput from 'react-verification-code-input';
import { toast } from 'react-toastify';
import Translate from '../../Components/Utils/Translate';
import { USER_EMAIL } from '../../config/AppKey';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';
import Layout from '../../Layout/Ui/Layout';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Virefied = () => {
  
  const navigate = useNavigate();
  const {t} = useTranslation();
  const dispatch = useDispatch()

  const [isInvalid, setIsInvalid] = useState(false);
  const [Code, setCode] = useState(''); // State to track the entered verification code

  const { mutate: verifyMutate, isSuccess, isLoading ,data,isError,error} = useVerify();
  const { mutate: sendCodeMutate, isSuccess: codeSuccess } = useSendCode();

  const handleSubmit = async (code:any) => {
    
       verifyMutate({
        email: localStorage.getItem(USER_EMAIL), 
        verification_code: Code,
      });
  };

    useEffect(()=> {
      if(isSuccess){
        toast.success(t('Verified Successfully'))
        dispatch(register(data.data)) 
        navigate('/success_verify')
      }
    },[isSuccess])
    
  const handleSendCode = () => {
      if(codeSuccess){
        sendCodeMutate({
          email: localStorage.getItem(USER_EMAIL), 
        });
        toast.success(t('Code has been sent successfully to your email'));
      }else{
        toast.error(t('Failed to send code please try again'));
      }
  };

  return (
    <Layout>
      <div className='Virefied'>
      <Translate/>
        <Result
        className='Result'
        status="404"
        title={t("code Send to your Email Verified it")}
        subTitle={t("Enter your verification code that we sent to you through your E-mail.")}
        extra={
          <div>
            <ReactCodeInput
            type='text'
            className='ReactCodeInput'
            onComplete={(code:any) => setCode(code)} 
            />
            {
              isInvalid ? <p>{t("Verification code is invalid")}..</p> : "" 
            }
            <span onClick={handleSendCode}>{t("Resend Code")}</span>
          </div>
        }
        children={<div className='button_container'><button className='verify_button' onClick={handleSubmit}>{t("Submit")}<MdKeyboardDoubleArrowRight/></button></div>}
        />
      </div>
    </Layout>
  )
}

export default Virefied;
