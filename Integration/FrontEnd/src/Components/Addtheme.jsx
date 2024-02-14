// import Nav from "./Nav"
import './Addtheme.css'
import TextField from '@mui/material/TextField';
import { useState } from "react";
// import {FaTrash} from 'react-icons/fa'
import MenuItem from '@mui/material/MenuItem';
import { GiCancel } from "react-icons/gi";
const Addtheme = ({onEventCreate,onClose}) => {

    const currencies = [
    {
        value: 'Available',
        label: 'Available',
    },
    {
        value: 'Not Available',
        label: 'Not Available',
    },
    ];
    const[url,setUrl] = useState('');
    const handleUrl = (e) => {
        setUrl(e.target.value)
    }
    const[theme,setTheme] = useState('');
    const handleTheme = (e) => {
        setTheme(e.target.value)
    }
    const[price,setPrice] = useState('');
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const[rating,setRating] = useState('');
    const handleRating = (e) => {
        setRating(e.target.value)
    }
    const[video,setVideo] = useState('');
    const handleVideo = (e) => {
        setVideo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            url,
            theme,
            price,
            rating,
            video
        };
        onEventCreate(data);
        onClose();
        setUrl('')
        setTheme('')
        setVideo('')
        setPrice('')
        setRating('')
    }
  return (
    <div>
        <div className="at1">
            <div className="at2">
                <div className='trashicon'><GiCancel onClick={onClose} size={25} /></div>
                <form onSubmit={handleSubmit} >
                <div className="at3">
                <TextField
                value={url}
                onChange={handleUrl}
                id="outlined-multiline-flexible"
                label="Image Url"
                multiline
                maxRows={4}
                />
                <TextField
                value={theme}
                onChange={handleTheme}
                id="outlined-multiline-flexible"
                label="Theme Name"
                multiline
                maxRows={4}
                />
                <TextField
                value={rating}
                onChange={handleRating}
                id="outlined-multiline-flexible"
                label="Rating"
                multiline
                maxRows={4}
                />
                <TextField
                id="outlined-select-currency"
                select
                onChange={handleVideo}
                value={video}
                label="Videographer">
                {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
                ))}
                </TextField>
                <TextField
                value={price}
                onChange={handlePrice}
                id="outlined-multiline-flexible"
                label="Price"
                multiline
                maxRows={4}
                />
                </div><br></br>
                <button className="at4" type="submit">Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Addtheme