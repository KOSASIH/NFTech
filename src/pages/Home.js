import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { fetchData } from '../services/apiService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
    const { data, loading, error, setData } = useContext(AppContext);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, [setData]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Welcome to NFTech</h2>
            <p>Your platform for Neurofibromatosis prevention and management.</p>
            <Notification />
        </div>
    );
};

export default Home;
