import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../Layout/Ui/Layout';
import { Button, Rate, Result,Space } from 'antd';

const SuccessVerify = () => {

    const Navigate = useNavigate();
    const {t} = useTranslation();
    
    const handleNavigate =() => {
        Navigate('/')
    }
  return (
    <Layout>
        <div className="ReviewBody">
    <Result
    status="success"
    title={t("Your Email has been verfied successfully")+".."}
    subTitle={t("You can continue useing the website")+"."}
    extra={[
      <Link  className='link' to="/">
        <Button type="primary" className='button' key="console">
          {t("Home")}   
        </Button>
      </Link>
    ]}
  />
     
    </div>
    </Layout>
  )
}

export default SuccessVerify
