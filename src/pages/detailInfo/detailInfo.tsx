import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BigCityCard } from '../../components/bigCityCard/bigCityCard';
import { Logo } from '../../components/logo/logo';
import store from '../../redux/store';
import { useParams } from 'react-router-dom';
import { fetchDetailyWeatherAction } from '../../redux/detailWeather/detailWeatherApi';
import { fetchHourlyWeatherAction } from '../../redux/weatherHourly/weatherHourlyApi';
import { hourlyListSelector } from '../../redux/weatherHourly/weatherHourlySelector';
import { coordinateSelector, detailWeatherSelector } from '../../redux/detailWeather/detailWeatherSelector';
import './detailInfo.scss';

export const DetailInfo = ()  => {
    const dispatch: typeof store.dispatch = useDispatch();
    const coordinate = useSelector(coordinateSelector);
    
    const { id } = useParams();
    const {
      weather,
      temp,
      wind_speed,
      feels_like,
      pressure,
      humidity,
      temp_min,
      temp_max,
      name,
    } = useSelector(detailWeatherSelector);
   
    useEffect(() => {
      coordinate && dispatch(fetchHourlyWeatherAction(coordinate));
      id && dispatch(fetchDetailyWeatherAction(id));
    }, [id, coordinate]);

  return (
    <div className='detail-info'>
        <Logo/>
        <BigCityCard
          name={name}
          weather={weather}
          temp={temp}
          wind_speed={wind_speed}
          feels_like={feels_like}
          pressure={pressure}
          humidity={humidity}
          temp_min={temp_min}
          temp_max={temp_max}
        />
    </div>
  );
};
