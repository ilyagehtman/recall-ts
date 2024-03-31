import './App.css'
import { Route, Routes } from 'react-router-dom'

import Missing from './pages/Missing/Missing.tsx'
import Landing from './pages/Landing/Landing.tsx'
import Cart from './pages/Cart/Cart.tsx'
import About from './pages/About/About.tsx'
import Archive from './pages/Archive/Archive.tsx'
import Editor from './pages/Editor/Editor.tsx'

export default function App() {
    return (
        <Routes>
            <Route path={ '*' } element={ <Missing/> }/>
            <Route path={ '/' } element={ <Landing/> }/>
            <Route path={ '/cart' } element={ <Cart/> }/>
            <Route path={ '/about' } element={ <About/> }/>
            <Route path={ '/archive' } element={ <Archive/> }/>
            <Route path={ '/editor/:type' } element={ <Editor/> }/>
        </Routes>
    )
}
