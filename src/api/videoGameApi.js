const API_URL = '/api/video-game';

export const startGame = async () => {
    const response = await fetch(`${API_URL}/start`, { method: 'POST' });
    return response.json();
};

export const addPlayer = async (playerId) => {
    const response = await fetch(`${API_URL}/add-player`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId })
    });
    return response.json();
};

export const movePlayer = async (playerId, direction) => {
    const response = await fetch(`${API_URL}/move`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId, direction })
    });
    return response.json();
};

export const getGameStatus = async () => {
    const response = await fetch(`${API_URL}/status`);
    return response.json();
};
