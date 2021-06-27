import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
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
    libraries: [ "places", "drawing", "geometry" ]
} )

const centerTW = {
    lat: 24,
    lng: 121
};

const HandleSearchSubmit = ( e, searchOpt ) => {
    e.preventDefault();
    console.log( searchOpt )
}

export default function Map ( { providers } ) {
    const [ mapOpt, setmapOpt ] = useState( { center: centerTW, zoom: 9 } );

    // get user position
    useEffect( () => {
        if ( "geolocation" in navigator ) {
            navigator.geolocation.getCurrentPosition( function ( position ) {
                console.log( "Latitude is :", position.coords.latitude );
                console.log( "Longitude is :", position.coords.longitude );
                setmapOpt( { center: { lat: position.coords.latitude, lng: position.coords.longitude }, zoom: 14 } )
            } );
        } else {
            console.log( "geolocation not available" );
        }
    }, [] );

    // load map
    useEffect( () => {
        let mounted = true;
        if ( mounted ) {
            loader
                .load()
                .then( ( google ) => {
                    let map = new google.maps.Map( document.getElementById( "map" ), mapOpt )
                    providers.forEach( p => {
                        //console.log( p );
                        new google.maps.Marker( {
                            position: p.latLng,
                            map,
                            title: p.title,
                        } );
                    } );
                } )
                .catch( ( e ) => console.log( e ) )
        }
        return () => {
            mounted = false;
        };
    }, [ mapOpt ] );

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