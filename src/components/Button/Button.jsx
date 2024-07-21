import css from './Button.module.css';

export const Button = ({
  type,
  onclick,
  variant,
  className='',
  children}) => { 

  return (
    <button 
    type={type}
    className={`
      ${css[variant] || css.normal} 
      ${css.typo}
      ${css.button}
      ${className}`}
      onClick={onclick} >
      {children}
    </button>
  );
};