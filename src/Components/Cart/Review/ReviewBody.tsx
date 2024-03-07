import React, { useState } from 'react'
import { Button, Rate, Result,Space } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ReviewBody = ({ setViewPage }: any) => {
    const {t} = useTranslation();
   const [value, setValue] = useState(3);
const desc = ['very bad', 'bad', 'normal', 'good', 'perfect'];

  return (
    <div className="ReviewBody">
    <Result
    status="success"
    title={t("Successfully Purchased Order!")}
    subTitle={t("Thank You for Try  and hope to make another one")}
    extra={[
      ,
      <Link to="/">
        <Button type="primary" key="console">
          {t("Buy Again")}   
        </Button>
      </Link>
    ]}
  />
     
    </div>
  )
}

export default ReviewBody