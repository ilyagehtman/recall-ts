import styles from './Landing2.module.sass'
import animation from '../../assets/pages/landing/landing.gif'
import Footer from '../../component/footer/Footer.tsx'
import classNames from 'classnames'
import Header from '../../component/header/header.tsx'
import React, { useEffect, useState } from 'react'
import step1Photo from '../../assets/pages/landing/steps/step-1-photo.jpg'
import step2Photo from '../../assets/pages/landing/steps/step-2-photo.jpg'
import step3Photo from '../../assets/pages/landing/steps/step-3-photo.jpg'
import step4Photo from '../../assets/pages/landing/steps/step-4-photo.jpg'
import ProductOrderSelector from '../../component/ProductOrderSelector/ProductOrderSelector.tsx'
import Arrow from '../../component/Arrow/Arrow.tsx'

import earringProductPhoto_1 from '../../assets/pages/landing/products/earring/product-photo-1.jpg'
import earringProductPhoto_2 from '../../assets/pages/landing/products/earring/product-photo-2.jpg'
import earringProductPhoto_3 from '../../assets/pages/landing/products/earring/product-photo-3.jpg'
import filteredEarringProductPhoto_1 from '../../assets/pages/landing/products/earring/filtered/product-photo-1.jpg'
import filteredEarringProductPhoto_2 from '../../assets/pages/landing/products/earring/filtered/product-photo-2.jpg'
import filteredEarringProductPhoto_3 from '../../assets/pages/landing/products/earring/filtered/product-photo-3.jpg'

import keychainProductPhoto_1 from '../../assets/pages/landing/products/keychain/product-photo-1.jpg'
import keychainProductPhoto_2 from '../../assets/pages/landing/products/keychain/product-photo-2.jpg'
import keychainProductPhoto_3 from '../../assets/pages/landing/products/keychain/product-photo-3.jpg'
import filteredKeychainProductPhoto_1 from '../../assets/pages/landing/products/keychain/filtered/product-photo-1.jpg'
import filteredKeychainProductPhoto_2 from '../../assets/pages/landing/products/keychain/filtered/product-photo-2.jpg'
import filteredKeychainProductPhoto_3 from '../../assets/pages/landing/products/keychain/filtered/product-photo-3.jpg'


export default function Landing2() {
  const [ altHeader, setAltHeader ] = useState<boolean>(true)

  useEffect(() => {
    const home = document.getElementById('home')!
    const tutorial = document.getElementById('tutorial')!

    function changeHeader() {
      setAltHeader(!(home.scrollTop > tutorial.clientHeight - 10))
    }

    home.addEventListener('scroll', () => changeHeader())
  }, [])

  return (
    <div id="home" className={ styles.landing2 }>
      <Header disableSubstrate alt={ altHeader }/>
      <section className={ styles.main }>
        <div className={ styles.animation }>
          <h1 className={ classNames(styles.greetings, 'headerString', 'centerString', 'whiteHeaderString') }>
            {
              'recall — бренд\n' +
              'украшений из пластика,\n' +
              'помогающих ощутить связь\n' +
              'со своими воспоминаниями\n' +
              'инструмент для перемещения\n' +
              'электронных фото\n' +
              'в физический\n' +
              'мир'
            }
          </h1>
          <Circle background={ animation }/>
          <img className={ styles.img } src={ animation } alt="recall-animation"/>
        </div>
      </section>
      <Tutorial/>
      <section className={ styles.orderSelection }>
        <div className={ styles.selections }>
          <ProductOrderSelector
            label={ 'брелок' }
            slides={ [
              { img: keychainProductPhoto_1, imgF: filteredKeychainProductPhoto_1 },
              { img: keychainProductPhoto_2, imgF: filteredKeychainProductPhoto_2 },
              { img: keychainProductPhoto_3, imgF: filteredKeychainProductPhoto_3 }
            ] }
            to={ '/store/keychain' }
          />
          <div className={ styles.arrow }>
            <Arrow/>
          </div>
          <ProductOrderSelector
            label={ 'серьга' }
            slides={ [
              { img: earringProductPhoto_1, imgF: filteredEarringProductPhoto_1 },
              { img: earringProductPhoto_2, imgF: filteredEarringProductPhoto_2 },
              { img: earringProductPhoto_3, imgF: filteredEarringProductPhoto_3 }
            ] }
            to={ '/store/earring' }
          />
        </div>
        <Footer pageUpButtonEnabled/>
      </section>
    </div>
  )
}

interface CircleProps {
  background: string
}

function Circle({ background }: CircleProps) {
  return <div className={ styles.circle }>
    <img src={ background } alt={ 'recall-animation' }/>
  </div>
}

