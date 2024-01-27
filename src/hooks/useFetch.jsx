// fetch -> first render -> useEffect
// fetch -> dynamic -> url
// outpur -> api's data

import { useEffect, useState } from "react";

let useFetch = (url) => {

    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {

        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);
        fetch(url, {
            signal
        })
            .then(res => {
                if(!res.ok) {
                    setLoading(false);
                    throw Error('something went wrong!');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(e => {
                setError(e.message);
            })

            // cleanup function 
            return () => {
                abortController.abort();
            }
    }, [url]);
    return {data, loading ,error};
}

export default useFetch;