import React from 'react'
import { useGetAboutUs } from '../../api/app_info'
import { useTranslation } from 'react-i18next'
import LoadingPage from '../Loading/LoadingPage'
import Layout from '../../Layout/Ui/Layout'

const About = () => {
  const {data , isLoading} = useGetAboutUs({id:1})

  const [t] = useTranslation()
  if(isLoading){

    return <LoadingPage/>
  }

  return (
    <Layout>
      <div className='AboutPage'>
        <div className='title_container'><h1>{t("about")}</h1></div>
        <div className='description'>
          <h3 className='who_are_we'>{t("Who are we")}</h3>
          <p>{data?.data?.translations?.at(0)?.content}</p>
        </div>
    </div>
    </Layout>
  )
}

export default About
