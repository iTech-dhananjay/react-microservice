import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import "./styles/index.css";
import "./styles/auth.css"; // Include auth styles

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppRoutes />
            </Router>
        </Provider>
    );
};

export default App;







// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import PaymentSuccess from "./payment-success";
// import Video from './videos-stream'
// import ImageUploader from "./image-chunks";
// import ChatPage from "./chatPage";
// import {useEffect} from "react";
// import {getToken} from 'firebase/messaging'
// import {messaging} from "./firebase";
//
// function App() {
//
//     async function requestPermissions() {
//         const permission = await Notification.requestPermission();
//
//         if (permission === "granted") {
//             //Generate Token
//             const token = await  getToken(messaging, {vapidKey:'BHLR0Fbm738oTVvfyhu6dQ_BEUqKq8KgQyIqg3bCtNr1Hmnw23fYO0k02y_qZeHGbV4BX8UUVToxKE2Vqjokt-k'})
//             console.log('Token: ', token)
//         }else if (permission === "denied") {
//             alert('Permission denied for notification');
//         }
//     }
//     //Req user for notification permission
//     useEffect(() => {
//         requestPermissions();
//
//     }, []);
//
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/paymentsuccess" element={<PaymentSuccess />} />
//                 <Route path="/video" element={<Video />} />
//                 <Route path="/image" element={<ImageUploader />} />
//                 <Route path="/chat" element={<ChatPage />} />
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;