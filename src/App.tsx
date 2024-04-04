import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout.tsx'
import Editor from './pages/Editor/Editor.tsx'
import About from './pages/About/About.tsx'
import Archive from './pages/Archive/Archive.tsx'
import Landing from './pages/Landing/Landing.tsx'
import Cart from './pages/Cart/Cart.tsx'

export default function App() {
  return (
    <Routes>
      <Route path={ '/' } element={ <Landing/> }/>
      <Route element={ <Layout/> }>
        <Route path={ 'cart' } element={ <Cart/> }/>
        <Route path={ 'about' } element={ <About/> }/>
        <Route path={ 'archive' } element={ <Archive/> }/>
        <Route path={ 'store/earring' } element={ <Editor name={ 'серьга' } markup={ 500 }/> }/>
        <Route path={ 'store/keychain' } element={ <Editor name={ 'брелок' } markup={ 700 }/> }/>
      </Route>
    </Routes>
  )
}
