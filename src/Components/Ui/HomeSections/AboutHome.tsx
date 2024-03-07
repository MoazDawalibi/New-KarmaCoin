import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AboutHome = () => {
  const {t} = useTranslation();

  return (
    <div className='AboutHome'>
        <h1>{t("A few about us")}</h1>
        <p>{t("Coins and numismatics are our passion. We would like to share this with you. Whether in gold, silver or bronze: coins are so much more than heads or tails. They are an expression of history and a good investment")}.</p>
        <p>{t("Finding your way in the world of coins requires knowledge, experience and reputability. We offer all of these things, acting for you competently and individually. Are you looking for experts in Greek, Roman, Byzantine, medieval or modern numismatics")}?</p>
        <p>{t("You are in the right place")}.</p>
        <Link className='link' to={'/about'}>{t("Read more")} <MdKeyboardDoubleArrowRight/></Link>
    </div>
  )
}

export default AboutHome