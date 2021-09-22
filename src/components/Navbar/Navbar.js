import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import Dropdown from './Dropdown';
import ptilogo from "../logos/ptitlogoPHIL_T.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 360) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 360) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const openModal = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className='navbar'>
      <div className="navbar-container">
        <HashLink smooth to='/#haut' className='navbar-logo' onClick={closeMobileMenu}>
        <img
              src={ptilogo}
              className="leptitlogo"
              alt="petitlogo"
            />
        </HashLink>
        <button type="button" className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <HashLink smooth to='/#presentation' className='nav-links' onClick={closeMobileMenu}>
              Présentation
            </HashLink>
          </li>
          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              // to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Portfolios 
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
          <button
              className="nav-itemBtn"
              type="button"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={openModal}
            >
              <p className="nav-links">Portfolios</p>
              {dropdown && <Dropdown setClick={setClick} />}
            </button>
          
          <li className='nav-item'>
            <HashLink smooth to='/#contactPartie' className='nav-links2' onClick={closeMobileMenu}>
            Contact
            </HashLink>
          </li> 
          <li className='nav-item'>
            <HashLink smooth to='/#footerPartie' className='nav-links' onClick={closeMobileMenu}>
              Liens
            </HashLink>
          </li>       
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
