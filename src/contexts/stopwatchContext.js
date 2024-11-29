'use client';
import { formatStopwatch, initialState, timerReducer } from '@/states/stopwatchReducer';

const { createContext, useReducer, useEffect, useContext } = require('react');

const StopwatchContext = createContext();

export const StopwatchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(timerReducer, initialState);

    useEffect(() => {
        const myStopwatch = state.isRunning ? setInterval(() => dispatch({ type: 'TICK' }), 1000) : null;

        return () => clearInterval(myStopwatch);
    }, [state.isRunning]);

    return (
        <StopwatchContext.Provider value={{ state, dispatch, formatStopwatch }}>{children}</StopwatchContext.Provider>
    );
};

export const useStopwatch = () => {
    const context = useContext(StopwatchContext);
    return context;
};
