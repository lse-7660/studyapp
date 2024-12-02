import React from 'react';
import { Minus } from 'lucide-react';

const MissionList = ({ missions, title, onUpdate, onDelete, blank }) => {
    return (
        <div>
            <p className="pb-3">{title}</p>
            {missions.length === 0 ? (
                blank
            ) : (
                <ul className="divide-y">
                    {missions.map((item) => (
                        <li key={item.id} className="flex flex-row justify-between py-3">
                            <div>
                                <input
                                    type="checkbox"
                                    checked={item.isDone}
                                    onChange={() => {
                                        onUpdate(item.id);
                                    }}
                                    className="mr-4 appearance-none w-5 h-5 rounded border border-gray-300 focus:bg-gray-500 "
                                />
                                <span>{item.task}</span>
                            </div>
                            <button onClick={() => onDelete(item.id)}>
                                <p className="blind">삭제</p>
                                <Minus />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MissionList;
