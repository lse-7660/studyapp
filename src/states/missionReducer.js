// missionReducer.js
export const initialState = {
    missions: [],
    newMission: { title: '', details: '' },
};

export const missionReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_MISSIONS':
            return { ...state, missions: action.payload };
        case 'ADD_MISSION':
            return {
                ...state,
                missions: [action.payload, ...state.missions],
                newMission: { title: '', details: '' },
            };
        case 'TOGGLE_MISSION':
            return {
                ...state,
                missions: state.missions.map((item) =>
                    item.id === action.payload ? { ...item, isDone: !item.isDone } : item
                ),
            };
        case 'DELETE_MISSION':
            return {
                ...state,
                missions: state.missions.filter((mission) => mission.id !== action.payload),
            };
        case 'SET_NEW_MISSION':
            return { ...state, newMission: action.payload };

        case 'EDIT_MISSION':
            return {
                ...state,
                missions: state.missions.map((item) =>
                    item.id === action.payload.id ? { ...item, ...action.payload.data } : item
                ),
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
