import { Icon } from "components/Icon/Icon";
import css from './TransactionsTotalAmount.module.css';

export const TransactionsTotalAmount = () =>{
    return (
        <div className={css.container}>
            <div className={css.subContainer}>
                <span className={css.arrow}><Icon icon='arrow15' variant={'theme'} /></span>
                <span className={css.transaction}>
                    <p className={css.subHeader}>Total Income</p>
                    <p className={css.account}>$000.000</p>
                </span>
            </div>
            <div className={css.subContainer}>
                <span className={css.arrow}><Icon icon='arrow14' variant={'theme'} /></span>
                <span className={css.transaction}>
                    <p className={css.subHeader}>Total Expense</p>
                    <p className={css.account}>$000.000</p>
                </span>
            </div>
        </div>
    )
}