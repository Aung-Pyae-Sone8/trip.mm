import React, { useCallback, useEffect, useState } from 'react'

const TripList = () => {

    let [trips, setTrips] = useState([]);
    let [url, setUrl] = useState('http://localhost:3001/trips');

    let fetchTrips = useCallback(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTrips(data);
            })
    },[url])

    useEffect(() => {
        fetchTrips();
    }, [fetchTrips]);

    return (
        <div>
            <h1>Ready to go?</h1>

            <button onClick={() => setUrl('http://localhost:3001/trips')}>all</button>
            <button onClick={() => setUrl('http://localhost:3001/trips?location=Myanmar')}>Trips in Myanmar</button>

            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>price - {trip.price} MMK</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TripList;