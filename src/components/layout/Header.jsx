import { format } from 'date-fns';
import React from 'react';
import Section from './Section';

const Header = () => {
    return (
        <Section>
            <p>{format(new Date(), 'yyyy.MM.dd')}</p>
            <p>오늘도 열심히 공부해봐요🔥</p>
        </Section>
    );
};

export default Header;
