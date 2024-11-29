'use client';

import { useStopwatch } from '@/contexts/stopwatchContext';
import React from 'react';

const Stopwatch = () => {
    const { state, dispatch, formatStopwatch } = useStopwatch();
    const btnStyle = 'flex justify-center py-3 rounded-md w-72 bg-white active:bg-gray-300';

    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-7xl font-bold">{formatStopwatch(state.time)}</h1>
            <div className="flex flex-row gap-5">
                <button
                    onClick={() => {
                        state.isRunning ? dispatch({ type: 'STOP' }) : dispatch({ type: 'START' });
                    }}
                    className={btnStyle}
                >
                    {state.isRunning ? '공부 끝!' : '공부 시작!'}
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
