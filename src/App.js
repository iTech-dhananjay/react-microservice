import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/auth.css"; // Ensure custom auth styles are included
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Sidebar />
                <ToastContainer
                    hideProgressBar
                    theme="dark"
                    autoClose={2000}
                    position="top-right" // Positioning for better visibility
                />
                <AppRoutes />
            </Router>
        </Provider>
    );
};

export default App;
