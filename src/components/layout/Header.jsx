// Header.jsx

'use client';

import { format } from 'date-fns';
import React from 'react';

const Header = ({ handleFlameButton }) => {
    return (
        <div className="pt-[30px]">
            <div className=" flex flex-row inner justify-between items-center ">
                <div className="pl-[20px]">
                    <p className="mb-1 text-sm text-gray-7">{format(new Date(), 'yyyy.MM.dd')}</p>
                    <p className=" font-bold">오늘도 열심히 공부해봐요</p>
                </div>
                <div className="pr-[20px]">
                    <button
                        onClick={handleFlameButton}
                        className="relative z-10 w-[80px] h-[80px] text-4xl rounded-full bg-white border-btn"
                    >
                        🔥
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
