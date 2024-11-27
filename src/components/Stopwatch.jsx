'use client';

import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const myStopwatch = isRunning
            ? setInterval(
                  () => setTime((prev) => prev + 1),
                  1000
              )
            : null;

        return () => clearInterval(myStopwatch);
    }, [isRunning]);

    const formatStopwatch = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m
            .toString()
            .padStart(2, '0')}:${s
            .toString()
            .padStart(2, '0')}`;
    };

    const btnStyle =
        'flex grow justify-center bg-white py-2 rounded-md';

    return (
        <div className="flex flex-col ">
            <h1 className="text-7xl font-bold">
                {formatStopwatch(time)}
            </h1>
            <div className="flex flex-row gap-5">
                <button
                    onClick={() => {
                        setIsRunning(!isRunning);
                    }}
                    className={btnStyle}
                >
                    {isRunning ? '공부 끝!' : '공부 시작!'}
                </button>
                <button className={btnStyle}>
                    시간 기록
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
