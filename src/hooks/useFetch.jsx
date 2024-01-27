// fetch -> first render -> useEffect
// fetch -> dynamic -> url
// outpur -> api's data

import { useEffect, useState, useRef } from "react";

let useFetch = (url, _options) => {

    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let options = useRef(_options);

    useEffect(() => {

        console.log(options);

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
    }, [url, options]);
    return {data, loading ,error};
}

export default useFetch;