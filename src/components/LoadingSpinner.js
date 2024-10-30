import React from 'react';
import './LoadingSpinner.css'; // Import CSS for styling

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner" role="alert" aria-live="assertive">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
