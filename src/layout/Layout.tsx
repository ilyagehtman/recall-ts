import './Layout.sass'
import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../component/header/header.tsx'
import Footer from '../component/footer/Footer.tsx'
import { animated, useSpring } from '@react-spring/web'

interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        delay: 200
    })

    return <animated.div style={ style } className="layout">
        <div className="layout__header">
            <Header/>
        </div>
        <main>
            { children ? children : <Outlet/> }
        </main>
        <Footer/>
    </animated.div>
}

export default Layout