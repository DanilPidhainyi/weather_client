import * as React from "react";
// @ts-ignore
import {WidgetConteiner} from "../../widget_conteiner/WidgetConteiner.tsx";

export const WindStatus = props => {
    let className = ''
    if (props.hasOwnProperty('className')) {
        className += ' ' + props.className
    }

    return(
        <WidgetConteiner className={className}/>
    )
}