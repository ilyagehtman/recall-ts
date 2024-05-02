import styles from './MiniatureProductSelector.module.sass'

import earring from '../../assets/pages/landing/products/earring/product-photo-1.jpg'
import keychain from '../../assets/pages/landing/products/keychain/product-photo-1.jpg'

import earringFiltered from '../../assets/pages/landing/products/earring/filtered/product-photo-1.jpg'
import keychainFiltered from '../../assets/pages/landing/products/keychain/filtered/product-photo-1.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { HeaderString } from '../String/String.tsx'

interface MiniatureCategorySelectorProps {
  pathname: string
  className?: string
}

export function MiniatureCategorySelector({ className, pathname }: MiniatureCategorySelectorProps) {
  const nav = useNavigate()
  return (
    <div className={
      classNames(
        className,
        styles.miniatureProductSelector
      )
    }>
      <div className={ styles.triangle }/>
      <div className={ styles.body }>
        <div
          onClick={ () => nav('/store/keychain') }
          className={ classNames(styles.selector, { [styles.active]: pathname === '/store/keychain' }) }>{ pathname === '/store/keychain'
          ? <img src={ keychain } alt={ 'order-keychain' }/>
          : <img src={ keychainFiltered } alt={ 'order-keychain' }/>
        }
          <HeaderString color={ 'light' } value="брелок"/>
        </div>
        <div
          onClick={ () => {
            nav('/store/earring')
          } }
          className={ classNames(styles.selector, { [styles.active]: pathname === '/store/earring' }) }>
          { pathname === '/store/earring'
            ? <img src={ earring } alt={ 'order-earring' }/>
            : <img src={ earringFiltered } alt={ 'order-earring' }/>
          }
          <HeaderString color={ 'light' } value="серьга"/>
        </div>
      </div>
    </div>
  )
}