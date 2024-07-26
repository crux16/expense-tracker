import React from 'react';
import css from './DecorativeTab.module.css';
import arrow from '../../Asset/images/arrow.svg';

export default function DecorationTab({ className }) {
  return (
    <div className={`${css.tabDiv} ${className}`}>
      <div className={css.arrow}>
        <img src={arrow} alt="arrow-icon" />
      </div>
      <div>
        <p className={css.balanceDiv}> Your balance </p>
        <h3 className={css.balance}> $632.000</h3>
      </div>
      <div className={css.percentDiv}> +1.29%
      </div>
    </div>
  )
}

