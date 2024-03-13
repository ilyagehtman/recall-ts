import React, { useState } from "react";
import classes from "./Slider.module.sass";
import { String } from "../String/String.tsx";

type SliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange, min, max, step, label }) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={ classes.slider }>
      <div>
        <String bold value={ label }/>
      </div>
      <div className={ classes.sliderContent }>
        <input
          type="range"
          min={ min }
          max={ max }
          step={ step }
          value={ sliderValue }
          onChange={ handleChange }
        />
        <div className={ classes.sliderHelper }>
          <String value={ `${ min }` }/>
          <String value={ `${ max }` }/>
        </div>
      </div>
    </div>
  );
};

export default Slider;