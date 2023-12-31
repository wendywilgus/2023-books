import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          2023 Book List &nbsp;&nbsp;<i class="fa-solid fa-book" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/bookshelf' className='nav-links' onClick={closeMobileMenu}>
              Monthly Bookshelf
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/favorites' className='nav-links' onClick={closeMobileMenu}>
              My Favorites
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/full-list' className='nav-links-mobile' onClick={closeMobileMenu}>
              Full List
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Full List</Button>}
      </div>
    </nav>
  </>
  );
}

export default Navbar;