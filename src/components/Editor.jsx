import { PencilLine } from 'lucide-react';
import React from 'react';

const Editor = () => {
    return (
        <button className="w-[72px] h-[72px] center rounded-full glass">
            <p className="blind">미션 추가</p>
            <PencilLine size={32} />
        </button>
    );
};

export default Editor;
