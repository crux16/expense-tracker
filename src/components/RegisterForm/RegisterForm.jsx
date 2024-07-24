// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/authOperations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    console.log("what")
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const view = {
  //     name: form.elements.name.value,
  //     email: form.elements.email.value,
  //     password: form.elements.password.value,
  //   }
  //   console.log(view);
  //   // dispatch(
  //   //   register({
  //   //     name: form.elements.name.value,
  //   //     email: form.elements.email.value,
  //   //     password: form.elements.password.value,
  //   //   })
  //   // );
  //   form.reset();
  // };

  return (
    <>
      <div className={css.formHeader}>
        <h3 className={css.header}>Sign Up</h3>
        <p className={css.subHeader}>Step into a world of hassle-free expense management! Your journey<br />towards financial mastery begins here.</p>
      </div>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <Input type='text' name='name'>Name</Input>

        <Input type='email' name='email'>Email</Input>
        <Input type='password' name='password'>Password</Input>
        <span className={css.button}>
          <Button type="submit" variant='cover'>Sign Up</Button>
          <label className={css.subHeader}>Already have an account? <NavLink to='/login' className={css.anchor}>Sign In</NavLink></label>
        </span>
      </form>
    </>
  );
};
