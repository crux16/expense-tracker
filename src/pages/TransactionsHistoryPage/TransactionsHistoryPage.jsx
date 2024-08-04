import { Helmet, HelmetProvider } from "react-helmet-async"


export const TransactionsHistoryPage = () =>{
    return (
        <HelmetProvider>
        <Helmet>
          <title>Transactions History</title>
        </Helmet>
        <div>
            <h2>Transactions History</h2>
        </div>
      </HelmetProvider>
    )
}