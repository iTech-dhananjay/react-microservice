import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <div className="HomePage">
        <h2 style={{textAlign: "center"}}>Home</h2>
        </div>
    )
}

export default HomePage;