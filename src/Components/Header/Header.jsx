import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isHealthActive, setIsHealthActive] = useState(false);
    const [isHealthMobActive, setIsHealthMobActive] = useState(false);

    const handleMenuActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleMenuDeActive = () => {
        setIsMenuActive(false);
    };

    const handleHealthActive = () => {
        setIsHealthActive(true);
    };

    const handleHealthDeActive = () => {
        setIsHealthActive(false);
    };

    const handleHealthMobActive = () => {
        setIsHealthMobActive(!isHealthMobActive);
    };

    return (
        <header>
            <div className="container">
                <div className="top">
                    <div className="content">
                        <Link to="/creadit-detail">Apply Now</Link>
                        <Link to="/">Home</Link>
                        
                    </div>
                </div>
                <div className="bottom">
                    <Link onClick={handleMenuDeActive} to={'/'} className="logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <nav>
                        <ul className='desktop-mod'>
                            <li>
                                <Link
                                    to={''}
                                    onMouseEnter={handleHealthActive}
                                    onMouseLeave={handleHealthDeActive}
                                    className="health-pointer"
                                >
                                    PERSONAL
                                    {/* <ul className={`health-hover ${isHealthActive ? 'health-active' : ''}`}>
                                        <li><Link onClick={handleMenuDeActive} to={''}>Life Insurance</Link></li>
                                        <li><Link onClick={handleMenuDeActive} to={''}>Life Insurance</Link></li>
                                    </ul> */}
                                </Link>
                            </li>
                            <li><Link to={''} onClick={handleMenuDeActive}>PIONEER</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>INDIE</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>NRI</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>BUSINESS</Link></li>
                        </ul>
                        <ul className={`mob-mod ${isMenuActive ? 'menu-Active' : ''}`}>
                            <li>
                                <Link
                                    className='health-mob-pointer'
                                    onClick={handleHealthMobActive}
                                >
                                    PERSONAL
                                </Link>
                                {/* <ul className={`health-mob-hover ${isHealthMobActive ? 'health-mob-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive}>Life Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive}>Life Insurance</Link></li>
                                </ul> */}
                            </li>
                            <li><Link onClick={handleMenuDeActive}>PIONEER</Link></li>
                            <li><Link onClick={handleMenuDeActive}>INDIE</Link></li>
                            <li><Link onClick={handleMenuDeActive}>NRI</Link></li>
                            <li><Link onClick={handleMenuDeActive}>BUSINESS</Link></li>
                            <div className="social-link">
                                <i className="ri-facebook-box-line"></i>
                                <i className="ri-instagram-line"></i>
                                <i className="ri-twitter-line"></i>
                            </div>
                        </ul>
                    </nav>
                    <div className="btn-box">
                        <Link onClick={handleMenuDeActive} to="/creadit-detail">Apply Now</Link>
                        <div className="menu" onClick={handleMenuActive}>
                            <i className="ri-menu-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
