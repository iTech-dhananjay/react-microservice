import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { checkUserSession } from '../../store/actions/authActions'; // action to check if user is authenticated
import '../styles/home.css'; // Assuming you have a dedicated CSS for Home page styling

const HomePage = () => {
    const dispatch = useDispatch();

    // Get user state from Redux store
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    // Check if the user session is valid
    useEffect(() => {
    }, [dispatch]);

    return (
        <div className="home-page-container">
            <h2 className="home-page-header">Welcome to the Home Page</h2>
            {isAuthenticated ? (
                <div className="user-info">
                    <h3>Hello, {user?.name}!</h3>
                    <p>Email: {user?.email}</p>
                </div>
            ) : (
                <p className="guest-message">You are not logged in. Please register or login.</p>
            )}
        </div>
    );
};

export default HomePage;