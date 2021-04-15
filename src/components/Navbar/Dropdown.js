import React, { useState } from 'react';
import './Dropdown.css';
import { HashLink } from 'react-router-hash-link';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
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

export default Dropdown;
