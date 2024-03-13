import React from 'react';
import {  Skeleton, Tooltip } from 'antd';
import { EyeFilled, PlusOutlined } from '@ant-design/icons';
import { Currency, UserImageURL } from '../../Layout/app/Const';
import useLoadingState from '../../Hooks/useLoadingState';
import { Link } from 'react-router-dom';
import { BaseURL_IMAGE } from '../../api/config';
import useImageError from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { useAddToCart } from '../../api/cart';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import {useNavigate} from  'react-router-dom';

const CardProduct = ({ item }:any) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);

  const navigate = useNavigate()
    const {isAuthenticated} = useAuth()
    const {t} = useTranslation()
    const {mutate} = useAddToCart()

  return (
      <Skeleton className='unset' loading={loading} active >
        <div key={item?.id} className='Card_Product'>
          <div className='Card_Product_Top' onClick={()=>navigate(`/product/${item.id}`)}>

            <span className='Left'>
              <p>{item?.category?.category_translations?.at(0)?.name}</p>
              <div onClick={()=>navigate(`/product/${item.id}`)}>{item?.product_translations?.at(0)?.name}</div>
            </span>

            <span className='Right'>
              <Link to={`/product/${item.id}`}>
                <EyeFilled className='SingleOrder_icon' />
              </Link>
            </span>

          </div>

          <div className='Card_Product_Mid' onClick={()=>navigate(`/product/${item.id}`)}>
            <img src={ BaseURL_IMAGE +item?.product_main_image|| UserImageURL} onError={useImageError} alt={item?.name} width="100%" height="60%" />
          </div>

          <div className='Card_Product_Bottom'  >
            <div>
              <div>
                <strong onClick={()=>navigate(`/product/${item.id}`)}> 
                  {item?.product_price} {Currency}
                </strong>
              </div>
              {
                isAuthenticated&&
              <div className='AddProduct' onClick={()=>{
                mutate({
                  product_id:item?.id,
                  quantity:1
                })
                toast.success('added to cart')
              }}>
                <Tooltip title={t("Add To Cart")}>
                  <PlusOutlined />
                </Tooltip>
              </div>
            } 
            </div>
          </div>
        </div>

      </Skeleton>
  );
};

export default CardProduct;

