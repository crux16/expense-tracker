// imports here below
import css from './TransactionsList.module.css';
import { TransactionsListItem } from './TransactionsListItem/TransactionsListItem';

// component
export const TransactionsList = () =>{
    const items = [
    {
        comment:'Well',
        category:'Cinema',
        date:'Sn, 3.03. 2023',
    },
    {
        comment:'Row',
        category:'Shopping',
        date:'Sn, 3.03. 2023',
    },
    {
        comment:'Well',
        category:'Cinema',
        date:'Sn, 3.03. 2023',
    },
    {
        comment:'Row',
        category:'Shopping',
        date:'Sn, 3.03. 2023',
    },]

    return (
        <ul className={css.list}>
            <li className={css.header}>
                <span>Category</span>
                <span>Comment</span>
                <span>Date</span>
                <span>Time</span>
                <span>Sum</span>
                <span>Actions</span>
            </li>
            { (items.length === 0) ? <li className={css.item}><span>No data</span></li>:
            items.map((item,id)=><TransactionsListItem key={id} item={item} cn={css.item} />)}
        </ul>
    )
}