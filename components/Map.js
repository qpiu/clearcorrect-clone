import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
//import { Wrapper } from '@googlemaps/react-wrapper';
import { GOOG_MAPS_API_KEY } from '../lib/constants';
import MapSearchBar from './MapSearchBar';
import MapSearchResults from './MapSearchResults';

const mapStyle = {
    width: '500px',
    height: '500px',
    flexGrow: '1'
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

const HandleSearchSubmit = ( e, searchOpt ) => {
    e.preventDefault();
    console.log( searchOpt )
}

export default function Map () {
    const [ googlemap, setGoogleMap ] = useState( null )
    useEffect( () => {
        let mounted = true;
        if ( mounted ) {
            loader
                .load()
                .then( ( google ) => {
                    //setGoogleMap( google );
                    new google.maps.Map( document.getElementById( "map" ), mapOptions );
                } )
                .catch( ( e ) => console.log( e ) )
        }
        return () => {
            mounted = false;
        };
    }, [] );

    return (
        <div>
            <MapSearchBar searchHandler={ HandleSearchSubmit } />
            <div style={ { display: 'flex', width: '80%', margin: '0 auto' } }>
                <MapSearchResults results={ [ 'test1', 'test2' ] } />
                <div id="map" style={ mapStyle }></div>
            </div>
        </div>
    );
}