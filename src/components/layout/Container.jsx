import React from 'react';

const Container = ({ title, children }) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
};

export default Container;
