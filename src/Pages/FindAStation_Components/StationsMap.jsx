import React from 'react';

import { APIProvider, Map } from '@vis.gl/react-google-maps';

const StationsMap = () => (
    <APIProvider apiKey={'AIzaSyBeTJ3Vg9nc1dD7sldTXvlKUZoaT-liKzg'}>
        <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: -41.29, lng: 173.24 }}
            defaultZoom={6}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        />
    </APIProvider>
);

export default React.memo(StationsMap)