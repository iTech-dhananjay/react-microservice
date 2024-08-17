import React from 'react';
import GameBoard from '../components/GameBoard.jsx';
import PlayerControls from '../components/PlayerControls.jsx';

const VideoGamePage = () => (
    <div>
        <h1>Video Game</h1>
        <GameBoard />
        <PlayerControls playerId="player1" />
    </div>
);

export default VideoGamePage;
