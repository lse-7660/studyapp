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

    const btnStyle =
        'flex justify-center items-center rounded-lg w-[240px] h-[60px] text-[20px] font-medium text-white bg-gray-10 active:bg-black';

    return (
        <div className="flex flex-col gap-[20px] items-center my-[90px]">
            <h2 className="number-style font-display__lg">{formatStopwatch(state.time)}</h2>
            <div className="flex flex-row gap-5">
                <button onClick={handleStop} className={btnStyle}>
                    {state.isRunning ? '공부 끝!' : '공부 시작!'}
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
