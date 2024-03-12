import React from 'react'
import Layout from '../../Layout/Ui/Layout'
import ContactCardHome from '../../Components/Ui/ContactCardHome'
import { useGetAllHome } from '../../api/Home';
import Highlight from '../../Components/Ui/HomeSections/Highlight';
import HomeNowCard from '../../Components/Ui/HomeNowCard';
import AboutHome from '../../Components/Ui/HomeSections/AboutHome';
import { BaseURL } from '../../api/config';
import { useTranslation } from 'react-i18next';
import LoadingPage from '../Loading/LoadingPage';

const Home = () => {
  const {data , isLoading} = useGetAllHome();
  const {t}= useTranslation()
console.log(data?.data);
  
  return (
    <Layout className='HomePage'> 

<div className='slider_section'><img src={BaseURL + data?.data.slider[0]?.slider_translations[0]?.image} alt='Home Image'/></div>
{/* <div className='slider_section'><img src={"/homeimage.jpg"} alt='Home Image'/></div> */}


      <div className='contact'>
        <ContactCardHome 
          title={t('Contact Us')}
          description={t('Send us your messages on our email.')}
          name={t('Contact Us')}
          link='contact'
        />
        <ContactCardHome 
          title={t('consign')}
          description={t('Send us your coins photo.')}
          name={t('consign')}
          link='consign'
        />
      </div>

      <div className='highlight'>
        <h1>{t("Highlight")}</h1>
       {isLoading ? <LoadingPage/> : <Highlight data={data?.data?.product_highlight}/> } 
      </div>

      <div className='highlight'>
        <h1>{t("Most Purchased")}</h1>
        {isLoading ? <LoadingPage/> : <Highlight data={data?.data?.product_most_purchase}/> } 
      </div>

      <div className='ads'>
        <HomeNowCard 
          link='Register'
          text={t('register to get all the features.')}
          title={t('Register now')}
          name={t('Register')}
        />
        <HomeNowCard 
          link='contact'
          name={t('Contact')}
          text={t('send us all your messages.')}
          title={t('Contact us now')}
        />
      </div>

      <div className='about'>
        <AboutHome/>    
      </div>

    </Layout>
  )
}

export default Home