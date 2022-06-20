import * as React from "react";
import './sun_moon.css'

const sun = (
    <div id="sun">
        <div className="sunbeams">
            <div className="beam beam1"></div>
            <div className="beam beam2"></div>
            <div className="beam beam3"></div>
            <div className="beam beam4"></div>
            <div className="beam beam5"></div>
            <div className="beam beam6"></div>
            <div className="beam beam7"></div>
            <div className="beam beam8"></div>
        </div>
        <div className="eyes">
            <div className="eyes-l"></div>
            <div className="eyes-r"></div>
        </div>
    </div>
)

const moon = (
    <div id="moon">
        <div className="crater crater1"></div>
        <div className="crater crater2"></div>
        <div className="crater crater3"></div>
        <div className="crater crater4"></div>
        <div className="crater crater5"></div>
        <div className="crater crater6"></div>
        <div className="eyes">
            <div className="eyes-l"></div>
            <div className="eyes-r"></div>
        </div>
    </div>
)

export const Sun_Moon = () => {
    return(
        <div className={'container_sun_moon'}>
            <div id="world">
                {sun}
                {moon}
            </div>
        </div>
    )
}