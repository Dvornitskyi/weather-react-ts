import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import './logo.scss';

export const Logo = () => {
  return (
        <Link className='logo' to={'/'} >
            Weather
        </Link>
      )}