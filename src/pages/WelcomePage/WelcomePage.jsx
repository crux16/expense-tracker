import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './WelcomePage.module.css';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>About Expense Tracker</h1>
        <p>Welcome to your new innovative Expense Tracker App, your one stop shop in managing your finances and keeping track of your expenses.
        Expense Tracker App provides a very seamless userface experience with its fluid design and easy to use, coherent accessibility.
        With a touch of a button, your app gives you a tally of how much you have spent in a month and how much of your income is available. 
        Start using your Expense Tracker App now and find out how much money you got left to spend, the possibilities are endless.</p>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
