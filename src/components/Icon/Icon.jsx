import link from '../../Asset/images/icons.svg';
// List of icon: eye, eyeOff, settings, correct, error, profile, arrow14 and arrow15
import css from './Icon.module.css';

export const Icon = ({ icon, height='20', width='20', variant}) =>{
    return (
        <svg className={`${css.icon} ${css[variant]}`} style={{height:`${height}px`,width:`${width}px`}}>
            <use href={`${link}#icon-${icon}`} className={icon && css[icon]} > 
            </use>
        </svg>
    )
}