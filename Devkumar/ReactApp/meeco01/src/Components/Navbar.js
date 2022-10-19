import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Logo from '../Images/Logo.svg';
import './Navbar.css';
import {Links} from '../data';

const Navbar = () => {
  return (
    <nav className='container-fluid navbar navbar-expand-lg navbar-light bg-light'>
      <div className='col-md-3'>
        <Link to='/'>
          <img src={Logo} alt='Meeco' width={200} />
        </Link>
      </div>

      <div className='col-md-6'>
        <div className='collapse navbar-collapse justify-content-center'>
          <ul className='navbar-nav text-center'>
            {Links.map(({name, path}, index) => {
              return (
                <li className='nav-item'>
                  <NavLink className='nav-link' to={path}>
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='col-md-3 d-flex justify-content-end'>
        <button className='btn mr-4' type='submit' onClick={'submit'}>
          <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
        </button>

        <button className='btn btn-mycolor'>Get in Touch</button>
      </div>
    </nav>
  );
};
export default Navbar;
