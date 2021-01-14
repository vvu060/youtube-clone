import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon/>
                <Link to='/'>
                    <img className='header__logo' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-256.png' alt='' />
                </Link>
                
            </div>
            
            <div className='header__center'>
                <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type='text' />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton' />
                </Link>
                
            </div>
            
            <div className='header__right'>
                <VideoCallIcon className='header__rightIcon' />
                <AppsIcon className='header__rightIcon'/>
                <NotificationsIcon className='header__rightIcon'/>
                <Avatar src='' />
            </div>
            
        </div>
    )
}

export default Header;
