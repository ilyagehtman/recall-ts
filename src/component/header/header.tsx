import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './header.module.sass'
import { NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom'
import { MiniatureCategorySelector } from '../MiniatureProductSelector/MiniatureCategorySelector.tsx'
import Logo from '../Logo/Logo.tsx'
import { useAppSelector } from '../../store/store.ts'

const navigationPathMapping = [
  { path: '/archive', name: 'архив' },
  { path: '/about', name: 'о проекте' },
  { path: '/legal', name: 'юр. инфо' },
  { path: '/cart', name: 'корзина' }
]

export default function Header({ alt, disableSubstrate }: { alt?: boolean, disableSubstrate?: boolean }) {
  const nav = useNavigate()
  const { pathname } = useLocation()

  function renderNavigator() {
    if (pathname === '/archive' ||
      pathname === '/about' ||
      pathname === '/legal' ||
      pathname === '/cart' ||
      pathname.startsWith('/store')
    ) {
      return <div className={ styles.navigator }>
        <span
          className="string boldString smallString"
          onClick={ () => nav(-1) }
        >{ `<----- ${ navigationPathMapping.find(m => m.path === pathname)?.name ?? 'обратно' }` }</span>
        {
          pathname.startsWith('/store') &&
            <span className="string smallString paragraphString">
              { pathname === '/store/earring' && 'серьга' }
              { pathname === '/store/keychain' && 'брелок' }
            </span>
        }
      </div>
    }
  }

  return (
    <header className={ classNames(styles.header, { [styles.altHeader]: alt }) }>
      { !disableSubstrate && <div className={ styles.substrate }/> }
      <nav>
        { renderNavigator() }
        <NavLink to={ '/' }><Logo/></NavLink>
        <ul className={ styles.menu }>
          <LinkToStore/>
          <StylizedLink to="/archive" value="архив"/>
          <StylizedLink to="/about" value="о проекте"/>
          <LinkToCart/>
        </ul>
      </nav>
    </header>
  )
}


function StylizedLink({ value, ...props }: NavLinkProps & { value: string }) {
  return (
    <li>
      <NavLink { ...props } className={ ({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : '' }>
        { value }
        <div className={ styles.ld }/>
      </NavLink>
    </li>
  )
}

function LinkToCart() {
  const { data } = useAppSelector(state => state.products)

  function renderLinkDecor() {
    return data.length > 0
      ? <div className={ styles.productCounter }><span>{ data.length }</span></div>
      : <div className={ styles.ld }/>
  }

  return (
    <li>
      <NavLink to="/cart" className={ ({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : '' }>
        корзина
        { renderLinkDecor() }
      </NavLink>
    </li>
  )
}

function LinkToStore() {
  const { pathname } = useLocation()
  const [ showMiniatureCategorySelector, setShowMiniatureCategorySelector ] = useState<boolean>(false)

  function renderMiniatureCategorySelector() {
    return pathname !== '/' && <MiniatureCategorySelector
        pathname={ pathname }
        className={
          classNames(
            styles.headerMiniatureProductSelector,
            { [styles.show]: showMiniatureCategorySelector }
          )
        }
    />
  }

  function handleOnClick(e: React.MouseEvent<HTMLLIElement>) {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('home')!.scrollTo({ top: 5000, behavior: 'smooth' })
    }
  }

  return (
    <li
      onClick={ handleOnClick }
      onMouseEnter={ () => setShowMiniatureCategorySelector(true) }
      onMouseLeave={ () => setShowMiniatureCategorySelector(false) }
    >
      <span
        className={ classNames({
          [styles.active]: pathname.startsWith('/store')
          || showMiniatureCategorySelector
        }) }>
        магазин
        <div className={ styles.ld }/>
      </span>
      { renderMiniatureCategorySelector() }
    </li>
  )
}