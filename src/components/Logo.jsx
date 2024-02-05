import React from 'react';
import LogoSymbol from '../assets/logo-symbol.png';
import LogoCSS from '../styles/Logo.module.css';

const Logo = () => {
  return (
    <div className={LogoCSS.logoWrapper}>
      <img src={LogoSymbol} alt="Logo Symbol" />
      <h2 className={LogoCSS.brand}>Brand</h2>
    </div>
  );
};

export default Logo;
