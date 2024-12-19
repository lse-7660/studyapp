// Editor.jsx

'use client';

import { useMissionContext } from '@/contexts/MissionContext';
import { ChevronLeft, PencilLine, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Editor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { state, dispatch } = useMissionContext();
    const { newMission = { title: '', details: '' } } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_NEW_MISSION', payload: { ...newMission, [name]: value } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_MISSION',
            payload: {
                id: uuidv4(),
                ...newMission,
                isDone: false,
            },
        });
        setIsModalOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        } else if (e.key === 'Escape') {
            setIsModalOpen(false);
        }
    };

    const handleBgClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {/* Editor Button */}
            <button
                onClick={() => {
                    setIsModalOpen(true);
                }}
                className="absolute bottom-5 right-5 w-[72px] h-[72px] center rounded-full border-btn glass__btn glass-gray-2 "
            >
                <p className="blind">미션 추가</p>
                <PencilLine size={32} />
            </button>

            {/* Editor */}
            {isModalOpen && (
                <div onClick={handleBgClick} className="fixed inset-0 z-30 flex items-center justify-center  glass__bg">
                    <div className="m-[20px] p-[20px] contents-gap max-w-[560px] h-2/3 max-h-[560px] rounded-[20px] bg-gray-10 text-white ">
                        <div className="flex justify-between items-center">
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-3 ">
                                <p className="blind">뒤로 가기</p>
                                <ChevronLeft size={30} />
                            </button>
                            <button
                                type="submit"
                                form="missionForm"
                                disabled={!newMission.title}
                                className={`${newMission.title ? 'text-gray-3' : 'text-gray-7'}`}
                            >
                                <p className="blind">미션 추가하기</p>
                                <Plus size={30} />
                            </button>
                        </div>
                        <form id="missionForm" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={newMission.title}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                className="w-full bg-transparent mb-4 font-display__sm focus:outline-none"
                                autoFocus
                                required
                            />
                            <textarea
                                name="details"
                                value={newMission.details}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                placeholder="어떤 것을 공부할까요?"
                                className="w-full  bg-transparent focus:outline-none"
                                rows={15}
                            ></textarea>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Editor;
