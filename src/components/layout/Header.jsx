import { format } from 'date-fns';
import React from 'react';
import Section from './Section';

const Header = () => {
    return (
        <div className="m-[20px] px-[20px] py-[25px] rounded-xl  bg-white">
            <p className="mb-1 text-sm text-gray-500">{format(new Date(), 'yyyy.MM.dd')}</p>
            <p className="text-lg font-medium">오늘도 열심히 공부해봐요🔥</p>
        </div>
    );
};

export default Header;
