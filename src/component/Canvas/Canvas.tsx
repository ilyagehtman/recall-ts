import React, { SetStateAction } from 'react'
import { Product } from '../../domain/Product.ts'
import Sketch from 'react-p5'
import { useP5 } from '../../hooks/useP5.ts'

type RecallCanvasProps = {
  product: Product

  canvasTiles: number
  canvasEllipseSize: number

  imgBase64Data: string

  setCanvas: React.Dispatch<SetStateAction<HTMLCanvasElement | undefined>>
}


const Canvas: React.FC<RecallCanvasProps> = ({
                                               product,
                                               canvasTiles,
                                               canvasEllipseSize,
                                               imgBase64Data,
                                               setCanvas
                                             }) => {
  const { preload, setup, draw } = useP5(
    product.color.hex,
    canvasTiles,
    canvasEllipseSize,
    imgBase64Data,
    setCanvas
  )

  return <Sketch
    preload={ preload }
    setup={ setup }
    draw={ draw }
  />
}

export default Canvas