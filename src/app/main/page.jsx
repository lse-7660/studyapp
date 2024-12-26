// Mainpage.jsx
'use client';

import Flame from '@/components/Flame';
import Header from '@/components/layout/Header';
import StopWatch from '@/components/Stopwatch';
import Tabs from '@/components/Tabs';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MainPage = () => {
    const [flames, setFlames] = useState([]);

    const handleFlameButton = () => {
        const newFlames = Array.from({ length: Math.floor(Math.random() * 12) + 10 }, () => ({
            id: uuidv4(),
            left: Math.random() * 120 - 20,
            duration: Math.random() * 1.5 + 1,
        }));

        setFlames((prevFlames) => [...prevFlames, ...newFlames]);
    };

    const removeFlame = (id) => {
        setFlames((prevFlames) => prevFlames.filter((flame) => flame.id !== id));
    };

    return (
        <div className="min-h-screen">
            <div className="relative max-w-[600px] m-auto  bg-gray-1">
                <div className=" sticky top-0  ">
                    <Header handleFlameButton={handleFlameButton} />
                    <StopWatch />
                </div>

                <Tabs />
            </div>
            <Flame flames={flames} removeFlame={removeFlame} />
        </div>
    );
};

export default MainPage;
