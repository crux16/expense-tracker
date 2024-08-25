import React, { useEffect, useState } from 'react'
import css from './TransactionsHistoryNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';

function TransactionsHistoryNav({ headerStyle }) {
  const { pathname } = useLocation();
  const [ activeBtn, setActiveBtn ] = useState(null);


  useEffect(()=>{
    switch(pathname){
      case '/transactions/history/expenses':
        setActiveBtn('expenses')
        break;
        
      case '/transactions/history/incomes':
        setActiveBtn('incomes')
        break;
      default:
        setActiveBtn(null);
    }
  },[setActiveBtn,pathname])

  return (
    <div className={headerStyle ? css.headerStyle : css.nav}>
        <NavLink
        to="transactions/history/expenses"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
          <button className={(activeBtn === 'expenses')?css.buttonActive:css.button}>
            <p className={css.buttonText}> All Expense </p>
          </button>
       </NavLink>
       <NavLink
        to="transactions/history/incomes"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
          <button className={(activeBtn === 'incomes')?css.buttonActive:css.button}>
            <p className={css.buttonText}> All Income </p>
          </button>
       </NavLink>
        
    </div>
  )
}

export default TransactionsHistoryNav;