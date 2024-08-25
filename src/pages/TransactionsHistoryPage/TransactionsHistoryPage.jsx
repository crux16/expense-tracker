import { TransactionsSearchTools } from "components/TransactionsSearchTools/TransactionsSearchTools";
import { TransactionsTotalAmount } from "components/TransactionsTotalAmount/TransactionsTotalAmount";
import { Helmet, HelmetProvider } from "react-helmet-async";
import css from './TransactionsHistoryPage.module.css';
import {  useLocation, useParams } from "react-router-dom"
import { TransactionsList } from "components/TransactionsList/TransactionsList";
import { useEffect, useState } from "react";


const TransactionsHistoryPage = () =>{
    const { transactionsType } = useParams();
    const [para, setPara] = useState('');
    const { pathname } = useLocation();
    const transactionType = transactionsType
    .slice(0,transactionsType.length-1);

    // console.log(pathname);
    useEffect(()=>{
      if(pathname === '/transactions/history/expenses'){
        setPara('View and manage every transaction seamlessly! Your entire financial landscape, all in one place.');
      }else if(pathname === '/transactions/history/incomes'){
        setPara('Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap.');
      }
    },[pathname, setPara])

    return (
        <HelmetProvider>
        <Helmet>
          <title>History</title>
        </Helmet>
        <div className={css.container}>
          <div className={css.title}>
              <h2>All {transactionType}</h2>
              <p>{para}</p>
          </div>
          <div className={css.totalAmount}>
            <TransactionsTotalAmount />
          </div>
          <div className={css.subContainer}>
            <TransactionsSearchTools />
            <TransactionsList />
          </div>
        </div>
      </HelmetProvider>
    )
}

export default TransactionsHistoryPage;