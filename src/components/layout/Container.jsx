import React from 'react';

export const Container = ({ title, children }) => {
    return (
        <div className="contents-wrap">
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export const ContainerCenter = ({ title, children }) => {
    return (
        <div className="contents-wrap">
            <h3 className="text-center">{title}</h3>
            {children}
        </div>
    );
};
