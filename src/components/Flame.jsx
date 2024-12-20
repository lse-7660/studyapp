// Flame.jsx

'use client';

import React from 'react';

const Flame = ({ flames, removeFlame }) => {
    const handleAnimationEnd = (id) => {
        removeFlame(id);
    };
    return (
        <div className="absolute z-50 h-screen max-w-[600px] mx-auto overflow-hidden inset-0 pointer-events-none">
            {flames.map((flame) => (
                <div
                    key={flame.id}
                    className="absolute  -bottom-20 text-6xl"
                    style={{
                        left: `${flame.left}%`,
                        animation: `flamesUp ${flame.duration}s ease-in forwards`,
                        pointerEvents: 'none',
                    }}
                    onAnimationEnd={() => handleAnimationEnd(flame.id)}
                >
                    🔥
                </div>
            ))}
        </div>
    );
};

export default Flame;
