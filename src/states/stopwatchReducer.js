export const initialState = {
    time: 0,
    isRunning: false,
};

export const START = 'START';
export const STOP = 'STOP';
export const TICK = 'TICK';
export const RESET = 'RESET';

export const timerReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return { ...state, isRunning: true };
        case 'STOP':
            return { ...state, isRunning: false };
        case 'TICK':
            return { ...state, time: state.time + 1 };
        case 'RESET':
            return { time: 0, isRunning: false };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const formatStopwatch = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};
