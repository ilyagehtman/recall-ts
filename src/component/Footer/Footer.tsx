import './Footer.sass'
import React from 'react'

interface FooterProps {
  pageUpButtonEnabled?: boolean
}

const Footer: React.FC<FooterProps> = ({ pageUpButtonEnabled = false }) => {
  return <footer className="footer">
    <div className="footer__body">
      <div className="footer__recall-contacts">
        <div>
          <span className="string string--alt">{ 'пишите' }</span>
          <a className="string string--alt" href={ 'mailto: recall@gmail.com' }>{ 'recall@gmail.com' }</a>
        </div>
        <div>
          <a className="string string--alt" href={ 'https://t.me/recall' } target={ '_blank' }>{ '@recall' }</a>
        </div>
      </div>

      {
        pageUpButtonEnabled && (
          <div className="footer__page-up-button">
            <div style={ { transform: 'rotate(-90deg)' } }>
              <span className="string string--bold string--small">-----&gt;</span>
            </div>
            <div>
              <span className="string string--bold string--small">наверх</span>
            </div>
          </div>
        )
      }

      <div className="footer__author-contacts">
        <span className="string string--alt">{ '2024' }</span>
        <a
          id="blink"
          className="string string--alt"
          href={ 'https://t.me/manskihh' }
          target={ '_blank' }>{ 'Манских' }
        </a>
      </div>
    </div>
  </footer>
}

export default Footer