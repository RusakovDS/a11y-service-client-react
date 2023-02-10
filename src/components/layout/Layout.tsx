import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='w-full h-screen grid grid-rows-layout'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout