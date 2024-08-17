import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./payment-success";
import Video from './videos-stream'
import ImageUploader from "./image-chunks";
import ChatPage from "./chatPage";
import VideoGamePage from "./pages/VideoGamePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/video" element={<Video />} />
                <Route path="/image" element={<ImageUploader />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/video-game" element={VideoGamePage} />
            </Routes>
        </Router>
    );
}

export default App;