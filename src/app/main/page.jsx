import Header from '@/components/layout/Header';
import Section from '@/components/layout/Section';
import StopWatch from '@/components/Stopwatch';
import Tabs from '@/components/Tabs';
import React from 'react';

const MainPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 px-5 py-5 bg-gray-200">
            <Header />
            <StopWatch />
            <Tabs />
        </div>
    );
};

export default MainPage;
