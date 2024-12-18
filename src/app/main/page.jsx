import Header from '@/components/layout/Header';
import StopWatch from '@/components/Stopwatch';
import Tabs from '@/components/Tabs';
import React from 'react';

const MainPage = () => {
    return (
        <div className=" min-h-screen  ">
            <div className="max-w-[390px] m-auto  bg-gray-1">
                <div className=" sticky top-0  ">
                    <Header />
                    <StopWatch />
                </div>
                <Tabs />
            </div>
        </div>
    );
};

export default MainPage;
