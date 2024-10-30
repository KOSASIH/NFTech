import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from an API.
 * @param {string} url - The URL to fetch data from.
 * @param {object} options - Optional fetch options (method, headers, body, etc.).
 * @returns {object} - An object containing loading state, error, and fetched data.
 */
const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController(); // Create an AbortController instance
        const { signal } = controller; // Get the signal from the controller

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    method: options.method || 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        ...options.headers,
                    },
                    body: options.body ? JSON.stringify(options.body) : null,
                    signal, // Pass the signal to the fetch request
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort(); // Cleanup function to abort fetch on unmount
        };
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;
