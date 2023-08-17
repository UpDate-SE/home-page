import { useContext, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { BusinessCard, UserContextType } from '@types';
import { ICardtoFormData } from '@helpers/card-to-form-data';

import { CardForm } from 'components';
import { UserContext } from 'context';

import 'scss/css/style.css';

type CreateCardModalProps = {
    submit: (card: FormData) => Promise<void>;
    isOpen: boolean;
    toggle: () => void;
}

const CreateCardModal = ({submit, isOpen, toggle}: CreateCardModalProps) => {
    const { darkMode } = useContext(UserContext) as UserContextType;
    const [loading, setLoading] = useState<boolean>(false);

    const createCard = (newCard: BusinessCard) => {
        const asFormData = ICardtoFormData(newCard);
        setLoading(true)
        submit(asFormData)
            .then(() => setLoading(false));
    }

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            size='xl'
        >
            <ModalHeader
                className={darkMode ? 'bg-dark text-light border-primary-dark' : ''}
            >
                Create iCard
            </ModalHeader>
            <ModalBody
                className={darkMode ? 'bg-dark text-light' : ''}
            >
                <CardForm 
                    submitForm={createCard}
                    loading={loading}
                />
            </ModalBody>
        </Modal>
    )
}

export default CreateCardModal;