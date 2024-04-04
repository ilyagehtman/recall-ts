import React from 'react'
import { String } from '../String/String.tsx'
import classes from './RadioButton.module.sass'

type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
  return (
    <label className={ classes.radioButton }>
      <input
        type="radio"
        value={ value }
        checked={ checked }
        onChange={ onChange }
      />
      <String value={ label }/>
    </label>
  )
}


type ColorRadioButtonProps = {
  color: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ColorRadioButton: React.FC<ColorRadioButtonProps> = ({ color, value, checked, onChange }) => {
  return (
    <div className={ classes.colorRadioButton } title={ value }>
      <input
        type="radio"
        value={ value }
        checked={ checked }
        onChange={ onChange }
        style={ {
          border: checked ? `6px solid ${ color }` : 'none',
          backgroundColor: checked ? 'var(--color)' : `${ color }`
        } }
      />
    </div>
  )
}

export default RadioButton