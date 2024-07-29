import React from 'react'
import css from './TransactionsHistoryNav.module.css';
import { NavLink } from 'react-router-dom';

function TransactionsHistoryNav({ headerStyle }) {
  return (
    <div className={headerStyle ? css.headerStyle : css.nav}>
        <NavLink
        to="transactions/expense"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
          <button className={css.button}>
            <p className={css.buttonText}> All Expense </p>
          </button>
       </NavLink>
       <NavLink
        to="transactions/income"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
          <button className={css.buttonActive}>
            <p className={css.buttonText}> All Income </p>
          </button>
       </NavLink>
        
    </div>
  )
}

export default TransactionsHistoryNav;