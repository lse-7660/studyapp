import { useMissionContext } from '@/contexts/MissionContext';

const { Save, Plus, ChevronLeft, PencilLine } = require('lucide-react');

const Editor = ({ isModalOpen, setIsModalOpen, selectedMission, setSelectedMission }) => {
    const { state, dispatch } = useMissionContext();
    const { newMission = { title: '', details: '' } } = state;

    const currentMission = selectedMission || newMission;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedMission((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedMission) {
            dispatch({ type: 'EDIT_MISSION', payload: selectedMission });
        } else {
            dispatch({
                type: 'ADD_MISSION',
                payload: {
                    id: uuidv4(),
                    ...newMission,
                    isDone: false,
                },
            });
        }
        setIsModalOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsModalOpen(false);
        }
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (currentMission.title) {
                handleSubmit(e);
            }
        }
    };

    const handleBgClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={() => {
                    setSelectedMission(null);
                    setIsModalOpen(true);
                }}
                className="absolute bottom-5 right-5 w-[80px] h-[80px] center rounded-full border-btn glass__btn glass-gray-2 "
            >
                <p className="blind">미션 추가</p>
                <PencilLine size={36} />
            </button>

            {isModalOpen && (
                <div onClick={handleBgClick} className="fixed inset-0 z-30 flex items-center justify-center glass__bg">
                    <div className="m-[20px] p-[20px] contents-gap max-w-[560px] h-2/3 max-h-[560px] rounded-[20px] bg-gray-10 text-white">
                        <div className="flex justify-between items-center">
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-3">
                                <ChevronLeft size={30} />
                            </button>
                            <button
                                type="submit"
                                form="missionForm"
                                disabled={!currentMission.title}
                                className={`${currentMission.title ? 'text-gray-3' : 'text-gray-7'}`}
                            >
                                {currentMission === newMission ? <Plus size={30} /> : <Save size={30} />}
                            </button>
                        </div>
                        <form id="missionForm" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                            <input
                                type="text"
                                name="title"
                                value={currentMission.title}
                                onChange={handleChange}
                                className="w-full bg-transparent mb-4 font-display__sm focus:outline-none"
                                autoFocus
                                required
                            />
                            <textarea
                                name="details"
                                value={currentMission.details}
                                onChange={handleChange}
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
