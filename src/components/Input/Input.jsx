import { useState } from 'react';
import css from './Input.module.css';
import { Icon } from 'components/Icon/Icon';


export const Input = ({type,name,children}) =>{
    const [showPassword, setShowPassword] = useState(false);
    const [visibleIcon, setVisibleIcon] = useState(false);
    const [value, setValue] = useState('');

    const visible = () => setShowPassword(!showPassword);
    const clear = () => {
        setValue('')
        setVisibleIcon(false);
    };
    const input = (e) => {
        const data = e.target.value;
        data ? setVisibleIcon(true) : setVisibleIcon(false);
        setValue(data);
    };

    const child = () =>{
        switch (type) {
            case 'password':
                return (
                <>
                <input 
                type={(showPassword && 'text') || type}
                name={name}
                placeholder={children}
                className={css.input}
                value={value}
                onChange={input}
                />
                <span className={css.visible} onClick={visible}>{visibleIcon && (!showPassword?<Icon icon='eyeOff' />:<Icon icon='eye' />)}</span>
                </>
            )

            default:
                return (
                <><input 
                type={type} placeholder={children} 
                name={name}
                className={css.input}
                value={value}
                onChange={input}
                />
                <span className={css.visible} onClick={clear}>{visibleIcon && (<Icon icon='error' />)}</span>
                </>
            )
        }
    }

    return (
        <label className={css.label}>
           {child()}
        </label>
    )
}