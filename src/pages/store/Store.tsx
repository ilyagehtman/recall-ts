import uuid from 'react-uuid'
import styles from './Store.module.sass'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Editor from './editor/Editor.tsx'
import { IProduct } from '../../domain/IProduct.ts'

const initProduct: Partial<IProduct> = {
  id: uuid(),
  type: 'бусина',
  size: 'маленький',
  color: { hex: '#fea2c4', name: 'розовый' },
  laceColor: { hex: '#c1d4e1', name: 'почти голубой' }
}

export default function Store() {
  const { category } = useParams()
  const [ currentProduct, setCurrentProduct ] = useState<Partial<IProduct>>(initProduct)

  useEffect(() => {
    setCurrentProduct(prevState => {
      if (category === 'keychain') {
        return { ...prevState, category: 'брелок', laceColor: { hex: '#c1d4e1', name: 'почти голубой' } }
      } else if (category === 'earring') {
        return { ...prevState, category: 'серьга', laceColor: undefined }
      } else {
        return { ...prevState, category: undefined, laceColor: undefined }
      }
    })
  }, [ category ])

  return (
    <div className={ styles.store }>
      { currentProduct.category
        ? <Editor product={ currentProduct } setProduct={ setCurrentProduct }/>
        : <CategoryMissing/>
      }
    </div>
  )
}

function CategoryMissing() {
  return (
    <div></div>
  )
}
