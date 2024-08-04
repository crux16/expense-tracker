import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import css from './TransactionForm.module.css';
import './TransactionForm.module.css';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
// import { useDispatch } from 'react-redux';
// import { currentUser } from '../../redux/user/userOperations';

export const TransactionForm = ({radioChange}) => {
    // const dispatch = useDispatch();

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
        onChange={radioChange}
        row
      >
        <FormControlLabel value="expense" control={<Radio sx={radio} />} label="expense" />
        <FormControlLabel value="income" control={<Radio sx={radio} />} label="income" />
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
      <div className={css.input}>
        <label className={css.label} style={{ width: '100%' }}><span>Category:</span>
          <Input sx={{
            border: '1px solid var(--subText-color)',
            borderRadius: '12px',
            padding: '12px 18px',
            fontFamily: 'inherit',
            color: 'var(--text-color)',
            fontSize: 'inherit',
          }} >Different</Input>
        </label>
        <label className={css.label} style={{ width: '100%' }}><span>Sum:</span>
          <Input sx={{
            border: '1px solid var(--subText-color)',
            borderRadius: '12px',
            padding: '12px 18px',
            fontFamily: 'inherit',
            color: 'var(--text-color)',
            fontSize: 'inherit',
          }} >Enter the sum</Input>
        </label>
        <label className={css.label} style={{ width: '100%' }}><span>Comment:</span>
          <textarea
            style={{
              border: '1px solid var(--subText-color)',
              borderRadius: '12px',
              padding: '12px 18px',
              fontFamily: 'inherit',
              color: 'var(--text-color)',
              fontSize: 'inherit',
              backgroundColor: 'transparent',
              outline: 'none',
            }}
            className=''
            placeholder='Enter the text'
            rows={3} ></textarea>
        </label>
        <Button type='submit' variant={'cover'}>Add</Button>
      </div>
    </form>
  )
}