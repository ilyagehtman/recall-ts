import React, { ComponentType, Suspense } from 'react'
import LoadingScreen from './LoadingScreen.tsx'

interface LoadableProps {
    Component: ComponentType<any>
}

const Loadable: React.FC<LoadableProps> = ({ Component, ...props }) => {
    return <Suspense fallback={ <LoadingScreen/> }>
        <Component { ...props }/>
    </Suspense>
}

export default Loadable