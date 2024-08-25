import { useSelector } from "react-redux"
import { selectTransactions, selectIsLoading, selectFilteredTransactions } from "../redux/transactions/transactionsSelectors"


export const useTransactions = () =>{
    const transactions = useSelector(selectTransactions);
    const isLoading = useSelector(selectIsLoading);
    const filterTransaction = useSelector(selectFilteredTransactions);

    return {
        transactions,
        isLoading,
        filterTransaction,
    }
}