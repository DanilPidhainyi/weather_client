import * as React from "react";
// @ts-ignore
import {DayWidget} from "./day_widget/DayWidget.tsx";
import './days_bar.css'

export class DaysBar extends React.Component<any, any> {

    // состояні нестояніє і проча хрень
    // отримане чудесним способом дані
    private forecast_for_the_week = [{name: 'Tue'}, {name: 'Wed'}, {name: 'Thu'}, {name: 'Fri'}, {name: 'Sat'}, {name: 'Sun'}, {name: 'Mon'}]

    render() {

        return (
            <ul className={'list_days'}>
                {
                    this.forecast_for_the_week.map((name, index) =>
                    // Only do this if items have no stable IDs
                    // todo add id or other key for day
                    <li key={index}>
                        {<DayWidget data={name}/>}
                    </li>
                    )
                }
            </ul>
        )
    }

}