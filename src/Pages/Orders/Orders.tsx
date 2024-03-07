import React, { useState } from 'react'

import { Spin } from 'antd';
import OrdersForm from './OrdersForm';
import { useGetAllOrders } from '../../api/orders';
import LoadingPage from '../Loading/LoadingPage';
import NotFoundPage from '../../Layout/Ui/NotFoundPage';
import Layout from '../../Layout/Ui/Layout';
import { useTranslation } from 'react-i18next';

const Orders = () => {

  const { data , isLoading , isError} = useGetAllOrders();
  const {t} = useTranslation();

  if(isLoading){
    return <LoadingPage/>
  }
  if(isError){
    // return <NotFoundPage/>
  }
  
  return (
    <Layout className='Orders'>
      <div className='title_container'><h1>{t("Orders")}</h1></div>
     <div className='form'>
      <OrdersForm data={data}/>
     </div>
    </Layout>
  )
}

export default Orders
