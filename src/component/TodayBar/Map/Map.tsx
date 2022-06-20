import * as React from "react";
// @ts-ignore
import {WidgetConteiner} from "../../widget_conteiner/WidgetConteiner.tsx";
import { GoogleMap } from '@react-google-maps/api';
import {useRef} from "react";
import {defaultTheme} from './Theme.js'

export const Map = ({center}) => {
    const mapRef = useRef(undefined)

    const containerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '6%'
    };

    const defaultOptions = {
        panControl: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        clickableIcons: false,
        keyboardShortcuts: false,
        scrollwheel: false,
        disableDoubleClickZoom: false,
        fullscreenControl: false,
        style: defaultTheme
    }

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
    }, [])


    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined
    }, [])

    return (
        <WidgetConteiner className={'map'}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </WidgetConteiner>
    )
}