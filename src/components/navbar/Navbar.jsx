import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="src/components/navbar#home">Home</a></p>
          <p><a href="src/components/navbar#wcomp">What is Islamic Art?</a></p>
            <p><a href="src/components/navbar#wrom">What is Roman/Greek Art?</a></p>
          <p><a href="src/components/navbar#winter">What is Indigenous Art?</a></p>
          <p><a href="src/components/navbar#timeline">Timeline</a></p>
          <p><a href="src/components/navbar#artifacts">Artifacts</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="src/components/navbar#home">Home</a></p>
            <p><a href="src/components/navbar#wcomp">What is Transportation?</a></p>
            <p><a href="src/components/navbar#winter">What is Communication?</a></p>
            <p><a href="src/components/navbar#timeline">Timeline</a></p>
            <p><a href="src/components/navbar#impacts">Impacts on Society</a></p>
            <p><a href="src/components/navbar#blog">Library</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
