import React from 'react';
import Button from './button';

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <center>
        <header className="header">
            <h2 className="app-header">Task Manager App</h2>
            <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
        </center>
    )
}

export default Header;
