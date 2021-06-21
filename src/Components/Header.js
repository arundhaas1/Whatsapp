import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Header() {
    return (
        <div className='header'>
            <div className="header__title">
                <h2>WhatsApp</h2>
            </div>

            <div className="header__icons">
                <SearchIcon className="icon1" />
                <MoreVertIcon  className="icon2"/>
            </div>
        </div>
    )
}

export default Header
