const searchResultsStyle = {
    width: '300px',
    height: '500px',
    flexGrow: '1',
    padding: '10px'
};
const resultItemStyle = {
    padding: '5px 10px',
};
export default function MapSearchResults ( { results } ) {
    console.log( results );
    if ( results.length > 0 ) {
        return (
            <div style={ searchResultsStyle } className="mapSearchResults">
                <ul>
                    <li>Results</li>
                    {
                        results.map( ( res, i ) => {
                            return (
                                <li style={ resultItemStyle } key={ i }>{ `${ res.title }(${ res.address })` }</li>
                            );
                        } )
                    }
                </ul>
            </div>
        );
    } else {
        return (
            <div style={ searchResultsStyle } className="mapSearchResults">
                <ul>
                    <li>Results</li>
                    <li style={ resultItemStyle }>No results</li>
                </ul>
            </div>
        );
    }

}