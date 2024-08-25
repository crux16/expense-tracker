import { Button } from "components/Button/Button"
import { Delete, Edit } from "@mui/icons-material"
import css from './TransactionsListItem.module.css'

export const TransactionsListItem =({item,cn}) =>{

    return (
        <li className={cn}>
            <span>{item.category}</span>
            <span>{item.comment}</span>
            <span>{item.date}</span>
            <span>14:30</span>
            <span>35 000 / UAH</span>
            <div className={css.buttons}>
                <Button variant={'cover'} className={css.edit}><Edit /></Button>
                <Button variant={'cancel'} className={css.delete}><Delete /></Button>
            </div>
        </li>
    )
}