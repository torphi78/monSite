import React, { useState } from 'react';
import './Dropdown.css';
import { HashLink } from 'react-router-hash-link';
import PropTypes from "prop-types";

function Dropdown({ setClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(false);
    setClick(false);
  };

  const MenuItems = [
    {
      title: 'Print',
      path: '/#elCarousel',
      cName: 'dropdown-link'
    },
    {
      title: 'Web',
      path: '/#webPortfolio',
      cName: 'dropdown-link'
    }
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={clicked ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <HashLink
                className={item.cName}
                smooth to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Dropdown.propTypes = {
  setClick: PropTypes.func.isRequired,
};


export default Dropdown;
