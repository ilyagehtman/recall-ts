import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './Editor.module.sass'
import Preview from './preview/Preview.tsx'
import ControlBar from './control-bar/ControlBar.tsx'
import { IProduct } from '../../../domain/IProduct.ts'
import { push } from '../../../store/productSlice.ts'
import { useAppSelector } from '../../../store/store.ts'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'

interface EditorProps {
  product: Partial<IProduct>
  setProduct: Dispatch<SetStateAction<Partial<IProduct>>>
}

export default function Editor({ product, setProduct }: EditorProps) {
  const nav = useNavigate()
  const products = useAppSelector(state => state.products)
  const dispatch = useDispatch()
  const [ canvasTiles, setCanvasTiles ] = useState<number>(1)
  const [ canvasEllipseSize, setCanvasEllipseSize ] = useState<number>(1)

  const [ imageBase64Data, setImageBase64Data ] = useState<string>()
  const [ canvasRef, setCanvasRef ] = useState<HTMLCanvasElement>()

  function createMoreButtonHandleClick(): void {
    setImageBase64Data(undefined)
    dispatch(push({ ...product, canvasImage: canvasRef?.toDataURL() } as IProduct))
    setProduct(prevState => {
      return { ...prevState, id: uuid(), canvasImage: undefined }
    })
  }

  function productReadyButtonHandleClick(): void {
    if (products.data.length > 0 && !imageBase64Data) {
      nav('/cart')
    } else {
      dispatch(push({ ...product, canvasImage: canvasRef?.toDataURL() } as IProduct))
      setImageBase64Data(undefined)
      nav('/cart')
    }
  }

  return (
    <div className={ styles.editor }>
      <Preview
        product={ product }
        canvasTiles={ canvasTiles }
        canvasEllipseSize={ canvasEllipseSize }
        imageBase64Data={ imageBase64Data }
        setImageBase64Data={ setImageBase64Data }
        setCanvas={ setCanvasRef }
      />
      <ControlBar
        product={ product }
        setProduct={ setProduct }
        canvasTiles={ canvasTiles }
        setCanvasTiles={ setCanvasTiles }
        canvasEllipseSize={ canvasEllipseSize }
        setCanvasEllipseSize={ setCanvasEllipseSize }
        createMoreButtonOnClick={ createMoreButtonHandleClick }
        productReadyButtonOnClick={ productReadyButtonHandleClick }
        createMoreButtonDisabled={ !imageBase64Data }
        productReadyButtonDisabled={ products.data.length === 0 && !imageBase64Data }
      />
    </div>
  )
}