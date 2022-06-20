import * as React from "react";
import './search.css'


export const Search = props => {

    // const debounce = (fn, ms) => {
    //     let timeout;
    //     return function () {
    //         const fnCall = () => { // @ts-ignore
    //             fn.apply(this, arguments) }
    //         clearTimeout(timeout);
    //         timeout = setTimeout(fnCall, ms)
    //     };
    // }
    //
    // function onChange(e) {
    //     console.log(e.target.value);
    // }
    //
    // // @ts-ignore
    // onChange = debounce(onChange, 200);
    //
    // document.getElementById('search').addEventListener('keyup', onChange);


    // todo добавить історію поіска.

    // const getPlace = inputText => {
    //     var geocoder = new google.maps.Geocoder();
    //     geocoder.geocode({
    //         "address": inputText
    //     }, function(results) {
    //         console.log(results[0].geometry.location); //LatLng
    //     });
    // }

    return (

        // <form className={'searchConteiner'} autoComplete="off" onSubmit="event.preventDefault();" role="search">
        <form className={'searchConteiner'} autoComplete="off"  role="search">
            <label className={'searchLab'} htmlFor="search">Search for places ...</label>
            <input id="search" type="search" placeholder="Search for places ..." autoFocus required autoComplete="off"/>
            <button className={'searchBtn'} type="submit" >Go</button>
        </form>
    )
}