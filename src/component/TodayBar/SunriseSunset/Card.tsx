// @ts-ignore
import React, {ReactNode} from "react";
import './Card.css'

type propsType = {
    front: undefined | ReactNode,
    back: undefined | ReactNode,
    style: undefined | Object
}

export const Card = ( props:propsType )=> {
    return(
        <div className="card" style={props.style}>
            <div className="front">
                {props.front}
            </div>
            <div className="back">
                {props.back}
            </div>
        </div>
    )
}