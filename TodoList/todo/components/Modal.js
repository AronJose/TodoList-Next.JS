import React, { useState } from 'react';
import Modal from 'react-modal';
import { PencilIcon} from '@heroicons/react/solid';



function MyModal({ openModal, setEdited }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                className="font-bold py-2 px-4 rounded"
                onClick={() => {
                    setIsOpen(true);
                }}><PencilIcon className="w-6 h-6 text-blue-500" /></button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)} >
                {openModal()}
                    <button  onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex absolute items-end justify-end top-1 right-1 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg></button>
                
            </Modal>
        </div>
    );
}

export default MyModal;
