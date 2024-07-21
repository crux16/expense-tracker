import css from './ProfileSettings.module.css';

export const Profile = ({children}) => {
    return (
        <p className={css.profile}>
            {children}
        </p>
    )
}