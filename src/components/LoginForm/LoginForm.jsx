import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { Input } from 'components/Input/Input';
import css from './LoginForm.module.css';
import { Button } from 'components/Button/Button';
import { NavLink } from 'react-router-dom';
import useMediaQuery from 'hooks/useMediaQuery';
import { BgImageWrapper } from 'components/BgImageWrapper/BgImageWrapper';
import { useAuth } from 'hooks/useAuth';


export const LoginForm = () => {

  const isDesktop = useMediaQuery('(min-width: 1157px)');


  const { isLoading } = useAuth();


  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,

      })
    );

    form.reset();
  };

  return (
    <>
      <div className={css.loginWrapper}>
        <div>
          {isDesktop ? <BgImageWrapper /> : null}
        </div>
        
        <div className={css.formContainer}>
          <div className={css.formHeader}>
            <h3 className={css.header}>Sign In</h3>
            <p className={css.subHeader}>Welcome back to effortless expense tracking! Your financial<br />dashboard awaits.</p>
          </div>
          <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <Input type='email' name='email'>Email</Input>
            <Input type='password' name='password'>Password</Input>
            <span className={css.button}>
              <Button type="submit" variant='cover'>{isLoading ? <span className={css.loader}></span> :  <span>Sign In</span>}</Button>
              <label className={css.subHeader}>Dont't have an account? <NavLink to='/signup' className={css.anchor}>Sign Up</NavLink></label>
            </span>
          </form>
        </div>
      </div>
      
    </>
  );
};
