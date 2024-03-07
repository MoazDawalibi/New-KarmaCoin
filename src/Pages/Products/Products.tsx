import React, { useState } from 'react'
// import Layout from '../../Layout/app/Layout'
import ProductsHeader from './ProductsHeader';
import ProductsFilter from './ProductsFilter';
import ProductsCards from './ProductsCards';
// import ProductPagination from './ProductPagination';
import { useGetAllProductWithPaginations } from '../../api/Product';
import { Spin } from 'antd';
import LoadingPage from '../Loading/LoadingPage';
import Layout from '../../Layout/Ui/Layout';

const Products = () => {

  const [style, setstyle] = useState(true)
  const { data , isLoading } = useGetAllProductWithPaginations();
  
  const Props = { style, setstyle,data ,isLoading }

  return (
    <Layout className='Products'>
      <ProductsHeader {...Props} />
      <div className='Products_Body'>
        <ProductsFilter />
        {isLoading ? <LoadingPage/>  :   <ProductsCards {...Props} /> }

      </div>
    </Layout>
  )
}

export default Products

