import React, { useState } from 'react';
import header_styles from '../styles/header.module.css';

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../FontAwesome';

function Header() {
    const active_navlink_style = ({ isActive }) => ({
        color: isActive ? "#ffb400" : '',
            opacity: isActive ? '1' : ''
    });

    const [ sidebar, setSidebar ] = useState('');

    const [ Responsive_bar, setResponsive_bar ] = useState(<FontAwesomeIcon icon={['fas', 'bars']} />);

    const sidebar_toggle = () => {
        if (sidebar === 'active') {
            setSidebar('');
            setResponsive_bar(<FontAwesomeIcon icon={['fas', 'bars']} />);
        } else {
            setSidebar('active');
            setResponsive_bar(<FontAwesomeIcon icon={['fas', 'times']} />);
        }
    }

    return (
        <header id={header_styles.nav}>
            <Link to="/" className={header_styles.text_logo}><img src="/bocchit.gif" /> <span>Bocchi Store</span></Link>

            <div className={`${header_styles.list_items} ${sidebar === 'active' ? header_styles.active : ''}`}>
                <NavLink style={active_navlink_style} to="/" onClick={sidebar_toggle}>Trang chủ</NavLink>
                <NavLink style={active_navlink_style} to="/support" onClick={sidebar_toggle}>Hỗ trợ</NavLink>
                <NavLink style={active_navlink_style} to="/shop" onClick={sidebar_toggle}>Mua hàng</NavLink>
            </div>

            <button 
                id={header_styles.responsive_bar} 
                // className={sidebar === 'active' ? header_styles.active : ''} 
                onClick={sidebar_toggle}
            >
                {Responsive_bar}
            </button>

            <div 
                id={header_styles.responsive_overlay} 
                className={sidebar === 'active' ? header_styles.active : ''}
                onClick={sidebar_toggle}
            ></div>
        </header>
    );
}

export default Header;