// fetch -> first render -> useEffect
// fetch -> dynamic -> url
// outpur -> api's data

import { useEffect, useState } from "react";

let useFetch = (url) => {

    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
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
    }, [url]);
    return {data, loading ,error};
}

export default useFetch;