import styles from './Archive.module.sass'
import React, { useEffect, useState } from 'react'
import paragraphSvg from '../../assets/mark-icon.svg'
import axios from 'axios'

export default function Archive() {
  const [ items, setItems ] = useState<(string | null)[]>()

  useEffect(() => {
    axios.get<string[]>(
      `https://recallapi.thiswrittencodeis.art/api/v1/archive`
    )
      .then(res => {
        if (res.status === 200) {
          const jsonData = res.data
          const totalItems = jsonData.length
          const maxItems = 2 * 6 // Maximum items for 3 rows
          const emptyItems = Math.max(maxItems - totalItems, 0) // Calculate minimum empty items

          const filledData = Array.from({ length: maxItems }, (_, index) => {
            if (index < totalItems) {
              return jsonData[index]
            } else if (index < totalItems + emptyItems) {
              return null
            } else {
              return null
            }
          })

          setItems(filledData)
        }
      })
  }, [])

  return (
    <div className={ styles.archive }>
      <div className={ styles.title }>
        <img src={ paragraphSvg } alt={ 'p' }/>
        <span className="string centerString paragraphString">
          {
            'архив форм, созданных\n' +
            'пользователями. делитесь своими\n' +
            'зашифрованными\n' +
            'воспоминаниями'
          }
        </span>
      </div>
      <div className={ styles.items }>
        { items?.map((value, i) => <div key={ i } className={ styles.item }>
          { value && <img src={ value } alt={ 'product-img' }/> }
        </div>) }
      </div>
    </div>
  )
}