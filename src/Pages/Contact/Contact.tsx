import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../Layout/Ui/Layout'
import { useTranslation } from 'react-i18next';
import { useSendMessage } from '../../api/contact_us';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ContactImage from './ContactImage';
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Contact = () => {
  const form = useRef<any>(null);
  const { t } = useTranslation();
  const {mutate , isSuccess,isLoading} = useSendMessage()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_49y5tqk', 'template_w4976q5', form.current, 'ivQFaIMbNe3DbNhA0')
        .then((result:any) => {
          // console.log(result.text);
          form.current.reset();
          toast.success(t('contact.emailSentSuccess'));
        })
        .catch((error:any) => {
          console.log(error.text);
        });
    }

    if(!Name || !Email || !Message  ){
      toast.error(t("please_fill_all_input"))
    }

    mutate({
      name:Name,
      email:Email ,
      message:Message
    })
  };

  const [Name , setName] = useState('') 
  const [Email , setEmail] = useState('') 
  const [Message , setMessage] = useState('') 

  useEffect(()=>{
    if(isSuccess){
      setMessage('')
      setName('')
      setEmail('')
    }
  },[isSuccess])


  return (
    <Layout>
      <div className='title_container'> <p className='title'>{t("Contact Us")}</p></div>

      <div className='contact_info'>
        <p className='title'>{t("Addresses")}</p>
        <div className='info_container'>
          <div className='address'>
            {/* <h1>Address</h1> */}
            <p>location-location</p>
            <p>location-location</p>

          </div>

          <div className='numbers'>
            <p><FiPhone/>+963 958 261 912</p>
            {/* <p><FiPhone/>numbers</p> */}
            <p><CiMail/>mail@mail.com</p>
          </div>

          <div className='second_number'>
            <p>VAT Number: CHE-394.131.510</p>
          </div>
        </div>
      </div>

      <div className="Contact_section" id="ContactMe">
      <div>
        <h1>{t('contactUs.title')}</h1>
        <p>{t('contactUs.sendYourMessage')}</p>
        <ContactImage />
      </div>
      <div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group controlId="formName">
            <Form.Label>{t('contactUs.name')}</Form.Label>
            <Form.Control className='contact_input' type="text" name="to_name" placeholder={t('contactUs.enterYourName')} value={Name} onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('contactUs.email')}</Form.Label>
            <Form.Control className='contact_input' type="email" name="from_name" placeholder={t('contactUs.enterYourEmail')} value={Email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('contactUs.message')}</Form.Label>
            <Form.Control className='contact_input' as="textarea" rows={4} name="message" placeholder={t('contactUs.typeYourMessage')}value={Message} onChange={(e)=>setMessage(e.target.value)} />
          </Form.Group>
          <div className='button_container'>
            <Button className='mt-4 button' type="submit">
              {isLoading? t("loading...") :<span>{t('contactUs.submit')}<MdKeyboardDoubleArrowRight/></span>}
            </Button>
          </div>
        </Form>
      </div>
    </div>
    </Layout>
  )
}

export default Contact