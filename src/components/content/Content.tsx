import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchWeather, fetchWeatherMoreDays } from '../../redux/weather/weatherSlice'
import styles from "./content.module.scss"

const Content = () => {
    const dispatch = useAppDispatch()
    const { weather, moreData } = useAppSelector(state => state.weather)

    useEffect(() => {
        dispatch(fetchWeather())
        dispatch(fetchWeatherMoreDays())
    }, [])

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };


    return (
        <>
            <div className={styles.center}>
                <div>{weather?.name}</div>
                <div>{weather?.main?.temp}</div>
                <div>Clouds {weather?.clouds?.all}</div>
            </div>
            <div className={styles.left}>
                {moreData?.list?.slice(0, 6).map(data =>
                    <div key={Math.random() * 1000000}>
                        {data.dt}
                        {new Date(data.dt * 1000).toLocaleString('en-US', options)}
                    </div>)}
            </div>
            







            
        </>

    )
}

export default Content