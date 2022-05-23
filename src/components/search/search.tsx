import React from 'react';
import { Button, TextField } from '@mui/material';
import { ISearchProps } from './type';
import { Logo } from '../logo/logo';
import './search.scss';

export const Search = ({ onChange, value, onClick, status }: ISearchProps) => (
  <div className='search'>
    <Logo/>
    <TextField
      className='search__text-field'
      label={status === 404 ? 'city not found' : 'enter city'}
      type='search'
      value={value}
      onChange={onChange}
      data-testid='search'
    />
    <Button
      className='search__btn'
      variant="contained"
      onClick={onClick}
      data-testid='searchBtn'
    >
      Enter
    </Button>
  </div>
);
