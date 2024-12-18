'use client';

import React from 'react';

// Flame.jsx

const Flame = ({ flames, removeFlame }) => {
    const handleAnimationEnd = (id) => {
        removeFlame(id);
    };
    return (
        <div
            className={`absolute z-50 h-screen max-w-[390px] overflow-hidden inset-0 ${
                flames.length > 0 ? 'block' : 'hidden'
            }`}
        >
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
