import React, { useState } from 'react';
import {  Rate, Skeleton, Tooltip } from 'antd';
import { EyeFilled, HeartFilled, PlusOutlined } from '@ant-design/icons';
import { TProduct } from '../../Layout/app/Types';
import { Currency, UserImageURL } from '../../Layout/app/Const';
import useLoadingState from '../../Hooks/useLoadingState';
import { Link } from 'react-router-dom';
import { BaseURL, BaseURL_IMAGE } from '../../api/config';
import useImageError from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { useAddToCart } from '../../api/cart';
import { toast } from 'react-toastify';
import { useAddToFavourite, useRemoveFromFav } from '../../api/wishlist';
import { PiHeartBreakFill } from "react-icons/pi";
import { useAuth } from '../../Hooks/useAuth';
import {useNavigate} from  'react-router-dom';
import { GiTwoCoins } from "react-icons/gi";

const CardProduct = ({ itemSwiper }:any) => {
    
  const [loading, resetLoading] = useLoadingState(true, 2000);
  console.log(itemSwiper);
  
  const navigate = useNavigate()
    const {isAuthenticated} = useAuth()
    const {i18n, t} = useTranslation()
    const {mutate} = useAddToCart()
    const {mutate:mutateAddFav} = useAddToFavourite()
    const {mutate:mutateRemoveFav} = useRemoveFromFav()

  return (

          <div>
            <Skeleton className='unset' loading={loading} active >
                    <div key={itemSwiper?.id} className='Card_Productt'>

              {/* <div className='Card_Product_Top' onClick={()=>navigate(`/product/${itemSwiper.id}`)}> */}
                {/* <span className='Left'>{itemSwiper?.category?.category_translations?.at(0)?.name}</span> */}
                {/* <span className='Right'>
               <Link to={`/product/${itemSwiper.id}`}>
                  <EyeFilled className='SingleOrder_icon' />
                </Link>
                </span> */}
              {/* </div> */}

              <div className='Card_Product_Mid' onClick={()=>navigate(`/product/${itemSwiper.id}`)}>
                <img src={ BaseURL_IMAGE +itemSwiper?.product_main_image|| UserImageURL} onError={useImageError} alt={itemSwiper?.name} width="100%" height="60%" />
              </div>
              <div className='Card_Product_Bottom'  >
                <div className='product_name' onClick={()=>navigate(`/product/${itemSwiper.id}`)}>
                    {/* {itemSwiper?.product_translations?.at(0)?.name} */}
                    {itemSwiper?.category?.category_translations?.at(0)?.name}
                    {/* شمة */}
                    </div>

                <span>
                  <div className='price'>
                    <strong onClick={()=>navigate(`/product/${itemSwiper.id}`)}> 
                    {/* <GiTwoCoins/> */}
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
                    toast.success('added to cart')
                  }}>
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

