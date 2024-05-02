import './App.module.sass'
import Cart from './pages/cart/Cart.tsx'
import About from './pages/about/About.tsx'
import Store from './pages/store/Store.tsx'
import Legal from './pages/legal/Legal.tsx'
import Archive from './pages/archive/Archive.tsx'
import Missing from './pages/missing/Missing.tsx'
import Checkout from './pages/checkout/Checkout.tsx'
import Header from './component/header/header.tsx'
import Footer from './component/footer/Footer.tsx'
import { Outlet, Route, Routes } from 'react-router-dom'
import Landing2 from './pages/landing2/Landing2.tsx'

export default function App() {

  return (
    <Routes>
      <Route path="*" element={ <Missing/> }/>
      <Route path="/" element={ <Landing2/> }/>
      <Route element={ <Layout/> }>
        <Route path="cart" element={ <Cart/> }/>
        <Route path="about" element={ <About/> }/>
        <Route path="legal" element={ <Legal/> }/>
        <Route path="archive" element={ <Archive/> }/>
        <Route path="checkout/:key" element={ <Checkout/> }/>
        <Route path="store/:category" element={ <Store/> }/>
      </Route>
    </Routes>
  )
}

function Layout() {
  return <div className="layout">
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>
}