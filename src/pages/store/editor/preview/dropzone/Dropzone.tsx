import styles from './Dropzone.module.sass'
import React, { useCallback } from 'react'
import classNames from 'classnames'
import beadImg from '../../../../../assets/pages/store/product-type/bead-photo.png'
import panelImg from '../../../../../assets/pages/store/product-type/panel-photo.png'
import paragraphSvg from '../../../../../assets/mark-icon.svg'
import { useDropzone } from 'react-dropzone'
import { IProduct } from '../../../../../domain/IProduct.ts'

interface DropzoneProps {
  product: Partial<IProduct>
  setImageBase64Data: (base64Data: string) => void
}

export default function Dropzone({ product, setImageBase64Data }: DropzoneProps) {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = () => {
      const imageData = reader.result as string
      setImageBase64Data(imageData)
    }
    reader.readAsDataURL(file)
  }, [ setImageBase64Data ])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
    {
      onDrop,
      multiple: false,
      accept: {
        'image/jpeg': [ '.jpg', '.jpeg' ],
        'image/png': [ '.png' ],
        'image/gif': [ '.gif' ]
      }
    }
  )

  return (
    <div { ...getRootProps() } className={ classNames(styles.dropzone, { [styles.active]: isDragActive }) }>
      <input { ...getInputProps() } />
      { isDragReject && <span className="string">Только .jpg .png .gif'</span> }
      <h1 className="headerString">загрузите фото</h1>
      <div className={ styles.productTypeImage }>
        { product.type === 'бусина'
          ? <img src={ beadImg } alt={ 'бусина' }/>
          : <img src={ panelImg } alt={ 'панно' }/>
        }
      </div>
      <div className={ styles.description }>
        <img src={ paragraphSvg } alt={ 'p' }/>
        <span className="string paragraphString centerString">
          {
            'загрузите самое тёплое фото из вашей\n' +
            'галереи, которое бы вы хотели преобразовать\n' +
            'в украшение. форма должна получиться\n' +
            'цельной, отдельные фигуры будут\n' +
            'удалены/отредактированы'
          }
        </span>
      </div>
    </div>
  )
}
