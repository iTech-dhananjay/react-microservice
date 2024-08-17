import React from 'react';
import { movePlayer } from '../api/videoGameApi.js';

const PlayerControls = ({ playerId }) => {
    const handleMove = async (direction) => {
        await movePlayer(playerId, direction);
    };

    return (
        <div>
            <button onClick={() => handleMove('up')}>Up</button>
            <button onClick={() => handleMove('down')}>Down</button>
            <button onClick={() => handleMove('left')}>Left</button>
            <button onClick={() => handleMove('right')}>Right</button>
        </div>
    );
};

export default PlayerControls;
