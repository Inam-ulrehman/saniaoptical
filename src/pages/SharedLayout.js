import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

import DesktopNavbar from '../components/navbar/DesktopNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'

const SharedLayout = () => {
  return (
    <main>
      <DesktopNavbar />
      <MobileNavbar />
      <section className='section'>
        <Outlet />
        <Footer />
      </section>
    </main>
  )
}

export default SharedLayout
