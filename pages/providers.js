import Map from '../components/Map';
import { providersData } from '../lib/providersData';

export default function Providers () {
    return (
        <Map providers={ providersData } />
    );
}