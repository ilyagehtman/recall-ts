import classes from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  value: string;
  alt?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ value, alt, onClick, disabled }: ButtonProps) => {
  return <button disabled={ disabled } onClick={ onClick } className={
    classNames(
      classes.button, {
        [classes.alt]: alt
      }
    )
  }>
    { value }
  </button>;
};

export const CartButton = ({ value, onClick, disabled }: ButtonProps) => {
  return <button disabled={ disabled } onClick={ onClick } className={ classes.cartButton }>
    { value }
  </button>;
};

export default Button;