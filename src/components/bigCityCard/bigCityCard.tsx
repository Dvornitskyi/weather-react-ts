/* eslint-disable camelcase */
import React from 'react';
import { Card, CardContent } from '@mui/material';
import { IBigCityCardProps } from './type';
import { WeatherIcon } from '../weatherIcon/weatherIcon';
import './bigCityCard.scss';

export const BigCityCard = ({
  weather,
  temp,
  wind_speed,
  feels_like,
  pressure,
  humidity,
  name,
}: IBigCityCardProps)  => {
  return (
    <div className='big-city-card'>
      <Card>
        <CardContent className='big-city-card__area'>
          <span className='big-city-card__title'>{name}</span>
          <div className='big-city-card__content'>
            <div className='big-city-card__content-weather'>
              <WeatherIcon big code={weather.id}/>
              <span data-testid='temp' className='big-city-card__content-temp'>
                {`${Math.round(temp)}°`}
              </span>
            </div>
            <span className='big-city-card__content-description'>{weather.description}</span>
            <span className='big-city-card__content-description'>Wind {wind_speed} kmp</span>
            <span className='big-city-card__content-description'>Pressure: {pressure} hPa</span>
            <span className='big-city-card__content-description'>Humidity: {humidity} %</span> 
            <span className='big-city-card__content-description'>Feels like {Math.round(feels_like)}°</span>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};
