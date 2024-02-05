import React from 'react';
// import Logo from './Logo';
// import Nav from './Nav';
// import Search from './Search'
import HeaderCSS from '../styles/Header.module.css';

const Header = ({children, style}) => {
  return (
 <div className={`${HeaderCSS.header_container} ${HeaderCSS.borderBottom}`}>
  <div className={HeaderCSS.inner_container}>
    {children}
  </div>
</div>

  );
};

export default Header;
