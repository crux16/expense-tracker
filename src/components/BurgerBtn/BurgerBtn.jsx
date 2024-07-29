import { ReactComponent as BurgerIcon } from '../../Asset/images/burger.svg';
import css from './BurgerBtn.module.css'; 

const BurgerBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.burgerBtn}>
      <BurgerIcon className={css.burgerIcon}/>
    </button>
  );
};

export default BurgerBtn;

