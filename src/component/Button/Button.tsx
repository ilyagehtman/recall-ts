import './Button.sass'
import classNames from 'classnames'
import Loader from '../Loader/Loader.tsx'

type ButtonProps = {
  value: string;
  alt?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  submit?: boolean;
  loading?: boolean;
}

const Button = ({ value, alt, onClick, disabled, submit, loading }: ButtonProps) => {
  return <button
    type={ submit ? 'submit' : 'button' }
    disabled={ disabled }
    onClick={ onClick }
    className={ classNames(
      'button', { ['button--alt']: alt })
    }
  >
    { loading
      ? <div className={ 'button__loading' }>
        <Loader/>
      </div>
      : value
    }
  </button>
}

export default Button