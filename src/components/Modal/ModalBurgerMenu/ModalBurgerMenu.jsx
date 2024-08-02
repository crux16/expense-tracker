import React from 'react';
// import Modal from '../Modal';
import TransactionsHistoryNav from '../../TransactionsHistoryNav/TransactionsHistoryNav';
import css from './ModalBurgerMenu.module.css';
import UserBarBtn from 'components/UserBarBtn/UserBarBtn';

function ModalBurgerMenu() {
  return (
    <div className={css.wrapper}>
      <div className={css.userBarDiv}>
        <UserBarBtn />
      </div>
      <div className={css.transHisDiv}>
        <TransactionsHistoryNav/>
      </div>
      
    </div>
  )
}

export default ModalBurgerMenu;