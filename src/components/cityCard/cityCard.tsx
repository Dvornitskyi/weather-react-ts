import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, IconButton, Typography, Grid } from '@mui/material';
import store from '../../redux/store';
import { fetchWeatherAction } from '../../redux/weather/weatherApi';
import { deleteCity } from '../../redux/weather/weatherSlice';
import { removeItemFromStorage } from '../../utils/localStorage';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg';
import { ICityCardProps } from './type';
import { findCityFromList } from '../../utils/cityCardUtil';
import { WeatherIcon } from '../weatherIcon/weatherIcon';
import {smallCardListOfCitySelector, smallCardWeatherSelector } from '../../redux/weather/weatherSelector';
import './cityCard.scss';


export const CityCard = ({ cityName }: ICityCardProps) => {
  const dispatch: typeof store.dispatch = useDispatch();

  const weatherData = useSelector(smallCardWeatherSelector);
  const listOfCity = useSelector(smallCardListOfCitySelector);
  
  const {
    cod,
    main,
    id,
    description,
    name,
    weatherId
  } = weatherData && findCityFromList(cityName, weatherData);
  
  const onDelete = () => {
    dispatch(deleteCity(cityName));
    const result = listOfCity.filter((city) => city !== cityName);
    removeItemFromStorage(result);
  };

  const onRefresh = () => dispatch(fetchWeatherAction(cityName));

  useEffect(() => {
    dispatch(fetchWeatherAction(cityName));
  }, [cityName]);

  return (
    <Grid item>
      {cod === 200 && (
        <div className='city-card'>
                    <div className='city-card__area-btns'>
                    <IconButton onClick={onRefresh} className='city-card__area-icons' >
                      <RefreshIcon className='city-card__icons'/>
                    </IconButton>
                      <IconButton aria-label="delete" onClick={onDelete} className='city-card__area-icons'>
                        <DeleteIcon className='city-card__icons'/>
                      </IconButton>
                  </div>
        <Link style={{textDecoration: 'none'}} className='city-card__hover' to={`/city/${id}`} >
          <Card data-testid='cardContainer' variant="outlined" className='city-card__wrapper'>
            <CardContent className='city-card__content'>
              <Typography className='city-card__title' component={"span"}>
                {name}
              </Typography>
              <WeatherIcon code={weatherId}/>
              <Typography className='city-card__content_temp' component={"span"}>
                {`${Math.round(main.temp)}°`}
              </Typography>
              <div>{description}</div>
            </CardContent>
          </Card>
        </Link>
        </div>
      )}
    </Grid>
  );
};
