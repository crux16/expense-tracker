// import * as React from 'react';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CircularProgress from '@mui/joy/CircularProgress';
// import Typography from '@mui/joy/Typography';
// import SvgIcon from '@mui/joy/SvgIcon';

// export default function DecorationTab() {
//   return (
//     <Card variant="solid" color="primary" size="sm" invertedColors>
//       <CardContent orientation="horizontal">
//         <CircularProgress size="lg" determinate value={20}>
//           <SvgIcon>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
//               />
//             </svg>
//           </SvgIcon>
//         </CircularProgress>
//         <CardContent>
//           <Typography level="body-md">Your balance</Typography>
//           <Typography level="h2">$ 632,000</Typography>
//         </CardContent>
//       </CardContent>
//     </Card>
//   );
// }


import React from 'react';
import css from './DecorativeTab.module.css';
import arrow from '../../Asset/images/arrow.svg';

export default function DecorationTab({ className }) {
  return (
    <div className={`${css.tabDiv} ${className}`}>
      <div className={css.arrow}>
        <img src={arrow} alt="arrow-icon" />
      </div>
      <div>
        <p className={css.balanceDiv}> Your balance </p>
        <h3 className={css.balance}> $632.000</h3>
      </div>
      <div className={css.percentDiv}> +1.29%
      </div>
    </div>
  )
}

