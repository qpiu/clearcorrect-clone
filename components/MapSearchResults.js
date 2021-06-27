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
    return (
        <div style={ searchResultsStyle } className="mapSearchResults">
            <ul>
                <li>Results</li>
                {
                    ( results.length > 0 ) ?
                        ( results.map( ( res, i ) => {
                            return (
                                <li style={ resultItemStyle } key={ i }>{ res }</li>
                            );
                        } ) ) :
                        ( <li>No results.</li> )
                }
            </ul>
        </div>
    );
}