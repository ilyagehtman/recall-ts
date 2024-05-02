import styles from './RadioButtonGroup.module.sass'
import { ChangeEvent } from 'react'
import { IColor, IDeliveryMethod, ILaceColor, ISize, IType } from '../../domain/Vars.ts'
import classNames from 'classnames'

export type EnumType = IType | ISize | IDeliveryMethod
export type ColorType = IColor | ILaceColor

export interface Option<T> {
  value: T
  label?: string
}

type RadioButtonGroupProps<T> = {
  label: string
  selectedValue: T
  options: Option<T>[]
  onChange: (value: T) => void
}

export function RadioButtonGroup(props: RadioButtonGroupProps<EnumType>) {
  function renderRadioButtons(props: RadioButtonGroupProps<EnumType>) {
    return props.options.map((option, index) => (
        <RadioButton
          key={ index }
          label={ option.label }
          value={ option.value }
          checked={ option.value === props.selectedValue }
          onChange={ () => props.onChange(option.value) }
        />
      )
    )
  }

  return (
    <div className={ styles.radioButtonGroup }>
      <span className="string boldString">{ props.label }</span>
      <div className={ styles.content }>
        { renderRadioButtons(props) }
      </div>
    </div>
  )
}

export function ColorRadioButtonGroup(props: RadioButtonGroupProps<ColorType>) {

  function renderColorRadioButton(props: RadioButtonGroupProps<ColorType>) {
    return props.options.map((option, index) => (
        <ColorRadioButton
          key={ index }
          value={ option.value }
          onChange={ () => props.onChange(option.value) }
          checked={ option.value.name === props.selectedValue.name }
        />
      )
    )
  }

  return (
    <div className={ styles.colorRadioButtonGroup }>
      <span className="string boldString">{ props.label }</span>
      <div className={ styles.content }>
        { renderColorRadioButton(props) }
      </div>
    </div>
  )
}

interface RadioButtonProps {
  label?: string
  value: EnumType
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function RadioButton(props: RadioButtonProps) {
  return (
    <label className={ classNames(styles.radioButton, 'string') }>
      <input
        type="radio"
        value={ props.value }
        checked={ props.checked }
        onChange={ props.onChange }
      />
      { props.label && <span>{ props.label }</span> }
    </label>
  )
}

type ColorRadioButtonProps = {
  value: ColorType
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function ColorRadioButton({ value, checked, onChange }: ColorRadioButtonProps) {
  return (
    <div className={ styles.colorRadioButton } title={ value.name }>
      <input
        type="radio"
        value={ value.name }
        checked={ checked }
        onChange={ onChange }
        style={
          {
            border: checked ? `6px solid ${ value.hex }` : 'none',
            backgroundColor: checked ? 'var(--color)' : `${ value.hex }`
          }
        }
      />
    </div>
  )
}