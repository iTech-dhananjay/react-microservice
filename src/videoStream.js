import React from 'react';

const videoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f0f0f0', // Light gray background for better contrast
};

const videoPlayerStyle = {
    width: '80%',
    maxWidth: '800px', // Max width for larger screens
    border: '2px solid #333', // Dark border for better visibility
    borderRadius: '10px', // Rounded corners for a modern look
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
};

const Video = () => {
    return (
        <div style={videoContainerStyle}>
            <video style={videoPlayerStyle} controls src="http://localhost:4009/video-stream/stream/video"></video>
        </div>
    );
};

export default Video;