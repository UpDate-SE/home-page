import { useContext, useState } from 'react';
import { Container } from 'reactstrap';

import { BusinessCard, UserContextType } from '@types';
import { UserContext } from 'context';
import { CreateCardForm, NavbarDefault } from 'components';

import 'scss/css/style.css';
import 'styles/CreateCardPage.css';

const CreateCardPage = (): JSX.Element => {
    const { createBusinessCard, darkMode } = useContext(UserContext) as UserContextType;
    const [loading, setLoading] = useState<boolean>(false);

    const bCardtoFormData = (card: BusinessCard): FormData => {
        const formData = new FormData();
        const {socials, ...cardStripped} = card;

        for(const key in cardStripped) {
            const cRecord = cardStripped as Record<string,any>;
            formData.append(key, cRecord[key]);
        }

        for(const social of socials) {
            formData.append('socials', social);
        }

        console.log('form: ', formData);

        return formData;
    }

    const onCreateCard = async (card: BusinessCard) => {
        setLoading(true);
        const formData = bCardtoFormData(card);
        const res = await createBusinessCard(formData);
        console.log(res);
        setLoading(false);
    }

    return (
        <Container
            fluid
            id='register-card-page'
            className={`${darkMode ? 'bg-dark-dark':''}`}
        >
            <NavbarDefault />
            <CreateCardForm 
                createCard={onCreateCard}
                loading={loading}
            />
        </Container>
    );
}

export default CreateCardPage;