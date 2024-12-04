import Header from '@/components/layout/Header';
import Section from '@/components/layout/Section';
import StopWatch from '@/components/Stopwatch';
import Tabs from '@/components/Tabs';
import React from 'react';

const MainPage = () => {
    return (
        <div className="relative min-h-screen flex flex-col gap-10 bg-gray-200">
            <Header />
            <StopWatch />
            <Tabs />
        </div>
    );
};

export default MainPage;
