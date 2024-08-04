import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//import Settings from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { Accordion, AccordionSummary, AccordionActions, ButtonGroup, Tooltip, CssBaseline } from '@mui/material';


//npm install @mui/icons-material @mui/material
//npm install @mui/joy @emotion/react @emotion/styled
//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
//add to jsconfig.json: "paths": {
// "@mui/material": ["./node_modules/@mui/joy"]
//   },

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function UserBarBtn() {

  const dispatch = useDispatch();

  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleLogout = () => {
    dispatch(logOut());
  };

  const userName = user?.name || 'Scarlett'; // Default to 'Scarlett' if user or user.name is undefined

  return (
    <>
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
            <ButtonGroup
              orientation="vertical">
              <Tooltip arrow title="Go to profile settings" >
                <Button>
                  <ManageAccountsIcon />
                  <Typography sx={{ marginLeft: '30px', fontSize: '20px' }}>Profile Settings</Typography>
                </Button></Tooltip>
              <Tooltip arrow title="Logout, yes?" >
                <Button onClick={handleLogout}>
                  <Logout />
                  <Typography sx={{ marginLeft: '15px', fontSize: '19px' }}>Logout</Typography>
                </Button></Tooltip>
            </ButtonGroup>
          </AccordionActions>

        </Accordion>

        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >

          {/* <Avatar sx={{ width: 32, height: 32 }} alt="scarlett">{!isLoggedIn?'S':user.name[0]}</Avatar> */}

          <Avatar sx={{ width: 32, height: 32 }} alt={userName}>
            {userName[0]}
          </Avatar>

          <Typography sx={{ minWidth: 100 }}>
            {/* {!isLoggedIn?'Scarlett':user.name} */}
            {userName}
          </Typography>

        </Button>

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >

          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon>
              {/* <Settings fontSize="small" /> */}
              <ManageAccountsIcon fontSize="small" />
            </ListItemIcon>
            Profile Settings
          </MenuItem>

          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>

        </StyledMenu>
      </div>

    </>
  );
};
