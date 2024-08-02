import * as React from 'react';
import { useState } from 'react';

//import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
//import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//import Settings from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Logout from '@mui/icons-material/Logout';
//import ListItemIcon from '@mui/material/ListItemIcon';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { Accordion, AccordionSummary, AccordionActions, CssBaseline } from '@mui/material';



export const UserBarBtn = () => {

  const dispatch = useDispatch();

  // const { isLoggedIn, user } = useAuth();

  const { user } = useAuth();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    dispatch(logOut());
  };

  const userName = user?.name || 'Scarlett'; // Default to 'Scarlett' if user or user.name is undefined

  return (
    <>
      <CssBaseline />
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary sx={{ display: 'flex' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >

            <Avatar alt="Mayona">{userName[0]}</Avatar>

            <Typography sx={{ display: 'flex', width: '100%', flexShrink: 0, alignItems: 'center', justifyItems: 'center', marginLeft: '50px', fontSize: '25px' }}>
              {userName}
            </Typography>

          </AccordionSummary>

          <AccordionActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
            <Button>
              <ManageAccountsIcon />
              <Typography sx={{ marginLeft: '30px' }}>Profile Settings</Typography>
            </Button>

            <Button onClick={handleClose}>
              <Logout />
              <Typography sx={{ marginLeft: '15px' }}>Logout</Typography>
            </Button>
          </AccordionActions>

        </Accordion>

      </div>

    </>
  );
}
