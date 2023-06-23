import React from 'react';
import Button from './button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ showForm, changeTextAndColor, endIcon }) => {
    return (
        <center>
        <header className="header">
            <h2 className="app-header">Task Management</h2>
            <Button onClick={showForm} text={changeTextAndColor ? 'Close' : 'Add'} endIcon={changeTextAndColor ? <CloseIcon/> : <AddIcon/> } />
        </header>
        </center>
    )
}

export default Header;
