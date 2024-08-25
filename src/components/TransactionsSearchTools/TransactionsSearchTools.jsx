import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import css from './TransactionsSearchTools.module.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Input } from 'components/Input/Input';

export const TransactionsSearchTools = () =>{

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
        '.MuiInputBase-input': {
            padding: '12px 10px',
        },
      };

    return (
            <div className={css.wrap}>
                <Input type='search' name='search' > Search for anything.. </Input>
                <label className={css.label}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker name='date' sx={dateStyling}/>
                </LocalizationProvider>
                </label>
            </div>
    )
}