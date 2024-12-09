'use client';

import { ChevronLeft, PencilLine, Plus } from 'lucide-react';
import React, { useState } from 'react';

const Editor = ({ newMission, setNewMission, addMission }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMission((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMission();
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
                className={`w-[72px] h-[72px] center rounded-full glass__btn bg-gray-2 btn-animation ${
                    isModalOpen ? 'open' : ''
                }`}
            >
                <p className="blind">미션 추가</p>
                <PencilLine size={32} />
            </button>

            {/* Editor */}
            {isModalOpen && (
                <div onClick={handleBgClick} className="fixed inset-0 z-30 flex items-center justify-center glass__bg">
                    <div className="m-[20px] p-[20px] contents-gap h-2/3 rounded-[20px] bg-gray-10 text-white ">
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
                                placeholder="어떤 것을 공부하나요?"
                                className="w-full bg-transparent focus:outline-none"
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
