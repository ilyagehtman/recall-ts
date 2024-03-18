import React from "react";
import classes from "./Input.module.sass";

interface InputProps {
    label?: string;
    placeholder?: string;

    value?: string;
    setValue: (value: string) => void;

    textarea?: boolean;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, value, setValue, textarea, error }) => {
    return <div className={ classes.input }>
        { (label || error) && <label className={ error && classes.error }>
            { error ? error : label }
        </label> }

        { textarea
            ? <textarea
                onChange={ e => setValue(e.target.value) }
                placeholder={ placeholder ?? "какая-то строка" }
            />
            : <input
                type={ "text" }
                value={ value }
                onChange={ e => setValue(e.target.value) }
                placeholder={ placeholder ?? "какая-то строка" }
            />
        }
    </div>;
};

export default Input;