import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className="flex flex-col bg-white">
            <button>
                <p>{format(new Date(), 'yyyy.MM.dd')}</p>
                <p>오늘도 열심히 공부해봐요🔥</p>
            </button>
        </div>
    );
};

export default Header;
