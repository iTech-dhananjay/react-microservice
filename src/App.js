import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import Video from './videoStream'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/video" element={<Video />} />
            </Routes>
        </Router>
    );
}

export default App;