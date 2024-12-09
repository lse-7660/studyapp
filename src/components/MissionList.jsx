import React from 'react';
import { Minus } from 'lucide-react';

// Mission List
const MissionList = ({ missions, title, onUpdate, onDelete, blank }) => {
    return (
        <div className="contents-wrap">
            <h3>{title}</h3>
            {missions.length === 0 ? (
                blank
            ) : (
                <ul className="divide-y">
                    {missions.map((item) => (
                        <li key={item.id} className="flex flex-row items-start gap-4">
                            <div className="flex flex-row gap-3 items-start ">
                                <input
                                    type="checkbox"
                                    checked={item.isDone}
                                    onChange={() => {
                                        onUpdate(item.id);
                                    }}
                                    className="shrink-0 mt-[1px] appearance-none w-5 h-5 rounded border border-gray-300 accent-gray-10 "
                                />
                                <div>
                                    <p className="line-clamp-1">{item.title}</p>
                                    <p className="line-clamp-2 font-label text-gray-7">{item.details}</p>
                                </div>
                            </div>
                            <button onClick={() => onDelete(item.id)}>
                                <p className="blind">삭제</p>
                                <Minus size={20} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MissionList;
