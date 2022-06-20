import * as React from "react";
import './day_widget.css'
// @ts-ignore
import {WidgetConteiner} from "../../widget_conteiner/WidgetConteiner.tsx";
// @ts-ignore
import {getPicturePrecipitation} from "../../../image/get_a_picture_of_precipitation.tsx";


type dataType = {
    name: string
}

type propType = {
    data: dataType
}

export const DayWidget: React.FC = (props:propType) => {
    const { data } = props
    return (
        <WidgetConteiner className={'dayConteiner'}>
            {data.name}
            <p className={'logo'}>
                <img src={getPicturePrecipitation(15)} alt="sun" width={'50px'} height={'50px'}/>
            </p>
            <p style={{display: 'inline'}}>
                <div style={{color: 'var(--color-light-text)', marginRight: '5px', display: "inline"}}>
                    5°
                </div>
                <>
                    6°
                </>
            </p>
        </WidgetConteiner>
    )
}