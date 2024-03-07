import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface HomeNowCardProps{
    title:string,
    text:string,
    link:string,
    name:string
}

const HomeNowCard = ({title, text,link,name}:HomeNowCardProps ) => {
  return (
    <div className='HomeNowCard'>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
        <Link to={link} className='link'>{name} <MdKeyboardDoubleArrowRight/> </Link>
        </div>
    </div>
  )
}

export default HomeNowCard