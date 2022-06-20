import * as React from "react";
// @ts-ignore
import {Map} from "./Map/Map.tsx";
// @ts-ignore
import {UVindex} from "./UVindex/UVindex.tsx";
// @ts-ignore
import {WindStatus} from "./WindStatus/WindStatus.tsx";
// @ts-ignore
import {SunriseSunset} from "./SunriseSunset/SunriseSunset.tsx";
// @ts-ignore
import {Humidity} from "./Humidity/Humidity.tsx";
// @ts-ignore
import {Visibility} from "./Visibility/Visibility.tsx";
// @ts-ignore
import {Temperature} from "./Temperature/Temperature.tsx";
import './tudayBar.css'

// @ts-ignore
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import {useState} from "react";


// interface weatherParametersInter {
//
//     UVIndex: number // ультрафіолетовий індекс, який дозволяє оцінити опасність сонця UV Index Deprecated
//     WindStatus: string // статус вітру Current weather data
//     SunriseSunset: number // час сходу заходу сонця  Current weather data
//     Humidity: number // вологість повітря Current weather data
//     Visibility: number // видимість Current weather data
//     Temperature: number // максимальна і мінімальна температури Current weather data
//     Clouds: number // хмарність  Current weather data
// }

export const TodayBar = props => {

    // getWeatherToday(placeOnTheMap: string) {
    //     return async () => {
    //         const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=${WEATHER_API_KEY}`)
    //         console.log(response.data);
    //     }
    // }


    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return(
        <div className={'today_bar_conteiner'}>
            <UVindex className={'today_bar_widget_size position--1'}/>
            <WindStatus className={'today_bar_widget_size position--2'}/>
            <SunriseSunset className={'today_bar_widget_size position--3'}/>
            <Humidity className={'today_bar_widget_size position--4'}/>
            <Visibility className={'today_bar_widget_size position--5'}/>
            <Temperature className={'today_bar_widget_size position--6'}/>
            {props.isLoaded ? <Map className={'map'} center={center}/> :
                <p> щось пішло не так </p>}

        </div>
    );

}

