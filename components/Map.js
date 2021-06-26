import { React } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GOOG_MAPS_API_KEY } from '../lib/constants';

const containerStyle = {
    width: '500px',
    height: '500px',
    margin: '0 auto'
};
//const google = window.google ? window.google : {};
// const options = {
//     zoomControlOptions: {
//         position: google.maps.ControlPosition.RIGHT_CENTER,
//         // ...otherOptions
//     }
// }

const center = {
    lat: 24,
    lng: 121
};

export default function Map () {
    //const [ map, setMap ] = useState( null )

    // const onLoad = useCallback( function callback ( map ) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds( bounds );
    //     setMap( map )
    // }, [] )

    // const onUnmount = useCallback( function callback ( map ) {
    //     setMap( null )
    // }, [] )

    return (
        <LoadScript
            googleMapsApiKey={ `${ GOOG_MAPS_API_KEY }` }
        >
            <GoogleMap
                mapContainerStyle={ containerStyle }
                center={ center }
                zoom={ 8 }
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </LoadScript>
    )
}