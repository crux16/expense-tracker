import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import css from './TransactionForm.module.css';
import './TransactionForm.module.css';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const TransactionForm = () => {
    const radio = {
        color: 'var(--subText-color)',
        '&.Mui-checked': {
          color: 'var(--theme-color)',
        },
      };

    return (
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
        <div className={css.date}>
            <label className={css.label}><span>Date</span> <br />
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker />
              </LocalizationProvider>
            </label>
            <label className={css.label}><span>Time</span><br />
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <TimePicker />
              </LocalizationProvider>
            </label>
        </div>
        </form>
    )
}