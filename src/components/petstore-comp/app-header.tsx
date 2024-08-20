import React from 'react';
import Logo from './logo';
import NavLinks from './nav-links';

const AppHeader = () => {
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2 ">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default AppHeader;
