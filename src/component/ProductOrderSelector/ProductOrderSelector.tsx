import React, { useEffect, useState } from 'react'
import './ProductOrderSelector.sass'
import { Link } from 'react-router-dom'

interface ProductOrderSelectorProps {
  slides: { img: string, imgF: string }[]
  label: string
  to: string
}

const ProductOrderSelector: React.FC<ProductOrderSelectorProps> = ({
                                                                     slides,
                                                                     label,
                                                                     to
                                                                   }) => {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0)
  const [ hover, setHover ] = useState(false)

  let interval: number | null = null

  useEffect(() => {
    if (hover) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % slides.length)
      }, 600)
    } else {
      if (interval) clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [ slides.length, hover ])

  return (
    <Link
      to={ to }
      className="product-order-selector"
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <h1 className="headerString whiteHeaderString product-order-selector__label">{ label }</h1>
      <div className="product-order-selector__ellipse"/>

      <img
        src={ slides[currentImageIndex].imgF }
        className="product-order-selector__mask"
        alt={ 'filtered' }
      />

      <div className="product-order-selector__radar"/>

      { slides.map((image: { img: string }, index: number) => (
        <img
          key={ index }
          src={ image.img }
          className="product-order-selector__slide"
          alt={ `Image ${ index }` }
          style={ {
            opacity: index === currentImageIndex ? 1 : 0
          } }
        />
      )) }
    </Link>
  )
}

export default ProductOrderSelector