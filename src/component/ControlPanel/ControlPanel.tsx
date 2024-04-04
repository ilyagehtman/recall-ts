import React, { SetStateAction } from 'react'
import { HeaderString } from '../String/String.tsx'
import RadioButtonGroup, { ColorRadioButtonGroup } from '../RadioButtonGroup/RadioButtonGroup.tsx'
import Slider from '../Slider/Slider.tsx'
import Button from '../Button/Button.tsx'
import { Product } from '../../domain/Product.ts'
import classes from './ControlPanel.module.sass'

const productColorOptions = [
  { hex: '#fea2c4', name: 'розовый' },
  { hex: '#bde2ff', name: 'голубой' },
  { hex: '#FF4444', name: 'красный' },
  { hex: '#D5F78D', name: 'зеленый' }
]

const productLiceColorOptions = [
  { hex: '#fea2c4', name: 'розовый' },
  { hex: '#C1D4E1', name: 'почти голубой' },
  { hex: '#A0EB00', name: 'салатовый' }
]

const productOrderOptions = [
  { label: 'Бусина', value: 'бусина' },
  { label: 'Панно', value: 'панно' }
]

const productSizeOptions = [
  { label: 'Большой', value: 'большой' },
  { label: 'Средний', value: 'средний' },
  { label: 'Маленький', value: 'маленький' }
]

interface ControlPanelProps {
  product: Product;
  setProduct: React.Dispatch<SetStateAction<Product>>;

  canvasTiles: number;
  setCanvasTiles: React.Dispatch<SetStateAction<number>>;

  canvasEllipseSize: number;
  setCanvasEllipseSize: React.Dispatch<SetStateAction<number>>;

  readyButtonDisabled: boolean;
  readyButtonOnClick: () => void;

  oneMoreButtonDisabled: boolean;
  oneMoreButtonOnClick: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
                                                     product,
                                                     setProduct,
                                                     canvasTiles,
                                                     setCanvasTiles,
                                                     canvasEllipseSize,
                                                     setCanvasEllipseSize,
                                                     readyButtonDisabled,
                                                     readyButtonOnClick,
                                                     oneMoreButtonDisabled,
                                                     oneMoreButtonOnClick
                                                   }) => {
  return <div className={ classes.controlPanel }>
    <div className={ classes.actionContainer }>
      <HeaderString value={ 'создать' }/>
      <div className={ classes.actions }>
        <RadioButtonGroup
          label={ 'тип' }
          options={ productOrderOptions }
          selectedValue={ product.type.name }
          onChange={ value => setProduct({ ...product, type: { ...product.type, name: value } }) }
        />
        <RadioButtonGroup
          label={ 'размер' }
          options={ productSizeOptions }
          selectedValue={ product.size.name }
          onChange={ value => setProduct({ ...product, size: { ...product.size, name: value } }) }
        />
        <ColorRadioButtonGroup
          label={ 'цвет' }
          options={ productColorOptions }
          selectedValue={ product.color }
          onChange={ value => setProduct({ ...product, color: value }) }
        />
        {
          product.order.name === 'брелок' &&
          <ColorRadioButtonGroup
            label={ 'шнурок' }
            options={ productLiceColorOptions }
            selectedValue={ product.laceColor! }
            onChange={ value => setProduct({ ...product, laceColor: value }) }
          />
        }
      </div>
    </div>
    <div className={ classes.actionContainer }>
      <HeaderString value={ 'редактировать' }/>
      <div className={ classes.actions }>
        <Slider
          value={ canvasTiles }
          onChange={ setCanvasTiles }
          label={ 'количество\nэлементов' }
          min={ 0 }
          max={ 30 }
          step={ 1 }
        />
        <Slider
          value={ canvasEllipseSize }
          onChange={ setCanvasEllipseSize }
          label={ 'размер\nэлементов' }
          min={ 0 }
          max={ 50 }
          step={ 1 }
        />
      </div>
    </div>
    <div className={ classes.resultantActionsContainer }>
      <Button
        disabled={ readyButtonDisabled }
        onClick={ readyButtonOnClick }
        value={ 'готово' }
      />
      <Button
        alt
        disabled={ oneMoreButtonDisabled }
        onClick={ oneMoreButtonOnClick }
        value={ 'создать ещё' }
      />
    </div>
  </div>
}

export default ControlPanel