import React from 'react';

export const Section = ({ children }) => {
    return <section className="flex flex-col gap-[50px] px-[20px] py-[30px] rounded-t-xl bg-white">{children}</section>;
};
export const Section2 = ({ children }) => {
    return (
        <section className="flex flex-col gap-[50px] px-[20px] py-[30px] rounded-t-xl bg-gray-1">{children}</section>
    );
};

export default Section;
