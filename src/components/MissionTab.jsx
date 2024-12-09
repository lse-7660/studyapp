'use client';

import React from 'react';
import MissionList from './MissionList';

// MissionTab.jsx

const MissionTab = ({ missions, onUpdate, onDelete }) => {
    return (
        <div className="contents-gap">
            <div className="contents-gap">
                <MissionList
                    title="오늘의 미션"
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    missions={missions.filter((mission) => mission.isDone === false)}
                    blank={
                        <div className="flex items-center justify-center h-[50px] rounded-md bg-gray-100 ">
                            <p className="text-center text-gray-400">새로운 미션을 추가해 주세요</p>
                        </div>
                    }
                />
                <MissionList
                    title="완료"
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    missions={missions.filter((mission) => mission.isDone === true)}
                />
            </div>
        </div>
    );
};

export default MissionTab;
