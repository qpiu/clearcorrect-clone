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

const calcDistance = ( p1, p2 ) => {
    var R = 6371; // Radius of the Earth in km
    var rlat1 = p1.lat * ( Math.PI / 180 ); // Convert degrees to radians
    var rlat2 = p2.lat * ( Math.PI / 180 ); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = ( p2.lng - p1.lng ) * ( Math.PI / 180 ); // Radian difference (longitudes)

    var d = 2 * R * Math.asin( Math.sqrt( Math.sin( difflat / 2 ) * Math.sin( difflat / 2 ) + Math.cos( rlat1 ) * Math.cos( rlat2 ) * Math.sin( difflon / 2 ) * Math.sin( difflon / 2 ) ) );
    //console.log( `d = ${ d }` )
    return d;
}

export default function Map ( { providers } ) {
    const [ mapOpt, setmapOpt ] = useState( { center: centerTW, zoom: 9 } );
    const [ geocoder, setGeocoder ] = useState( null );
    const [ searchResults, setSearchResults ] = useState( [] )

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

    const HandleSearchSubmit = ( e, searchOpt ) => {
        e.preventDefault();
        //console.log( searchOpt );
        let userLatLng = null;
        geocoder.geocode( { 'address': searchOpt.location }, function ( results, status ) {
            if ( status == 'OK' ) {
                //console.log( results );
                userLatLng = {
                    lat: results[ 0 ].geometry.location.lat(),
                    lng: results[ 0 ].geometry.location.lng()
                };
                let searchRes = []
                providers.map( ( p ) => {
                    if ( calcDistance( p.latLng, userLatLng ) < searchOpt.radius ) {
                        searchRes.push( p )
                    }
                } )
                console.log( searchRes );
                setSearchResults( searchRes );
            } else {
                console.log( 'Geocode was not successful for the following reason: ' + status );
            }
        } );
    }

    // load map
    useEffect( () => {
        let mounted = true;
        if ( mounted ) {
            loader
                .load()
                .then( ( google ) => {
                    let map = new google.maps.Map( document.getElementById( "map" ), mapOpt )
                    setGeocoder( new google.maps.Geocoder() );
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
                <MapSearchResults results={ searchResults } />
                <div id="map" style={ mapStyle }></div>
            </div>
        </div>
    );
}