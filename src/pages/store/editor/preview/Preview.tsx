import styles from './Preview.module.sass'
import Dropzone from './dropzone/Dropzone.tsx'
import Canvas from './canvas/Canvas.tsx'
import { IProduct } from '../../../../domain/IProduct.ts'

interface PreviewProps {
  product: Partial<IProduct>

  canvasTiles: number
  canvasEllipseSize: number

  imageBase64Data?: string
  setImageBase64Data: (imageBase64Data?: string) => void

  setCanvas: (canvas: HTMLCanvasElement) => void
}

export default function Preview(props: PreviewProps) {
  return (
    <div className={ styles.preview }>
      {
        props.imageBase64Data
          ? <Canvas
            product={ props.product }
            canvasTiles={ props.canvasTiles }
            canvasEllipseSize={ props.canvasEllipseSize }
            setCanvas={ props.setCanvas }
            imageBase64Data={ props.imageBase64Data }
            setImageBase64Data={ props.setImageBase64Data }
          />
          : <Dropzone
            product={ props.product }
            setImageBase64Data={ props.setImageBase64Data }
          />
      }
    </div>
  )
}
