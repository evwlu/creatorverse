import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg'

function Header() {
    return (
        <div>
            <div className="banner_header">
                <div>
                <b className="fancytext_header"> Ye Almighty Creatorverse </b>
                </div>
                <a>
                <img src={viteLogo} className="logo_header" alt="Vite logo" />
                </a>
            </div>
        
            <div className="body_header">
                <div className="button-container_header">
                    <Link to='/add'>  <button className="custom-buttons_header"> Add A Creator </button> </Link> 
                    <div className="pipe"></div>
                    <Link to='/'> <button className="custom-buttons_header"> View All Creators </button> </Link>
                </div>
             </div>
      </div>
    )
}

export default Header