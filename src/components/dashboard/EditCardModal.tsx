import { useContext, useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader, Spinner } from 'reactstrap';

import { ICardtoFormData } from '@helpers/card-to-form-data';
import { BusinesCardInDB, BusinessCard, UserContextType, WithId } from '@types';

import { CardForm } from 'components';
import { UserContext } from 'context';

import 'scss/css/style.css';

type EditCardModalProps = {
    card: BusinesCardInDB | null;
    submit: (cardFormData: FormData) => Promise<void>;
    isOpen: boolean;
    onClose: () => void;
    toggle: () => void;
}

const EditCardModal = ({card, submit, isOpen, onClose, toggle}: EditCardModalProps) => {
    const { darkMode } = useContext(UserContext) as UserContextType;
    const [cardInForm, setCardInForm] = useState<WithId<BusinessCard> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(!cardInForm && card) {
            cardDBtoCardForm(card)
                .then(cardForm => {
                    setCardInForm(cardForm);
                    setLoading(false);
                })
        }
    }, [card, loading])

    const modalClosed = () => {
        setCardInForm(null);
        setLoading(true);
        onClose();
    }

    const editCard = (newCard: BusinessCard) => {
        setLoading(true)
        const asFormData = ICardtoFormData(newCard);
        submit(asFormData).then(() => setLoading(false));
    }

    if(loading || !cardInForm) {
        return (
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                size='xl'
            >
                <ModalBody
                    className={`
                        ${darkMode ? 'bg-dark-dark' : ''}
                        d-flex justify-content-center align-items-center
                    `}
                    style={{
                        height: '50vh'
                    }}
                >
                    <Spinner
                        style={{
                            height: '200px',
                            width: '200px'
                        }}
                    />
                </ModalBody>
            </Modal>
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            size='xl'
            onClosed={modalClosed}
        >
            <ModalHeader
                className={darkMode ? 'bg-dark text-light border-primary-dark' : ''}
            >
                Edit iCard
            </ModalHeader>
            <ModalBody
                className={darkMode ? 'bg-dark text-light' : ''}
            >
                <CardForm 
                    submitForm={editCard}
                    initialData={cardInForm}
                    loading={loading}
                />
            </ModalBody>
        </Modal>
    )
}

const cardDBtoCardForm = async (card: BusinesCardInDB): Promise<WithId<BusinessCard>> => {
    const photoLink = card.photo
    const res = await fetch(photoLink)
    const blob = await res.blob();
    const file = new File([blob], 'photo_og', {type: 'image/jpeg'});

    const cardForm = {...card, photo: file, photoLink: photoLink}

    return cardForm;
}

export default EditCardModal;