import { useEffect, useState } from 'react';
import { Container, Modal, ModalBody, ModalHeader, Spinner } from 'reactstrap';

import { BusinesCardInDB, BusinessCard, WithId } from '@types';

import { CreateCardForm } from 'components';

import 'scss/css/style.css';

type EditCardModalProps = {
    card: BusinesCardInDB | null;
    submit: (card: WithId<BusinessCard>) => void;
    isOpen: boolean;
    toggle: () => void;
}

const EditCardModal = ({card, submit, isOpen, toggle}: EditCardModalProps) => {
    const [cardInForm, setCardInForm] = useState<WithId<BusinessCard> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log(cardInForm, card);
        if(!cardInForm && card) {
            cardDBtoCardForm(card)
                .then(cardForm => {
                    setCardInForm(cardForm);
                    setLoading(false);
                })
        }
    }, [])

    const createcard = () => {}

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            className='container-fluid'
        >
            <ModalHeader>
                Edit
            </ModalHeader>
            <ModalBody>
                <CreateCardForm createCard={createcard} loading={loading}/>
            </ModalBody>
        </Modal>
    )
}

const cardDBtoCardForm = async (card: BusinesCardInDB): Promise<WithId<BusinessCard>> => {
    const res = await fetch(card.photo)
    const blob = await res.blob();
    const file = new File([blob], 'photo_og', {type: 'image/jpeg'});

    const cardForm = {...card, 'photo': file}

    return cardForm;
}

export default EditCardModal;