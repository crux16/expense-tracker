import { Box, Button, ButtonGroup, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import React, { useState, 
    // useRef, 
    useEffect } from 'react';
//import { user } from "../../hooks/useAuth";   
// import { useAuth } from 'hooks/useAuth';
import { useUser } from 'hooks/useUser';
import css from "./UserSetsModal.module.css";
import dummyPhoto from '../../Asset/images/users/Jennifer.png';
import { useDispatch } from 'react-redux';
// import { updateAvatar } from '../../redux/auth/authOperations';
import { updateAvatar, removeAvatar, infoUser } from '../../redux/user/userOperations';




export const UserSetsModal = ({ open, onClose }) => {
    const { info, isLoading } = useUser();
    const [name, setName] = useState(info.name);
    const [currency, setCurrency] = useState(info.currency);
    const [avatar, setAvatar] = useState(info.avatarUrl);
    // const fileRef = useRef(null);
    const [formData, setFormData] = useState("");

    const dispatch = useDispatch();

    // const { user, isLoading } = useAuth();


    const userName = info?.name || 'Scarlett'; // Default to 'Scarlett' if user or user.name is undefined
    const userAvatar = info?.avatarUrl || dummyPhoto;

    const handleAvatarChange = (e) => {
        e.preventDefault();
        dispatch(updateAvatar(e.target.files[0]));
    };

    const handleRemoveAvatar = () => {
        dispatch(removeAvatar(avatar));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setName(...userName, e.target.value);

    }

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    }

    const handleSaveChanges = () => {
        dispatch(infoUser({name,currency}));
    };

    useEffect(()=>{
        setAvatar(userAvatar);
    },[setAvatar,userAvatar]);

    return (
        <>
            <div>UserSetsModal</div>

            <Modal open={open} onClose={onClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    height: 550,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h6" component="h2">Profile Settings</Typography>

                    <form className={css.modalForm}>

                    <span className={css.photo}>
                        <img className={css.photo} src={avatar} alt={name[0]}  />
                        {isLoading && <span className={`${css.loader}`}></span>}
                    </span>
                        <ButtonGroup size="small" mb="2rem" sx={{ gap: '10px' }}  >
                            <Button
                                variant="contained" component="label" fullWidth
                                sx={{ mt: 2 }}>Upload Avatar Photo
                                <input
                                    type="file"
                                    name='image'
                                    accept="image/*" onChange={handleAvatarChange}
                                    hidden
                                />
                            </Button>

                            <Button
                                variant="contained" color="secondary"
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={handleRemoveAvatar}
                            >Remove Avatar</Button>
                        </ButtonGroup>
                    </form>


                    <FormControl fullWidth sx={{ marginTop: '2rem' }}>
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={currency}
                            value={currency}
                            label="Currency"
                            onChange={handleCurrencyChange}
                        >
                            <MenuItem value="eur">€ EUR</MenuItem>
                            <MenuItem value="btc">฿ BTC</MenuItem>
                            <MenuItem value="jpy">¥ JPY</MenuItem>
                            <MenuItem value="php">₱ PHP</MenuItem>
                            <MenuItem value="uah">₴ UAH</MenuItem>
                            <MenuItem value="usd">$ USD</MenuItem>

                        </Select>

                    </FormControl>

                    <TextField
                        fullWidth
                        label="I am"
                        value={name}
                        onChange={handleChange}
                        margin="normal"
                    />

                    <Button variant="contained" color="primary" fullWidth size="large"
                        sx={{ mt: 2 }}
                        onClick={handleSaveChanges}>Save</Button>


                </Box>

            </Modal>
        </>
    )
};
