import React from "react"
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';


const button = ({ color, text, onClick, endIcon }) => {
    return <Button variant="contained" onClick={onClick} endIcon={endIcon} style={{ backgroundColor: color }} >
        {text}
    </Button>
}

export default button