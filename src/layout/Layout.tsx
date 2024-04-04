import './Layout.sass'
import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../component/Header/Header.tsx'
import Footer from '../component/Footer/Footer.tsx'

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = () => {
  return <div className="layout">
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>
}

export default Layout