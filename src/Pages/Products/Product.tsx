import React, { useState } from 'react'
import { Button, CollapseProps, RadioChangeEvent } from 'antd'
import { Currency } from '../../Layout/app/Const'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../../api/Product'
import { BaseURL } from '../../api/config'
import { useAddToCart } from '../../api/cart'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { useAuth } from '../../Hooks/useAuth'
import Layout from '../../Layout/Ui/Layout'
import Highlight from '../../Components/Ui/HomeSections/Highlight'
import { useGetAllHome } from '../../api/Home'

const OneProduct = () => {

  const { id } = useParams()
  const {t} = useTranslation();

  const {mutate} = useAddToCart()
  const {data} = useGetSingleProduct({product_id : id})
  const {data:dataSwiper} = useGetAllHome({product_id : id})
  const {isAuthenticated} = useAuth()

  const Product =data?.data?.product 
  const product_highlight = dataSwiper?.data?.product_highlight
  const product_most_purchase = dataSwiper?.data?.product_most_purchase
  
  return (
    <Layout className='Product'>

      <div className='Product_Info'>
        <div className='Product_Left'>
          <img className='Product_Info_image' src={BaseURL+ Product?.product_main_image} alt={Product?.name} width="100%" height="60%" />
        </div>

        <div className='Product_Right'>
          <h3>{Product?.product_translations?.at(0)?.name}</h3>
          <div>
            <h6>{t("Category")}  : </h6> <img  src={BaseURL+ Product?.category?.category_image} style={{width:30, height:30 , borderRadius:"50%" }}/> <h6>{Product?.category?.category_translations?.at(0)?.name}</h6>
          </div>

          <div className='Product_Description'>
            <h6>{t("Description")}  : {Product?.product_translations?.at(0)?.description} </h6>
          </div>

          <div>
            <h6 >{t("Price")}  : </h6> <h6 className='Price'> {Product?.product_price} {Currency} </h6>
            <br/>
            <h6 >{t("Quantity")}  : </h6> <h6 className='Price'> {Product?.product_quantity}  </h6>
          </div>

          <div>
            <h6>{t("Purchasing Count")}  : </h6> <h6 className='Price'> {Product?.product_purchasing_count}  </h6>
          </div>
          {
            isAuthenticated&&
            <Button type="primary" block onClick={()=>{mutate({
              product_id:Product?.id, 
              quantity:1})
                toast.success(t("added to cart"))}}>
              {t("Add To Cart")}
            </Button>
          }
        </div>

      </div>

      <Highlight data={product_highlight}/>
      <Highlight data={product_most_purchase}/>

    </Layout>
  )
}

export default OneProduct