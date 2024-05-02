import './LandingLayout.sass'
import { FC, ReactNode, useState } from 'react'
import Header from '../component/header/header.tsx'
import { animated, useSpring } from '@react-spring/web'

interface LandingLayoutProps {
    children: ReactNode
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => {
    const [ flip, setFlip ] = useState(false)
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        delay: 200
    })

    return <animated.div style={ style } className="landing-layout">
        <div className="landing-layout__header">
            <Header altStyle/>
        </div>
        { children }
    </animated.div>
}

export default LandingLayout