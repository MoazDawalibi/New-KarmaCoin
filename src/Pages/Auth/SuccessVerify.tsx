import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/Ui/Layout';
import { Button,  Result } from 'antd';

const SuccessVerify = () => {
    const {t} = useTranslation();
    
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
