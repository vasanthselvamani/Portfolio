import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    /*========Toggle menu======*/
    const[Toggle,showmenu]=useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">vasanth</a>
            <div className={Toggle ? "nav__menu show-menu":"nav__menu"}>
                <ul className="nav__list ">
                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="/portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" onClick={() => showmenu (!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showmenu(!Toggle)}>
                <i className="uil uil-bars"></i>
            </div>
            <div className="nav__button">
                <a href="" className="button">
                <i className="uil uil-phone "></i>
                            Book a Call
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Header