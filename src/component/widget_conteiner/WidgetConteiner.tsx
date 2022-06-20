import * as React from "react";
import './widget_conteiner.css'

type widgetProp = {
    children: JSX.Element,
    className: string
}

export const WidgetConteiner: React.FC = (props: widgetProp) => {
    const {children}  = props;
    let className = 'widgetConteiner'
    if (props.hasOwnProperty('className')) {
        className += ' ' + props.className
    }

    return(
        <div className={className}>
            {children}
        </div>
    )
}