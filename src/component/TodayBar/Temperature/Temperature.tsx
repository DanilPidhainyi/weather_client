import * as React from "react";
// @ts-ignore
import {WidgetConteiner} from "../../widget_conteiner/WidgetConteiner.tsx";
import Thermometer from 'react-thermometer-ecotropy'
import './tempreture.css'


export const Temperature = props => {
    let className = 'container_temperature'
    if (props.hasOwnProperty('className')) {
        className += ' ' + props.className
    }

    return(
        <WidgetConteiner className={className}>
            <p className={'widget_header widget_header--tem'} >Temperature</p>
            <Thermometer
                theme="Light"
                value="18"
                max="40"
                format="°C"
                size="normal"
                height="150"
            />
            <Thermometer
                theme="Light"
                value="24"
                max="40"
                format="°C"
                size="normal"
                height="150"
            />
        </WidgetConteiner>
    )
}