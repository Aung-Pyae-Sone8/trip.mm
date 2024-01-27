import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './index.css';

const TripList = () => {

    let [url, setUrl] = useState('http://localhost:3001/trips');
    let { data: trips, loading, error } = useFetch(url);

    return (
        <div className='container'>
            <div className="flex-container">
                <h1>Ready to go?</h1>

                {error && <p>Somthing went wrong!</p>}

                {!error && <div className='btn-group'>
                    <button onClick={() => setUrl('http://localhost:3001/trips')}>all</button>
                    <button onClick={() => setUrl('http://localhost:3001/trips?location=Myanmar')}>Trips in Myanmar</button>
                </div>}

                {loading && <div className='loading'>
                    <span className="loader"></span>
                </div>}

                {!loading && !error && <ul className='trips-list'>
                    {trips && trips.map(trip => (
                        <li key={trip.id} className='trip'>
                            <h3>{trip.name}</h3>
                            <p>price - {trip.price} MMK</p>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default TripList;