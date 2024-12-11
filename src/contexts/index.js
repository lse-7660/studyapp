import React from 'react';
import { StopwatchProvider } from './stopwatchContext';
import { MissionProvider } from './MissionContext';

const Provider = ({ children }) => {
    return (
        <MissionProvider>
            <StopwatchProvider>{children}</StopwatchProvider>
        </MissionProvider>
    );
};

export default Provider;
