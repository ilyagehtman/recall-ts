import React, { SetStateAction, useCallback } from 'react'
import { HeaderString, SmallString, String } from '../String/String.tsx'
import paragraphSvg from '../../assets/paragraph.svg'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import classes from './Dropzone.module.sass'
import panelImg from '../../assets/product-type/panel.png'
import beadImg from '../../assets/product-type/bead.png'

interface DropzoneProps {
  productTypeName: string
  setImgBase64Data: React.Dispatch<SetStateAction<string | undefined>>
}

const Dropzone: React.FC<DropzoneProps> = ({ productTypeName, setImgBase64Data }) => {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = () => {
      const imageData = reader.result as string
      setImgBase64Data(imageData)
    }
    reader.readAsDataURL(file)
  }, [setImgBase64Data])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
    {
      onDrop,
      multiple: false,
      accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
        'image/gif': ['.gif']
      }
    }
  )

  return <div { ...getRootProps() } className={
    classNames(classes.dropzone, { [classes.dragActive]: isDragActive })
  }>
    <input { ...getInputProps() } />
    { isDragReject && <String value={ 'Только .jpg .png .gif' }/> }
    <div className={ classes.dropzoneHeader }>
      <HeaderString value={ 'загрузите фото' }/>
    </div>
    <div className={ classes.productTypeImage }>
      {
        productTypeName === 'бусина' ?
          <img src={ beadImg } alt={ 'бусина' }/>
          : <img src={ panelImg } alt={ 'бусина' }/>
      }
    </div>
    <div className={ classes.dropzoneDescription }>
      <img src={ paragraphSvg } alt={ 'p' }/>
      <SmallString
        center
        value={
          'загрузите самое тёплое фото\n' +
          'из вашей галереи, которые\n' +
          'бы вы хотели преобразовать\n' +
          'в украшение'
        }
      />
    </div>
  </div>
}

export default Dropzone

