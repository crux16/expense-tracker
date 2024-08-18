import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import css from './TransactionForm.module.css';
import './TransactionForm.module.css';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { useParams } from 'react-router-dom';
import './MuiCustomClass/MuiCustumClass.css';
// import { useDispatch } from 'react-redux';
// import { currentUser } from '../../redux/user/userOperations';

export const TransactionForm = ({radioChange}) => {
    // const dispatch = useDispatch();
    const { transactionsType } = useParams();

  const radio = {
    color: 'var(--subText-color)',
    '&.Mui-checked': {
      color: 'var(--theme-color)',
    },
    '&.Mui-disabled': {
      color: 'var(--subText-color)',
    }
  };

  const dateStyling = {
    '.MuiInputBase-root': {
      color: 'var(--subText-color)',
      borderRadius: '8px',
      borderWidth: '1px',
      borderColor: 'var(--subText-color)',
      border: '1px solid',
      backgroundColor: '#0000',
      outline:'none',
    },
    '.MuiInputBase-root:hover': {
      borderColor: 'var(--theme-color)',
    },
    '.MuiInputBase-root:focus': {
      borderColor: 'var(--theme-color)',
    },
    '.MuiInputBase-root:hover .MuiSvgIcon-root': {
      fill: 'var(--theme-color)',
    },
    '.MuiInputBase-root:focus .MuiSvgIcon-root': {
      fill: 'var(--theme-color)',
    },
    '.MuiSvgIcon-root': {
      fill:'var(--text-color)',
    },
  };

  return (
    <form className={css.form}>
      <RadioGroup
        aria-labelledby="radio"
        name="category"
        onChange={radioChange}
        row
      >
        <FormControlLabel 
          value="expenses" 
          control={<Radio sx={radio} />} 
          label="expense" 
          checked={transactionsType === 'expenses'} 
          disabled={transactionsType !== 'expenses' && !radioChange}
          />
        <FormControlLabel 
          value="incomes" 
          control={<Radio sx={radio} />} 
          label="income"  
          checked={transactionsType === 'incomes'} 
          disabled={transactionsType !== 'incomes' && !radioChange}
          />
      </RadioGroup>
      <div className={css.date}>
        <label className={css.label}><span>Date</span> 
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker name='date' sx={dateStyling}/>
          </LocalizationProvider>
        </label>
        <label className={css.label}><span>Time</span>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <TimePicker name='time'  ampm={false}  sx={dateStyling}  />
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