import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './MainTransactionsPage.module.css';
import { TransactionsTotalAmount } from 'components/TransactionsTotalAmount/TransactionsTotalAmount';
import { TransactionsChart } from 'components/TransactionsChart/TransactionsChart';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
// import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers';

const MainTransactionsPage = () => {

  const radio = {
    color: 'var(--subText-color)',
    '&.Mui-checked': {
      color: 'var(--theme-color)',
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Main Transaction</title>
      </Helmet>
      <div className={css.container}>
        <div>
        <h3 className={css.title}>Expense Log</h3>
        <p className={css.subText}>
            Capture and organize every penny spent with ease! A clear view of your financial habit at
            <br />your fingertips.</p>
        <TransactionsTotalAmount />
        <TransactionsChart />
        </div>
        <div className={css.subContainer}>
        <form className={css.form}>
        <RadioGroup
          aria-labelledby="radio"
          defaultValue="expense"
          name="category"
          row
        >
          <FormControlLabel value="expense" control={<Radio sx={radio} />} label="expense" />
          <FormControlLabel value="income" control={<Radio sx={radio}/>} label="income" />
        </RadioGroup>
        <div class={css.date}>
            <label className={css.label}><span>Date</span> <br />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker />
              </LocalizationProvider> */}
            </label>
            <label className={css.label}><span>Time</span><br />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker />
              </LocalizationProvider> */}
            </label>
        </div>
        </form>
      </div>
      </div>
    </HelmetProvider>
  );
};

export default MainTransactionsPage;