import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useGetSocialMedia } from '../../api/social_media';
import { Tooltip } from 'antd';
import { BaseURL } from '../../api/config';

const Footer = () => {
    const {t} = useTranslation();
    const { data: socialMediaData } = useGetSocialMedia()
  
  const socialMediaItems = Array.isArray(socialMediaData?.data)
  ? socialMediaData?.data.map((social: any, index: number) => (
      <Tooltip key={index} title={social.social_media_link}>
        <img
          className='icon'
          onClick={() => {
            window.location.href = social.social_media_link;
          }}
          alt="social-image"
          src={`${BaseURL}${social.social_media_image}`}
          style={{ width: 40 }}
        />
      </Tooltip>
    ))
  : null;

  return (
    <div className='main_container'>
        <div className='links'>
          <Link className='Link' to={'/'} >  <h1>{t("home")}</h1> </Link>
          <Link className='Link' to={'/about'} >  <h1>{t("about")}</h1> </Link>
          <Link className='Link' to={'/contact'} >  <h1>{t("contact")}</h1> </Link>
          <Link className='Link' to={'/consign'} >  <h1>{t("consign")}</h1> </Link>
          <Link className='Link' to={'/products'} >  <h1>{t("Products")}</h1> </Link>
          <Link className='Link' to={'/orders'} >  <h1>{t("orders")}</h1> </Link>
        </div>
        <div className='media'>
            <div className='icons_social'>
                {socialMediaItems}
            </div>
        </div>    
    </div>
  )
}

export default Footer