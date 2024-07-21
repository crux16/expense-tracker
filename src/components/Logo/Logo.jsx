import css from './Logo.module.css';

export const Logo = ({children}) => {
    return (
        <p className={css.logo}>
            {children}
        </p>
    )
}