import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './MainTransactionsPage.module.css';
import { TransactionsTotalAmount } from 'components/TransactionsTotalAmount/TransactionsTotalAmount';
import { TransactionsChart } from 'components/TransactionsChart/TransactionsChart';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MainTransactionsPage = () => {
  const { TransactionsType='expense' } = useParams();
  const [ type, setType ] = useState('expense');  

  const radioSelect = (e) =>{
    console.log(e.target.value);
    setType(e.target.value);
  }

  useEffect(()=>{
    const type = TransactionsType;
    setType(type);
  },[setType,TransactionsType])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Main Transaction</title>
      </Helmet>
      <div className={css.container}>
        <div className={css.text}>
        <h3 className={css.title}>{type} Log</h3>
        <p className={css.subText}>
            Capture and organize every penny spent with ease! A clear view of your financial habit at
            <br />your fingertips.</p>
        </div>
        <div className={`${css.amount}`}>
        <TransactionsTotalAmount />
        </div >
        <div className={`${css.chart} ${css.subContainer}`}>
          <TransactionsChart type={type} />
        </div>
        <div className={`${css.form} ${css.subContainer}`}>
        <TransactionForm radioChange={radioSelect} />
      </div>
      </div>
    </HelmetProvider>
  );
};

export default MainTransactionsPage;