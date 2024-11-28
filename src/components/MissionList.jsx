import React from 'react';

const MissionList = ({ missions, title, onUpdate }) => {
    return (
        <div>
            <p className="pb-3">{title}</p>
            <ul className="divide-y">
                {missions.map((item) => (
                    <li key={item.id} className="py-3">
                        <input
                            type="checkbox"
                            checked={item.isDone}
                            onChange={() => {
                                onUpdate(item.id);
                            }}
                            className="mr-4 appearance-none w-5 h-5 rounded border border-gray-300 focus:bg-gray-500 "
                        />
                        <span>{item.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionList;
