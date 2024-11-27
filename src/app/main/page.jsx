import Header from '@/components/Header';
import StopWatch from '@/components/Stopwatch';
import React from 'react';

const MainPage = () => {
    return (
        <div className="flex flex-col gap-10 px-20 py-20 bg-gray-100">
            <Header />
            <StopWatch />
        </div>
    );
};

export default MainPage;
