import React from 'react';
import css from './HeroContent.module.css';

export const HeroContent = () => {
  return (
    <div>
        <p className={css.titleLog}>EXPENSE LOG</p>
          <h1 className={css.title}>Manage Your <span className={css.titleFi}>Finances</span> Masterfully!</h1>
          <div>
            <p className={css.description}>Welcome to your new innovative Expense Tracker App, your one stop shop in managing your finances and keeping track of your expenses.</p>
            <p className={css.description}>Expense Tracker App provides a very seamless userface experience with its fluid design and easy to use, coherent accessibility</p>
            <p className={css.description}>With a touch of a button, your app gives you a tally of how much you have spent in a month and how much of your income is available. Start using your Expense Tracker App now and find out how much money you got left to spend, the possibilities are endless.</p>
          </div>
    </div>
  )
}
