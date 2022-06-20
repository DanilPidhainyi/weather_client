import * as React from "react";
import './side_bar.css'
// @ts-ignore
import {Search} from "./search/Search.tsx";
// @ts-ignore
import {getPicturePrecipitation} from "../../image/get_a_picture_of_precipitation.tsx";


interface propsInt {
    className: string
    isLoaded: any
}

export const SideBar: React.FC = (props: propsInt) => {

    return(
        <div className={'sideConteiner ' + props.className}>
            <div style={{margin: '20px'}}><Search isLoaded={props.isLoaded}/></div>
            <img src={getPicturePrecipitation(13)} className={'weatherImg'} alt={'weatherImg'}/>
        </div>
    )
}