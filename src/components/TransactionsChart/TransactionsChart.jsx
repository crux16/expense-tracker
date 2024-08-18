import { useParams } from "react-router-dom";
import { Chart } from "./PieChart/PieChart"
import css from './TransactionsChart.module.css';

export const TransactionsChart = () => {
    const { transactionsType } =  useParams();
    const data = [
        { id: 1, name: 'Hobby', value: 45, color: '#0EBB69' },
        { id: 2, name: 'Products', value: 25, color: '#0EF387' },
        { id: 3, name: 'Cinema', value: 20, color: '#FAFAFA' },
        { id: 4, name: 'Health', value: 10, color: '#FAFAFA33' },
      ];

    return (
        <div className={css.container}>
            <p className={`${css.subHeader} ${css.title}`} style={{marginLeft:'40px'}}>{transactionsType} categories</p>
            <div className={css.subContainer}>
                <div className={css.chart}>
                    <Chart data={data}/>
                    <span className={css.ratio}>100%</span>
                </div>
                <div className={css.list}>
                    <ul className={css.unlist}>
                    {data.map(({id, name, value, color}) => (<li key={`id-${id}`} className={css.listItem} style={{color:color}}>
                        <span className={css.subHeader}>{name}</span>
                        <span className={css.subRatio}>{value}%</span>
                        </li>))}
                    </ul>
                </div>
                </div>
        </div>
    )
}