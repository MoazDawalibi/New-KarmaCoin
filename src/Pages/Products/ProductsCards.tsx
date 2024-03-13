import React from 'react';
import { Spin } from 'antd';
import CardProduct from '../../Components/Product/ProductCard';
import ProductPagination from './ProductPagination';

const ProductsCards = ({ style, setStyle, data, isLoading }: any) => {
  return (
    <div className={style ? 'ProductsCards' : 'ProductsCards2'}>
      {isLoading ? (
        <Spin />
      ) : (
        data?.data?.map((item: any, index: any) => (
          <div className={style ? 'normalCard' : 'FullCard'} key={index}>
            <CardProduct item={item} />
          </div>
        ))
      )}
      <ProductPagination data={data?.pagination} />
    </div>
  );
};

export default ProductsCards;
