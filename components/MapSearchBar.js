import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOG_MAPS_API_KEY } from '../lib/constants';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const loader = new Loader( {
    apiKey: `${ GOOG_MAPS_API_KEY }`,
    version: "weekly",
    libraries: [ "places" ]
} )

export default function MapSearchBar ( { searchHandler } ) {
    const [ searchOpt, setSearchOpt ] = useState( { radius: "5", results: "10" } );
    const [ autocompleteService, setAutoCompl ] = useState( null );
    const [ predictions, setPredictions ] = useState( [] );
    // material-ui controls
    const [ location, setLocation ] = useState( '' );
    //const [ inputValue, setInputValue ] = useState( '' );

    useEffect( () => {
        let mounted = true;
        if ( mounted ) {
            loader
                .load()
                .then( ( google ) => {
                    setAutoCompl( new google.maps.places.AutocompleteService() );
                } )
                .catch( ( e ) => console.log( e ) )
        }
        return () => {
            mounted = false;
        };
    }, [] );

    useEffect( () => {
        console.log( location )
    }, [ location ] )

    const onPlaceChanged = ( value ) => {
        if ( autocompleteService !== null ) {
            //setInputValue( value )
            autocompleteService.getPlacePredictions( { input: value } )
                .then( ( res ) => {
                    //console.log( res );
                    let predictions = res.predictions.map( ( p ) => p.description )
                    setPredictions( predictions )
                } )
                .catch( ( e ) => console.log( e ) )


        } else {
            console.log( 'Autocomplete is not loaded yet!' )
        }
    }

    return (
        <div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: '0 auto' } }>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={ predictions || [] }
                onChange={ ( event, loc ) => {
                    setLocation( loc );
                } }
                onInputChange={ ( event, newInputValue ) => {
                    onPlaceChanged( newInputValue );
                } }
                renderInput={ ( params ) => (
                    <TextField { ...params } label="Your location" margin="normal" />
                ) }
            />
            <p style={ { margin: '0 auto' } }>
                <span style={ { width: '80px', margin: '5px' } }>
                    <label htmlFor="radius">Search radius: </label>
                    <select id="radius" name="searchOpt[radius]" value={ searchOpt.radius } onChange={ e => setSearchOpt( { ...searchOpt, radius: e.target.value } ) }>
                        <option value="5">5 km</option>
                        <option value="10">10 km</option>
                        <option value="25">25 km</option>
                        <option value="50">50km</option>
                    </select>
                </span>
                <span style={ { width: '80px', margin: '5px' } }>
                    <label htmlFor="results">Results: </label>
                    <select id="results" name="searchOpt[results]" value={ searchOpt.results } onChange={ e => setSearchOpt( { ...searchOpt, results: e.target.value } ) }>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </span>

                <button style={ { width: '80px', margin: '5px' } } onClick={ ( e ) => searchHandler( e, { ...searchOpt, locaion: location } ) }>Find</button>
            </p>
        </div>
    )
}