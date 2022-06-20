import './App.css';
import {DaysBar} from "../DaysBar/DaysBar.tsx";
import {SideBar} from "../side_bar/SideBar.tsx";
import {TodayBar} from "../TodayBar/TodayBar.tsx";
import {useJsApiLoader} from "@react-google-maps/api";
import {REACT_APP_MAP_API_KEY} from "../../apі_key.ts";



function App() {
    const libraries = ['places']

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: REACT_APP_MAP_API_KEY,
        libraries
    })

  return (
    <div className="App">
        <SideBar className={'window_on_the_left'} isLoaded={isLoaded}/>
        <div className={'main_content'}>
            <div className={'line_settings'}>
                <div style={{color: 'var(--color-light-text)', marginRight: '40px'}}>Today</div> Week
            </div>
            <DaysBar />
            <div className={'line_today'}>
                Today's Highlights
            </div>
            <TodayBar isLoaded={isLoaded}/>
        </div>
    </div>

  );
}

export default App;

