import classes from './Editor.module.sass'
import { useState } from 'react'
import { Product } from '../../domain/Product.ts'
import { useNavigate } from 'react-router-dom'
import ControlPanel from '../../component/ControlPanel/ControlPanel.tsx'
import Preview from '../../component/Preview/Preview.tsx'
import { useAppSelector } from '../../store/store.ts'
import { useDispatch } from 'react-redux'
import { push } from '../../store/productSlice.ts'
import uuid from 'react-uuid'

const Editor = (order: { name: string, markup: number }) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const products = useAppSelector(state => state.products)

  const [currentProduct, setCurrentProduct] = useState<Product>(
    {
      id: uuid(),
      order: order,
      type: { name: 'бусина', markup: 300 },
      size: { name: 'большой' },
      color: { name: 'розовый', hex: '#fea2c4' },
      laceColor: order.name === 'брелок' ? { hex: '#C1D4E1', name: 'почти голубой' } : undefined
    }
  )

  const [imgBase64Data, setImgBase64Data] = useState<string | undefined>()

  const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined>()
  const [canvasTiles, setCanvasTiles] = useState<number>(1)
  const [canvasEllipseSize, setCanvasEllipseSize] = useState<number>(1)

  const handleOneMoreButton = () => {
    setImgBase64Data(undefined)

    dispatch(
      push(
        {
          ...currentProduct,
          finishedPicture: canvas?.toDataURL()
        }
      )
    )

    setCurrentProduct(
      {
        id: uuid(),
        order,
        type: { name: 'бусина', markup: 300 },
        size: { name: 'большой' },
        color: { name: 'розовый', hex: '#fea2c4' },
        laceColor: order.name === 'брелок' ? { hex: '#C1D4E1', name: 'дождь' } : undefined
      }
    )
  }

  const handleRdyButton = () => {
    if (products.data.length > 0 && !imgBase64Data) {
      navigate('/cart')
    } else {
      dispatch(
        push(
          {
            ...currentProduct,
            finishedPicture: canvas?.toDataURL()
          }
        )
      )

      setImgBase64Data(undefined)
      navigate('/cart')
    }
  }

  return (
    <div className={ classes.editor }>
      <Preview
        product={ currentProduct }
        setProduct={ setCurrentProduct }

        canvasTiles={ canvasTiles }
        canvasEllipseSize={ canvasEllipseSize }

        imgBase64Data={ imgBase64Data }
        setImgBase64Data={ setImgBase64Data }

        setCanvas={ setCanvas }
      />
      <ControlPanel
        product={ currentProduct }
        setProduct={ setCurrentProduct }

        canvasTiles={ canvasTiles }
        setCanvasTiles={ setCanvasTiles }

        canvasEllipseSize={ canvasEllipseSize }
        setCanvasEllipseSize={ setCanvasEllipseSize }

        readyButtonDisabled={ products.data.length === 0 && !imgBase64Data }
        readyButtonOnClick={ handleRdyButton }

        oneMoreButtonDisabled={ !imgBase64Data }
        oneMoreButtonOnClick={ handleOneMoreButton }
      />
    </div>
  )
}

export default Editor