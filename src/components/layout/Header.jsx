'use client';

import { format } from 'date-fns';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Flame from '../Flame';

// Header.jsx

const Header = () => {
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
        <>
            <button className="relative z-10" onClick={handleFlameButton}>
                <div className="m-[20px] px-[20px] py-[25px] rounded-xl  bg-white">
                    <p className="mb-1 text-sm text-gray-500">{format(new Date(), 'yyyy.MM.dd')}</p>
                    <p className="text-lg font-medium">오늘도 열심히 공부해봐요🔥</p>
                </div>
            </button>
            <Flame flames={flames} removeFlame={removeFlame} />
        </>
    );
};

export default Header;
