// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next';
// import {  useNavigate } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import { useSelector } from 'react-redux';
// import { verify } from 'crypto';
// const Auth = () => {
//   const [isActive, setIsActive] = useState(false);
//   const  {isAuthenticated}= useSelector((state:any)=>state.auth)
//   const navigate = useNavigate()

//   useEffect(()=>{

//     if(isAuthenticated){
//       navigate('/')
//     }
//   },[isAuthenticated])
  
//   const handleRegisterClick = () => {
//     setIsActive(true);
//   };

//   const handleLoginClick = () => {
//     setIsActive(false);
//   };  
//   const [t] = useTranslation();   


  
  
//   return (
//     <div className='Auth logo_image_bg'>
// <div  id="container" className={isActive ? 'container active' : 'container'}>
//   {/* <RegisterForm
//   handleLoginClick={handleLoginClick}
//   /> */}

//   {/* <LoginForm 
//     handleRegisterClick={handleRegisterClick}
//   /> */}
//   <div className="toggle-container ">
//     <div className="toggle">
//       <div className="toggle-panel toggle-left  "  >
//       <h1>{t("Hello, Friend!")}</h1>
//         <p>{t("Register with your personal details to use all of site features")}</p>
       
//         <button className="hidden" id="login" onClick={handleLoginClick}>
//           {t("Sign In")}
//         </button>

//       </div>
//       <div className="toggle-panel toggle-right">
//       <h1>{t("Welcome Back!")}</h1>
//         <p>{t("Enter your personal details to use all of site features")}</p>
        
//         <button className="hidden" id="register" onClick={handleRegisterClick}>
//           {t("Sign Up")}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>




//     </div>
//   )
// }

// export default Auth

import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page