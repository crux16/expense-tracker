import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './MainTransactionsPage.module.css';
import { TransactionsTotalAmount } from 'components/TransactionsTotalAmount/TransactionsTotalAmount';
import { TransactionsChart } from 'components/TransactionsChart/TransactionsChart';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { currentUser } from '../../redux/user/userOperations';
import { useUser } from 'hooks/useUser';
import { useDispatchOnce } from 'hooks/useDispatchOnce';
import { useDispatch } from 'react-redux';

const MainTransactionsPage = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();
  const navigate = useNavigate();
  const [ type, setType ] = useState('expenses');
  const { info } = useUser();

  const radioSelect = (e) =>{
    const value = e.target.value;
    setType(value);
    navigate(`/transactions/${value}`);
  }

  useDispatchOnce(dispatch,currentUser());

  useEffect(()=>{
    if(!transactionsType){
    navigate(`/transactions/${transactionsType || type}`);
    }
  },
    [dispatch,navigate,transactionsType, type, info]
  )

  return (
    <HelmetProvider>
      <Helmet>
        <title>Main Transaction</title>
      </Helmet>
      <div className={css.container}>
        <div className={css.text}>
        <h3 className={css.title}>{transactionsType} Log</h3>
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
        <TransactionForm radioChange={radioSelect} option={transactionsType} />
      </div>
      </div>
    </HelmetProvider>
  );
};

export default MainTransactionsPage;