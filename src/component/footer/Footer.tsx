import styles from './Footer.module.sass'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface FooterProps {
  pageUpButtonEnabled?: boolean
}

const Footer: React.FC<FooterProps> = ({ pageUpButtonEnabled = false }) => {
  return <footer className={ styles.footer }>
    <div className={ styles.body }>
      <div className={ styles.recallContacts }>
        <div>
          <a className="string altString"
             href={ 'mailto: polina.manskih@gmail.com' }>{ 'polina.manskih@gmail.com' }</a>
          <div>
            <a className="string altString" href={ 'mailto: recall@gmail.com' }>{ 'recall@gmail.com' }</a>
            <a className="string altString" href={ 'https://t.me/recall' } target={ '_blank' }>{ '@recall' }</a>
          </div>
        </div>
      </div>
      {
        pageUpButtonEnabled && (
          <div className={ styles.pageUpButton } onClick={ () => {
            document.getElementById('home')!.scrollTo({ behavior: 'smooth', top: 0 })
          } }>
            <div style={ { transform: 'rotate(-90deg)' } }>
              <span className="string boldString smallString">-----&gt;</span>
            </div>
            <div>
              <span className="string boldString smallString">наверх</span>
            </div>
          </div>
        )
      }
      <div className={ styles.rightWrapper }>
        <NavLink
          to={ '/legal' }
          className="string altString"
        >
          юридическая информация
        </NavLink>
        <div className={ styles.authorActions }>
          <span className="string altString">{ 'ИНН: 422318025156' }</span>
          <a
            id="blink"
            className="string altString"
            href={ 'https://t.me/manskihh' }
            target={ '_blank' }>{ 'Манских Полина Александровна' }
          </a>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer