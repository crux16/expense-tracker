import { Box, Button, ButtonGroup, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
//import { user } from "../../hooks/useAuth";
import { useAuth } from 'hooks/useAuth';
import css from "./UserSetsModal.module.css";



export const UserSetsModal = ({ open, onClose }) => {
    const [name, setName] = useState("");
    const [currency, setCurrency] = useState("");
    //const [avatar, setAvatar] = useState(null);
    const fileRef = useRef(null);
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState("");

    const { user } = useAuth();


    const userName = user?.name || 'Scarlett'; // Default to 'Scarlett' if user or user.name is undefined

    const handleAvatarChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleRemoveAvatar = () => {

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setName(...userName, e.target.value);

    }

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    }

    const handleSaveChanges = () => {

    };

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

                        <img className={css.photo} src={formData.profilePicture} alt={userName[0]} value={image}
                            onClick={() => fileRef.current.click()}
                        />
                        <ButtonGroup size="small" mb="2rem" sx={{ gap: '10px' }}  >
                            <Button
                                variant="contained" component="label" fullWidth
                                sx={{ mt: 2 }}>Upload Avatar Photo
                                <input
                                    type="file"
                                    ref={fileRef} accept="image/*" onChange={handleAvatarChange}
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
                            value={currency}
                            label="Currency"
                            onChange={handleCurrencyChange}
                        >
                            <MenuItem value="EUR">€ EUR</MenuItem>
                            <MenuItem value="BTC">฿ BTC</MenuItem>
                            <MenuItem value="JPY">¥ JPY</MenuItem>
                            <MenuItem value="PHP">₱ PHP</MenuItem>
                            <MenuItem value="UAH">₴ UAH</MenuItem>
                            <MenuItem value="USD">$ USD</MenuItem>

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
