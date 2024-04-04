import './Header.sass'
import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo.tsx'
import { useAppSelector } from '../../store/store.ts'

interface HeaderProps {
  altStyle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ altStyle }) => {
  const products = useAppSelector((state) => state.products)

  return (
    <header className={ classNames('header', { ['header--alt']: altStyle }) }>
      <div className="header__body">
        <div className="header__logo">
          <Logo altStyle={ altStyle }/>
        </div>
        <nav className="header__menu">
          <ul className="menu">
            <li className="menu__item">
              <NavLink
                to="store/keychain"
                className={ ({ isActive }) => (isActive
                  ? 'string string--small link link--active'
                  : 'string string--small link link--inactive')
                }>
                Магазин
                <div className="link__decorator"/>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="about"
                className={ ({ isActive }) => (isActive
                  ? 'string string--small link link--active'
                  : 'string string--small link link--inactive')
                }>
                О проекте
                <div className="link__decorator"/>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="archive"
                className={ ({ isActive }) => (isActive
                  ? 'string string--small link link--active'
                  : 'string string--small link link--inactive')
                }>
                Архив
                <div className="link__decorator"/>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="cart"
                className={ ({ isActive }) => (isActive
                  ? 'string string--small link link--active'
                  : 'string string--small link link--inactive')
                }>
                Корзина
                {
                  products.data.length > 0
                    ? <div className="link__cart-counter">
                      <span>{ products.data.length }</span>
                    </div>
                    : <div className="link__decorator"/>
                }
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header