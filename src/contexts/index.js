import React from 'react';
import { StopwatchProvider } from './stopwatchContext';

const Provider = ({ children }) => {
    return <StopwatchProvider>{children}</StopwatchProvider>;
};

export default Provider;
