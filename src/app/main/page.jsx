import Editor from '@/components/Editor';
import Header from '@/components/layout/Header';
import Section from '@/components/layout/Section';
import StopWatch from '@/components/Stopwatch';
import Tabs from '@/components/Tabs';
import React from 'react';

const MainPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-1">
            <Header />
            <StopWatch />
            <Tabs />
        </div>
    );
};

export default MainPage;
