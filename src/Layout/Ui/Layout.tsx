import React from 'react'
import Header from './Header'
import Footer from './Footer'


const  Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {

  return (
  <div className={`${className} Layout`}>
      <Header/>
      <main className={`Layout_Body`}>
          {children}
      </main>
      <Footer/>
  </div>
  )
}

export default Layout