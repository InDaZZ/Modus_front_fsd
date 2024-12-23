import './Modal.scss';
import React, { useContext } from 'react';
import { useModals } from '../hooks/useModals';
import { ModalContext } from '../context/context';
import { useAction } from '../hooks/useActions';

function Modal() {
    const { modalsState } = useAction();

    const modalContext = useContext(ModalContext);

    const closeModalSpaceClick = () => {
        console.log('111');
        const target = event.target as HTMLInputElement;
        target.className === 'modal modal_active' && closeModal();
        return;
    };

    const closeModal = () => {
        modalsState({
            modalMainState: false,
        });
        modalContext!.setModal(null);
    };

    return (
        <div
            className={`modal ${useModals().modalMainState ? 'modal_active' : ''}`}
            onClick={closeModalSpaceClick}
        >
            <div className="modal__container">
                <button type="button" className="modal__button-close" onClick={closeModal}></button>
                {modalContext?.modal}
            </div>
        </div>
    );
}
export default Modal;
