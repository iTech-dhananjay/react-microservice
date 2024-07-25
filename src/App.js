import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./payment-success";
import Video from './videos-stream'
import ImageUploader from "./image-chunks";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/video" element={<Video />} />
                <Route path="/image" element={<ImageUploader />} />
            </Routes>
        </Router>
    );
}

export default App;