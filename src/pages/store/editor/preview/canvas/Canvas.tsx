import styles from './Canvas.module.sass'
import { useP5 } from '../../../../../hooks/useP5.ts'
import Sketch from 'react-p5'
import React from 'react'
import resetIcon from '../../../../../assets/pages/store/reset-icon.svg'
import useProductSizeDescription from '../../../../../hooks/useProductSizeDescription.ts'
import { IProduct } from '../../../../../domain/IProduct.ts'

interface CanvasProps {
  canvasTiles: number
  canvasEllipseSize: number
  product: Partial<IProduct>
  setCanvas: (canvas: HTMLCanvasElement) => void
  imageBase64Data: string
  setImageBase64Data: (imageBase64Data?: string) => void
}

export default function Canvas(props: CanvasProps) {
  const getProductSizeDescription = useProductSizeDescription()

  const { preload, setup, draw } = useP5(
    props.product.color?.hex,
    props.canvasTiles,
    props.canvasEllipseSize,
    props.imageBase64Data,
    props.setCanvas
  )

  function clearCanvas(): void {
    props.setImageBase64Data(undefined)
  }

  return (
    <div className={ styles.canvas }>
      <Sketch
        preload={ preload }
        setup={ setup }
        draw={ draw }
      />
      <div className={ styles.resetButton } onClick={ () => clearCanvas() }>
        <img src={ resetIcon } alt={ 'reset' }/>
      </div>
      <div className={ styles.sizeDescription }>
        <span className="string paragraphString centerString">
          { `размер: ${ getProductSizeDescription(props.product) } см` }
        </span>
      </div>
    </div>
  )
}
