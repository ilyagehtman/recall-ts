import styles from './ControlBar.module.sass'
import React, { Dispatch, SetStateAction } from 'react'
import { IColor, ILaceColor, ISize, IType } from '../../../../domain/Vars.ts'
import {
  ColorRadioButtonGroup,
  Option,
  RadioButtonGroup
} from '../../../../component/RadioButtonGroup/RadioButtonGroup.tsx'
import Slider from '../../../../component/Slider/Slider.tsx'
import Button from '../../../../component/Button/Button.tsx'
import { IProduct } from '../../../../domain/IProduct.ts'

const productTypeOptions: Option<IType>[] = [
  { value: 'панно', label: 'панно' },
  { value: 'бусина', label: 'бусина' }
]

const productSizeOptions: Option<ISize>[] = [
  { value: 'маленький', label: 'маленький' },
  { value: 'средний', label: 'средний' },
  { value: 'большой', label: 'большой' }
]

const productColorOptions: Option<IColor>[] = [
  { value: { hex: '#fea2c4', name: 'розовый' } },
  { value: { hex: '#bde2ff', name: 'голубой' } },
  { value: { hex: '#ff4444', name: 'красный' } },
  { value: { hex: '#d5f78d', name: 'зеленый' } }
]

const productLaceColorOptions: Option<ILaceColor>[] = [
  { value: { hex: '#fea2c4', name: 'розовый' } },
  { value: { hex: '#a0eb00', name: 'салатовый' } },
  { value: { hex: '#c1d4e1', name: 'почти голубой' } }
]

interface ControlBarProps {
  product: Partial<IProduct>
  setProduct: Dispatch<SetStateAction<Partial<IProduct>>>
  canvasTiles: number
  setCanvasTiles: Dispatch<SetStateAction<number>>
  canvasEllipseSize: number
  setCanvasEllipseSize: Dispatch<SetStateAction<number>>
  createMoreButtonOnClick: () => void
  productReadyButtonOnClick: () => void
  createMoreButtonDisabled: boolean
  productReadyButtonDisabled: boolean
}

export default function ControlBar(props: ControlBarProps) {
  return (
    <div className={ styles.controlBar }>
      <div className={ styles.actions }>
        <h1 className="headerString">{ 'создать' }</h1>
        <div className={ styles.content }>
          <RadioButtonGroup
            label="тип"
            selectedValue={ props.product.type! }
            options={ productTypeOptions }
            onChange={ value => {
              props.setProduct(prevState => {
                return { ...prevState, type: value as IType }
              })
            } }
          />
          <RadioButtonGroup
            label="размер"
            selectedValue={ props.product.size! }
            options={ productSizeOptions }
            onChange={ value => {
              props.setProduct(prevState => {
                return { ...prevState, size: value as ISize }
              })
            } }
          />
          <ColorRadioButtonGroup
            label="цвет"
            selectedValue={ props.product.color! }
            options={ productColorOptions }
            onChange={ value => {
              props.setProduct(prevState => {
                return { ...prevState, color: value as IColor }
              })
            } }
          />
          { props.product.laceColor &&
              <ColorRadioButtonGroup
                  label="шнурок"
                  selectedValue={ props.product.laceColor }
                  options={ productLaceColorOptions }
                  onChange={ value => {
                    props.setProduct(prevState => {
                      return { ...prevState, laceColor: value as ILaceColor }
                    })
                  } }
              />
          }
        </div>
      </div>
      <div className={ styles.actions }>
        <h1 className="headerString">редактировать</h1>
        <div className={ styles.content }>
          <Slider
            min={ 0 }
            max={ 30 }
            step={ 1 }
            label={
              'количество\n' +
              'элементов'
            }
            value={ props.canvasTiles }
            onChange={ props.setCanvasTiles }
          />
          <Slider
            min={ 0 }
            max={ 50 }
            step={ 1 }
            label={
              'размер\n' +
              'элементов'
            }
            value={ props.canvasEllipseSize }
            onChange={ props.setCanvasEllipseSize }
          />
        </div>
      </div>
      <div className={ styles.resultantActions }>
        <Button
          value={ 'готово' }
          onClick={ props.productReadyButtonOnClick }
          disabled={ props.productReadyButtonDisabled }
        />
        <Button
          alt
          value={ 'создать ещё' }
          onClick={ props.createMoreButtonOnClick }
          disabled={ props.createMoreButtonDisabled }
        />
      </div>
    </div>
  )
}