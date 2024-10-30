import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { fetchData } from '../services/apiService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';
import Notification from '../components/Notification';

const Home = () => {
    const { data, loading, error, setData } = useContext(AppContext);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
                setNotification({ message: 'Data loaded successfully!', type: 'success' });
            } catch (err) {
                setNotification({ message: 'Failed to load data.', type: 'error' });
            }
        };
        getData();
    }, [setData]);

    const handleCloseNotification = () => {
        setNotification(null);
    };

    return (
        <ErrorBoundary>
            {loading && <LoadingSpinner />}
            {error && <div>Error: {error.message}</div>}
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={handleCloseNotification}
                />
            )}
            <div className="home">
                <h2>Welcome to NFTech</h2>
                <p>Your platform for Neurofibromatosis prevention and management.</p>
                {data && (
                    <div>
                        <h3>Data Overview</h3>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </div>
        </ErrorBoundary>
    );
};

export default Home;
