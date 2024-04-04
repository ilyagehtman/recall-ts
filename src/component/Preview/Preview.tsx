import React, { SetStateAction } from 'react'
import classes from './Preview.module.sass'
import { Product } from '../../domain/Product.ts'
import Dropzone from '../Dropzone/Dropzone.tsx'
import Canvas from '../Canvas/Canvas.tsx'

interface PreviewProps {
  product: Product
  setProduct: React.Dispatch<SetStateAction<Product>>

  canvasTiles: number
  canvasEllipseSize: number

  imgBase64Data?: string
  setImgBase64Data: React.Dispatch<SetStateAction<string | undefined>>

  setCanvas: React.Dispatch<SetStateAction<HTMLCanvasElement | undefined>>
}

const Preview: React.FC<PreviewProps> = ({
                                           product,

                                           canvasTiles,
                                           canvasEllipseSize,

                                           imgBase64Data,
                                           setImgBase64Data,

                                           setCanvas
                                         }) => {
  return <div className={ classes.preview }>
    {
      imgBase64Data ? <Canvas
          product={ product }
          canvasTiles={ canvasTiles }
          canvasEllipseSize={ canvasEllipseSize }
          imgBase64Data={ imgBase64Data }
          setCanvas={ setCanvas }
        />
        : <Dropzone productTypeName={ product.type.name } setImgBase64Data={ setImgBase64Data }/>
    }
  </div>
}

export default Preview