import { Helmet, HelmetProvider } from "react-helmet-async"
import {  useParams } from "react-router-dom"


const TransactionsHistoryPage = () =>{
    const { transactionsType } = useParams();
    return (
        <HelmetProvider>
        <Helmet>
          <title>Transactions</title>
        </Helmet>
        <div>
            <h2>Transactions {transactionsType}</h2>
        </div>
      </HelmetProvider>
    )
}

export default TransactionsHistoryPage;