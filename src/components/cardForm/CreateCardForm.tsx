import { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'reactstrap';

import { BCardKeys, BusinessCard, UserContextType, ValidatorDict } from '@types';
import { UserContext } from 'context';

import { DescriptionFormGroup, ImageInput, RowTextFormGroup, SocialsInput } from 'components';

import 'scss/css/style.css';
import 'styles/CreateCardForm.css';

const initialFormData: BusinessCard = {
    companyName: '',
    name: '',
    position: '',
    description: '',
    photo: null,
    email: '',
    socials: []
}

const InitialFormValidationDict: ValidatorDict<BusinessCard> = {
    companyName: false,
    name: false,
    position: false,
    description: false,
    photo: false,
    email: false,
    socials: false 
}

type CreateCardFormProps = {
    createCard: (cardData: BusinessCard) => void;
    loading: boolean;
}

const CreateCardForm = ({createCard, loading }: CreateCardFormProps):JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [formData, setFormData] = useState<BusinessCard>(initialFormData);
    const [validationDict, setValidationDict] = useState<ValidatorDict<BusinessCard>>(InitialFormValidationDict);
    const [validForm, setValidForm] = useState<boolean>(false);

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        createCard(formData);
    }

    const sumObjectValues = (obj: object): number => (Object.values(obj).reduce((sum, value) => sum + value, 0));

    const setValidInput = (name: BCardKeys, valid: boolean) => {
        const newValidationDict = {...validationDict, [name]: valid}; 
        setValidationDict(newValidationDict);
        setValidForm(sumObjectValues(newValidationDict) === 7);
    };

    const handleFormDataChange = (name: BCardKeys, value: string | File | string[]) => {
        setValidationDict({...validationDict, [name]: true});
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    return (
        <div id='card-form-container'>
            <Container
                fluid
                id='card-form'
                className={`
                    ${darkMode ? 'border-primary-dark' : 'border-primary'}
                    border border-2 rounded 
                    pb-3
                `}
            >
                <div
                    className={`
                        ${darkMode ? 'text-primary-dark' : 'text-primary'}
                        fs-1 fw-bold text-center mb-3
                    `}
                >
                    {currentLang.language === 'ESP' ? 'Crear Tarjeta' : 'Create Card'}
                </div>
                <Form onSubmit={onSubmit}>
                    <Container fluid className='p-0'>
                        <Row className='p-0'>
                            <Col md={7}>
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Empresa' : 'Company'}: `}
                                    name='companyName'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Nombre' : 'Name'}: `}
                                    name='name'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Cargo' : 'Position'}: `}
                                    name='position'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <RowTextFormGroup
                                    label='Email: '
                                    name='email'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                    type='email'
                                />
                                <SocialsInput
                                    name='socials'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                            </Col>
                            <Col md={5}>
                                <ImageInput
                                    name='photo'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <DescriptionFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Descripción de la empresa' : 'Description of the company'}: `}
                                    name='description'
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                            </Col>
                        </Row>
                        <Button
                            color={`${darkMode ? 'primary-dark' : 'primary'}`}
                            disabled={!validForm}
                            className='w-100'
                        >
                            {loading ?
                                <Spinner />
                                :
                                `${currentLang.language === 'ESP' ? 'Crear Tarjeta' : 'Create Card'}`
                            }
                        </Button>
                    </Container>
                </Form>   
            </Container>
        </div>
    )
}

export default CreateCardForm;