function Tutorial() {
  return (
    <section id="tutorial" className={ styles.tutorial }>
      <div className={ styles.tutorialBody }>
        <div className={ styles.tutorialTitle }>
          <h1 className="headerString">
            {
              'сохраняйте свои воспоминания\n' +
              'и помещайте их в реальный мир\n' +
              'в виде украшений'
            }
          </h1>
          <div className={ styles.tutorialDetails }>
            <div className={ styles.ph }>
              <span className="string paragraphString">*</span>
            </div>
            <div>
              <span className="string smallString paragraphString">
                {
                  'из любого цифрового фото на телефоне можно сделать \n' +
                  'украшение, которые будет напоминать вам о любимом\n' +
                  'моменте, месте, человеке, событии...\n\n' +
                  'создать украшение\n' +
                  'из фото просто!'
                }
              </span>
            </div>
          </div>
        </div>
        <div className={ styles.tutorialContent }>
          <div className={ styles.topArrows }>
            <svg width="375" height="104" viewBox="0 0 375 104" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M247.5 2L248.423 0.817749L248.016 0.5H247.5V2ZM373.183 101.489C374.005 101.388 374.59 100.639 374.489 99.8168L372.84 86.4179C372.739 85.5956 371.99 85.0111 371.168 85.1123C370.346 85.2134 369.761 85.962 369.863 86.7842L371.328 98.6944L359.418 100.16C358.596 100.261 358.011 101.01 358.112 101.832C358.213 102.654 358.962 103.239 359.784 103.137L373.183 101.489ZM3.5 100C3.5 79.2971 13.1837 62.9467 29.2085 49.9947C45.2761 37.0082 67.6762 27.4839 92.8965 20.5716C143.326 6.75016 204.542 3.5 247.5 3.5V0.5C204.458 0.5 142.924 3.74983 92.1035 17.6783C66.6988 24.6411 43.8489 34.3043 27.3227 47.6615C10.7538 61.0532 0.5 78.2029 0.5 100H3.5ZM246.577 3.18225L372.077 101.182L373.923 98.8177L248.423 0.817749L246.577 3.18225Z"
                fill="#E0E2E5"/>
            </svg>
            <svg width="375" height="104" viewBox="0 0 375 104" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M247.5 2L248.423 0.817749L248.016 0.5H247.5V2ZM373.183 101.489C374.005 101.388 374.59 100.639 374.489 99.8168L372.84 86.4179C372.739 85.5956 371.99 85.0111 371.168 85.1123C370.346 85.2134 369.761 85.962 369.863 86.7842L371.328 98.6944L359.418 100.16C358.596 100.261 358.011 101.01 358.112 101.832C358.213 102.654 358.962 103.239 359.784 103.137L373.183 101.489ZM3.5 100C3.5 79.2971 13.1837 62.9467 29.2085 49.9947C45.2761 37.0082 67.6762 27.4839 92.8965 20.5716C143.326 6.75016 204.542 3.5 247.5 3.5V0.5C204.458 0.5 142.924 3.74983 92.1035 17.6783C66.6988 24.6411 43.8489 34.3043 27.3227 47.6615C10.7538 61.0532 0.5 78.2029 0.5 100H3.5ZM246.577 3.18225L372.077 101.182L373.923 98.8177L248.423 0.817749L246.577 3.18225Z"
                fill="#E0E2E5"/>
            </svg>
          </div>
          <div className={ styles.steps }>
            <div className={ styles.step }>
              <div>
                <img alt={ 'stepImg1' } src={ step1Photo }/>
              </div>
              <div>
                <span className="string paragraphString">(1)</span>
              </div>
              <div>
                <span className="string paragraphString">
                  {
                    'выберите фото\n' +
                    'из своей галереи'
                  }
                </span>
              </div>
            </div>
            <div className={ styles.step }>
              <div>
                <img alt={ 'stepImg2' } src={ step2Photo }/>
              </div>
              <div>
                <span className="string paragraphString">(2)</span>
              </div>
              <div>
                <span className="string paragraphString">
                  {
                    'загрузите\n' +
                    'его на сайт'
                  }
                </span>
              </div>
            </div>
            <div className={ styles.step }>
              <div>
                <img alt={ 'stepImg3' } src={ step3Photo }/>
              </div>
              <div>
                <span className="string paragraphString">(3)</span>
              </div>
              <div>
                <span className="string paragraphString">
                  {
                    'отредактируйте\n' +
                    'изделие по желанию'
                  }
                </span>
              </div>
            </div>
            <div className={ styles.step }>
              <div>
                <img alt={ 'stepImg4' } src={ step4Photo }/>
              </div>
              <div>
                <span className="string paragraphString">(4)</span>
              </div>
              <div>
                <span className="string paragraphString">
                  {
                    'ожидайте!\n' +
                    'изготовление занимает\n' +
                    '3 рабочих дня'
                  }
                </span>
              </div>
            </div>
          </div>
          <div className={ styles.bottomArrows }>
            <svg width="288" height="76" viewBox="0 0 288 76" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M62.5 74V75.5H61.8012L61.3516 74.965L62.5 74ZM274.939 0.939339C275.525 0.353554 276.475 0.353554 277.061 0.939339L286.607 10.4853C287.192 11.0711 287.192 12.0208 286.607 12.6066C286.021 13.1924 285.071 13.1924 284.485 12.6066L276 4.12132L267.515 12.6066C266.929 13.1924 265.979 13.1924 265.393 12.6066C264.808 12.0208 264.808 11.0711 265.393 10.4853L274.939 0.939339ZM3.1484 1.03503L63.6484 73.035L61.3516 74.965L0.8516 2.96497L3.1484 1.03503ZM62.5 72.5C100.169 72.5 153.4 64.4675 197.197 51.4736C219.099 44.9756 238.553 37.2624 252.499 28.7455C259.472 24.4867 265.004 20.0652 268.779 15.5487C272.548 11.0375 274.5 6.51342 274.5 2H277.5C277.5 7.4277 275.144 12.6094 271.081 17.4724C267.021 22.3299 261.194 26.9507 254.063 31.3058C239.799 40.0168 220.065 47.8183 198.05 54.3497C154.013 67.4148 100.494 75.5 62.5 75.5V72.5Z"
                fill="#E0E2E5"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}