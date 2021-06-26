import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
//import { Wrapper } from '@googlemaps/react-wrapper';
import { GOOG_MAPS_API_KEY } from '../lib/constants';
import MapSearchBar from './MapSearchBar';

const mapStyle = {
    width: '500px',
    height: '500px',
    margin: '0 auto'
};

const loader = new Loader( {
    apiKey: `${ GOOG_MAPS_API_KEY }`,
    version: "weekly",
    libraries: [ "places" ]
} )

const centerTW = {
    lat: 24,
    lng: 121
};

const mapOptions = {
    center: centerTW,
    zoom: 8
};

export default function Map () {
    const [ googlemap, setGoogleMap ] = useState( null )
    //const [ autocomplete, setAutocomplete ] = useState( null )
    useEffect( () => {
        let mounted = true;
        if ( mounted ) {
            loader
                .load()
                .then( ( google ) => {
                    setGoogleMap( google );
                    new google.maps.Map( document.getElementById( "map" ), mapOptions );
                    //setAutocomplete( new google.maps.places.AutocompleteService() );
                } )
                .catch( ( e ) => console.log( e ) )
        }
        return () => {
            mounted = false;
        };
    }, [] );

    return (
        <div>
            <MapSearchBar />
            <div id="map" style={ mapStyle }></div>
        </div>
    );
}