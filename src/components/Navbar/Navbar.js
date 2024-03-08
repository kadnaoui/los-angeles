import React from 'react';

import styles from './Navbar.module.css';

const Navbar = (props) => {
  const {images, MenuItems, style}=props;

  const renderImages=images.map(({imgPath,imgAlt}, index)=>(<img src={imgPath} alt={imgAlt}  key={index}/>));
  const renderItems=MenuItems.map(({href,text}, index)=>(<li key={index}><a href={href}>{text}</a></li>));

  return (
    <nav className={styles.navbar} style={style}>
      <a  href='#section1'>
      {renderImages}
      </a>
      <ul>
        {renderItems}
      </ul>
    </nav>
  );
}

export default Navbar;
