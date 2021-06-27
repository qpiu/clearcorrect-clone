import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOG_MAPS_API_KEY } from '../lib/constants';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const loader = new Loader( {
    apiKey: `${ GOOG_MAPS_API_KEY }`,
    version: "weekly",
    libraries: [ "places" ]
} )

export default function MapSearchBar ( props ) {
    const [ search, setSearch ] = useState( [] )
    // material-ui controls
    const [ value, setValue ] = useState( '' );
    const [ inputValue, setInputValue ] = useState( '' );

    useEffect( () => {
        let mounted = true;
        if ( mounted ) {
            loader
                .load()
                .then( ( google ) => {
                    setSearch( { ...search, autocompleteService: new google.maps.places.AutocompleteService(), placePredictions: [] } );
                } )
                .catch( ( e ) => console.log( e ) )
        }
        return () => {
            mounted = false;
        };
    }, [] );

    const onPlaceChanged = ( value ) => {
        if ( search.autocomplete !== null ) {
            console.log( `location: ${ value }` )
            search.autocompleteService.getPlacePredictions( { input: value } )
                .then( ( res ) => {
                    console.log( res );
                    let predictions = res.predictions.map( ( p ) => p.description )
                    setSearch( { ...search, placePredictions: predictions } )
                } )
                .catch( ( e ) => console.log( e ) )

            setSearch( { ...search, location: value } )
        } else {
            console.log( 'Autocomplete is not loaded yet!' )
        }
    }

    return (
        <div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: '0 auto' } }>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={ search.placePredictions || [] }
                onChange={ ( event, newValue ) => {
                    setValue( newValue );
                } }
                onInputChange={ ( event, newInputValue ) => {
                    onPlaceChanged( newInputValue );
                } }
                renderInput={ ( params ) => (
                    <TextField { ...params } label="freeSolo" margin="normal" variant="outlined" />
                ) }
            />
            <p>
                <span>
                    <label htmlFor="radius">Search radius: </label>
                    <select id="radius" name="search[radius]" value={ search.radius || '' } onChange={ e => setSearch( { ...search, radius: e.target.value } ) }>
                        <option value="5km">5 km</option>
                        <option value="10km">10 km</option>
                        <option value="25km">25 km</option>
                        <option value="50km">50km</option>
                    </select>
                </span>
                <span>
                    <label htmlFor="results">Results: </label>
                    <select id="results" name="search[results]" value={ search.results || '' } onChange={ e => setSearch( { ...search, results: e.target.value } ) }>
                        <option value="10res">10</option>
                        <option value="20res">20</option>
                        <option value="50res">50</option>
                    </select>
                </span>

                <button>Find</button>
            </p>
        </div>
    )
}