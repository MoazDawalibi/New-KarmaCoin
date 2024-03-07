import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface CardProps {
    title:string,
    description:string,
    name:string,
    link:string
}
const ContactCardHome = ({title , description , name, link}:CardProps) => {

  return (
    <div className='ContactCard'>
        <div className='left'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

        <div className='right'>
            <Link className='link' to={link}>{name}  <MdKeyboardDoubleArrowRight/> </Link>
        </div>
    </div>
  )
}

export default ContactCardHome