import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="headerWrapper">
            <div className='header'>
                <div className='bigScreen'>
                    <div className='logo'>Logo</div>
                    <div className='searchBar'>
                        <BsSearch className='searchIcon' />
                        <input>
                        </input>
                    </div>
                    <div className='navLinks'>
                        <Link to="/">Home</Link>
                        <Link to="/settings">Settings</Link>
                        <Link to="/hourly_forecast">Hourly Forecast</Link>
                        <Link to="/daily_forecast">Daily Forecast</Link>
                        <Link to="/map">Map</Link>
                        <Link to="/notifications">Notifications</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>

                <div className='smallScreen'>
                    <div className='logoMenu'>
                        <div className='logo'>Logo</div>
                        <HiMenu onClick={toggleMenu} />
                    </div>
                    {menuOpen && (
                        <div className='navLinks'>
                            <div className='searchBar'>
                                <BsSearch className='searchIcon' />
                                <input>
                                </input>
                            </div>
                            <Link to="/">Home</Link>
                            <Link to="/settings">Settings</Link>
                            <Link to="/hourly_forecast">Hourly Forecast</Link>
                            <Link to="/daily_forecast">Daily Forecast</Link>
                            <Link to="/map">Map</Link>
                            <Link to="/notifications">Notifications</Link>
                            <Link to="/about">About</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
