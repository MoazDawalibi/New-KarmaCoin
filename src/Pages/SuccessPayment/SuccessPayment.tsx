// import React, { useState } from 'react'
// import { Button, Rate, Result,Space } from 'antd';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const ReviewBody = ({ setViewPage }: any) => {
//     const {t} = useTranslation();
//    const [value, setValue] = useState(3);
// const desc = ['very bad', 'bad', 'normal', 'good', 'perfect'];

//   return (
//     <div className="ReviewBody">
//     <Result
//     status="success"
//     title={t("Successfully Purchased Order!")}
//     subTitle={t("Thank You for Try  and hope to make another one")}
//     extra={[
//       // <Rate tooltips={desc}  className='Rate' onChange={setValue} value={value} />
//       ,
//       <Link to="/">
//         <Button type="primary" key="console">
//           {t("Buy Again")}   
//         </Button>
//       </Link>
//     ]}
//   />
     
//     </div>
//   )
// }

// export default ReviewBody

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
    title={t("Successfully Purchased Order!")}
    subTitle={t("Thank You for Try  and hope to make another one")}
extra={[
      <Link  className='link' to="/">
        <Button type="primary" className='button' key="console">
        {t("Buy Again")}   
        </Button>
      </Link>
    ]}
  />
     
    </div>
    </Layout>
  )
}

export default SuccessVerify
