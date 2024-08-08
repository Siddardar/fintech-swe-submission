import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

export const Header = () => {
    return (
      <header className="sticky top-0 z-10 mx-auto flex-wrap flex w-full flex-wrap items-center justify-between border-b border-gray-100 p-[2em] font-bold uppercase dark:border-gray-800">
        <Logo/>
        <Navbar/>
      </header>
    );
  };
  
  export default Header;