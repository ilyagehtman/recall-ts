import React from 'react'
import classes from './Archive.module.sass'
import paragraphSvg from '../../assets/paragraph.svg'
import { SmallString } from '../../component/String/String.tsx'

type ArchiveProps = {}

const Archive: React.FC<ArchiveProps> = () => {
  return (
    <div className={ classes.archive }>
      <div className={ classes.title }>
        <img src={ paragraphSvg } alt={ 'p' }/>
        <SmallString
          center
          value={
            'архив форм, созданных\n' +
            'пользователями. делитесь своими\n' +
            'зашифрованными\n' +
            'воспоминаниями'
          }
        />
      </div>
      <div className={ classes.itemList }>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
        <div className={ classes.item }/>
      </div>
    </div>
  )
}

export default Archive