import Editor from '@/components/Editor';
import Header from '@/components/layout/Header';
import Section from '@/components/layout/Section';
import StopWatch from '@/components/Stopwatch';
import Tabs from '@/components/Tabs';
import React from 'react';

const MainPage = () => {
    return (
        <div className=" min-h-screen bg-gray-1">
            <div className="sticky top-0">
                <Header />
                <StopWatch />
            </div>
            <Tabs />
        </div>
    );
};

export default MainPage;
