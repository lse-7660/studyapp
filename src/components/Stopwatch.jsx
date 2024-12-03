'use client';

import { useStopwatch } from '@/contexts/stopwatchContext';
import React from 'react';

// Stopwatch.jsx

const Stopwatch = () => {
    const { state, dispatch, formatStopwatch, handleStopSave } = useStopwatch();
    const handleStop = () => {
        if (state.isRunning) {
            dispatch({ type: 'STOP' });
            handleStopSave(state.time);
            dispatch({ type: 'RESET' });
        } else {
            dispatch({ type: 'START' });
        }
    };

    const btnStyle = 'flex justify-center py-3 rounded-lg w-[270px] bg-white active:bg-gray-300';

    return (
        <div className="flex flex-col gap-5 items-center my-5">
            <h2 className="number-style text-6xl">{formatStopwatch(state.time)}</h2>
            <div className="flex flex-row gap-5">
                <button onClick={handleStop} className={btnStyle}>
                    {state.isRunning ? '공부 끝!' : '공부 시작!'}
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
