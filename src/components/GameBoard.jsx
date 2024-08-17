import React, { useState, useEffect } from 'react';
import { getGameStatus } from '../api/videoGameApi.js';

const GameBoard = () => {
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        const fetchGameState = async () => {
            const state = await getGameStatus();
            setGameState(state);
        };

        fetchGameState();
    }, []);

    return (
        <div>
            {gameState?.board.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <span key={cellIndex}>{cell}</span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
