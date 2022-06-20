import * as React from "react";
// @ts-ignore
import {WidgetConteiner} from "../../widget_conteiner/WidgetConteiner.tsx";
// @ts-ignore
import "./humidity.css"
// @ts-ignore
import {Water} from "./Water.tsx";


export const Humidity = props => {
    let className = 'humidity_container'
    if (props.hasOwnProperty('className')) {
        className += ' ' + props.className
    }
    return(
        <WidgetConteiner className={className}>
            <p className={'widget_header'} style={{position: 'absolute', paddingLeft: '20px'}}>Humidity</p>
            <p className={'humidity_num'}>
                <div style={{ 'fontSize': '4vw'}}>81</div>
                <div style={{ 'fontSize': '1.5vw', marginTop: '1vw'}}>%</div>
            </p>
            <Water></Water>
        </WidgetConteiner>
    )
}