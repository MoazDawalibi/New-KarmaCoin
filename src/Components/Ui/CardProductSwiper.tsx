import React from 'react';
import {  Skeleton, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Currency, UserImageURL } from '../../Layout/app/Const';
import useLoadingState from '../../Hooks/useLoadingState';
import { BaseURL_IMAGE } from '../../api/config';
import useImageError from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { useAddToCart } from '../../api/cart';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import {useNavigate} from  'react-router-dom';

const CardProduct = ({ itemSwiper }:any) => {
    
  const [loading, resetLoading] = useLoadingState(true, 2000);
  
  const navigate = useNavigate()
    const {isAuthenticated} = useAuth()
    const {t} = useTranslation()
    const {mutate} = useAddToCart()

  return (
    <div>
      <Skeleton className='unset' loading={loading} active >
        <div key={itemSwiper?.id} className='Card_Productt'>

          <div className='Card_Product_Mid' onClick={()=>navigate(`/product/${itemSwiper.id}`)}>
            <img src={ BaseURL_IMAGE +itemSwiper?.product_main_image|| UserImageURL} onError={useImageError} alt={itemSwiper?.name} width="100%" height="60%" />
          </div>

          <div className='Card_Product_Bottom'  >

            <div className='product_name' onClick={()=>navigate(`/product/${itemSwiper.id}`)}>
                {/* {itemSwiper?.product_translations?.at(0)?.name} */}
              {itemSwiper?.category?.category_translations?.at(0)?.name}
            </div>

            <span>

              <div className='price'>
                <strong onClick={()=>navigate(`/product/${itemSwiper.id}`)}> 
                  {itemSwiper?.product_price} {Currency}
                </strong>
              </div>
              {
                isAuthenticated&&
              <div className='AddProduct' onClick={()=>{
                mutate({
                  product_id:itemSwiper?.id,
                  quantity:1
                })
                toast.success('added to cart')}}>
                <Tooltip title={t("Add To Cart")}>
                  <PlusOutlined />
                </Tooltip>
              </div>
              } 
            </span>

          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export default CardProduct;

