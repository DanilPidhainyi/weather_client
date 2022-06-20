import * as React from "react";
// @ts-ignore
import {WidgetConteiner} from "../../widget_conteiner/WidgetConteiner.tsx";
// @ts-ignore
import {Sun_Moon} from "./SUN_MOON.tsx";

import './sunrise.css'
import {TransitionGroup} from "react-transition-group";
import {useState} from "react";
// @ts-ignore
import {Card} from "./Card.tsx";



export const SunriseSunset = props => {
    let className = 'widget-Sun'
    if (props.hasOwnProperty('className')) {
        className += ' ' + props.className
    }

    const [isDay, setIsDay] = useState(true)



    return(
        <WidgetConteiner className={className}>
            <p className={'widget_header'} >Sunrise Sunset</p>
            <Sun_Moon />

            <div className={'sunMoonTime'}>
                <Card style={{}}
                    front={
                        <div className={'sunTime'}>{'07:00'}</div>
                    } back={
                        <div className={'moonTime'}>{'09:00'}</div>
                }/>
            </div>


        </WidgetConteiner>
    )
}