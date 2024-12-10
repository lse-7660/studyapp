'use client';

import React from 'react';

// Flame.jsx

const Flame = ({ flames, removeFlame }) => {
    const handleAnimationEnd = (id) => {
        removeFlame(id);
    };
    return (
        <div className={`absolute h-screen inset-0 ${flames.length > 0 ? 'block' : 'hidden'}`}>
            {flames.map((flame) => (
                <div
                    key={flame.id}
                    className="absolute z-20 -bottom-20 text-6xl"
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
