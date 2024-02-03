import React from 'react';
import './footer.css'

const Footer = () => {
    var showdate=new Date();
    var displyyear=showdate.getFullYear(); 
  return (
    
    <footer className="footer">
         <hr  className='container'/>
    <nav className="footers container ">
        <a href="index.html" className="footer__logo">vasanth</a>
        <div className="footer__menu show-menu">
            <ul className="footer__list ">
                <li className="footer__item">
                    <a href="/" className="footer__link">
                        Home
                    </a>
                </li>
                <li className="footer__item">
                    <a href="/about" className="footer__link">
                        About
                    </a>
                </li>
                
                <li className="footer__item">
                    <a href="#portfolio" className="footer__link">
                        
                        Portfolio
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#contact" className="footer__link">
                        
                        Contact
                    </a>
                </li>
            </ul>
           
        </div>
        
        <div className="footer__link">
            <a href="" className="footer__scoial">
                <i className="uil uil-instagram footer__icon"></i>
            </a>
            <a href="" className="footer__scoial">
                <i className="uil uil-github footer__icon"></i>
            </a>
            <a href="" className="footer__scoial ">
                <i className="uil uil-linkedin footer__icon"></i>
            </a>
        </div>
    </nav>
    <div className="container">
        <div className="footer__contact ">
           <div className="footer__contact1">
              <i class="uil uil-envelope-edit  footer__icon1"></i>
              <span className="footer__item">Rockrajvasanth@gmail.com</span>
            </div>
            <div className="footer__contact1">
              <i className="uil uil-phone footer__icon1"></i>
              <span className="footer__item">9344216320</span>
            </div>
            <div className="footer__contact1">
               <i class="uil uil-location-point  footer__icon1"></i>
               <span className="footer__item">Somewhere in the world</span>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="footer__copyright">
            <p className='footers__copyright'>
                copyright@{displyyear}. All right reserved
            </p>
        </div>
    </div>
    
</footer>
  )
}

export default Footer