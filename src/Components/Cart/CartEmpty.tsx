import React from 'react'
import { BsEmojiFrownFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';

const CartEmpty = () => {
    const {t} = useTranslation(); 

  return (
    <div className='CartBody_empty'>
        <p className='EmptyCart_text'>{t("Sorry, your cart is")} <span>{t("empty")}</span>...</p>
        <span className='Empty_icon'><BsEmojiFrownFill/></span>
    </div>
  )
}

export default CartEmpty