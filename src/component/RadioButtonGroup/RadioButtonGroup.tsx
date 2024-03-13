import React from "react";
import RadioButton, { ColorRadioButton } from "../RadioButton/RadioButton.tsx";
import classes from "./RadioButtonGroup.module.sass";
import { String } from "../String/String.tsx";

type RadioButtonGroupProps = {
  label: string
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className={ classes.radioButtonGroup }>
      <div>
        <String bold value={ label }/>
      </div>
      <div className={ classes.radioButtonContent }>
        { options.map((option, index) => (
          <RadioButton
            key={ index }
            label={ option.label }
            value={ option.value }
            checked={ option.value === selectedValue }
            onChange={ () => onChange(option.value) }
          />
        )) }
      </div>
    </div>
  );
};


type ColorRadioButtonGroupProps = {
  label: string
  options: { color: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const ColorRadioButtonGroup: React.FC<ColorRadioButtonGroupProps> = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className={ classes.colorRadioButtonGroup }>
      <div>
        <String bold value={ label }/>
      </div>
      <div className={ classes.radioButtonContent }>
        { options.map((option, index) => (
          <ColorRadioButton
            key={ index }
            color={ option.color }
            value={ option.value }
            checked={ option.value === selectedValue }
            onChange={ () => onChange(option.value) }
          />
        )) }
      </div>
    </div>
  );
};



export default RadioButtonGroup;