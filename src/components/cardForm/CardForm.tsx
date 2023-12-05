import { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'reactstrap';

import { BCardKeys, BusinessCard, SocialMedia, UserContextType, ValidatorDict, WithId } from '@types';
import { UserContext } from 'context';

import { DescriptionFormGroup, ImageInput, RowTextFormGroup, SocialsInput } from 'components';

import { initialFormData } from '@helpers/initial-card';

import 'scss/css/style.css';
import 'styles/cardForm.css';

const FormValidationDictNew: ValidatorDict<BusinessCard> = {
    companyName: false,
    name: false,
    position: false,
    description: false,
    photo: false,
    email: false,
    website: true,
    socials: true
}

const FormValidationDictEdit: ValidatorDict<BusinessCard> = {
    companyName: true,
    name: true,
    position: true,
    description: true,
    photo: true,
    website: true,
    email: true,
    socials: true
}


type CardFormProps = {
    submitForm: (card: BusinessCard | WithId<BusinessCard>) => void;
    loading: boolean;
    initialData?: WithId<BusinessCard>;
    className?: string;
    style?: Object;
}

const CardForm = ({submitForm, loading, initialData, className, style }: CardFormProps):JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [formData, setFormData] = useState<BusinessCard>(initialData ?? initialFormData);
    const [validationDict, setValidationDict] = useState<ValidatorDict<BusinessCard>>(initialData ? FormValidationDictEdit : FormValidationDictNew);
    const [validForm, setValidForm] = useState<boolean>(false);

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        submitForm(formData);
    }

    const sumObjectValues = (obj: object): number => (Object.values(obj).reduce((sum, value) => sum + value, 0));

    const setValidInput = (name: BCardKeys, valid: boolean) => {
        const newValidationDict = {...validationDict, [name]: valid}; 
        setValidationDict(newValidationDict);
        setValidForm(sumObjectValues(newValidationDict) === 8);
    };

    const handleFormDataChange = (name: BCardKeys, value: string | File | SocialMedia) => {
        setValidationDict({...validationDict, [name]: true});
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    return (
        <div id='card-form-container'
            className={className}
            style={style}
        >
            <Container
                fluid
                id='card-form'
                className={`
                    ${darkMode ? 'border-primary-dark' : 'border-primary'}
                    border border-2 rounded 
                    py-3
                `}
            >
                <Form onSubmit={onSubmit}>
                    <Container fluid className='p-0'>
                        <Row className='p-0'>
                            <Col md={7}>
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Empresa' : 'Company'}: `}
                                    name='companyName'
                                    initialValue={formData.companyName}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Nombre' : 'Name'}: `}
                                    name='name'
                                    initialValue={formData.name}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Cargo' : 'Position'}: `}
                                    name='position'
                                    initialValue={formData.position}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <RowTextFormGroup
                                    label='Email: '
                                    name='email'
                                    initialValue={formData.email}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                    type='email'
                                />
                                <RowTextFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Sitio Web' : 'Website'}: `}
                                    name='website'
                                    initialValue={formData.website}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                    type="url"
                                />
                                <SocialsInput
                                    name='socials'
                                    initialValue={formData.socials}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                            </Col>
                            <Col md={5}>
                                <ImageInput
                                    name='photo'
                                    initialValue={formData.photo ? URL.createObjectURL(formData.photo) : null}
                                    valueChange={handleFormDataChange}
                                    setValidInput={setValidInput}
                                />
                                <DescriptionFormGroup
                                    label={`${currentLang.language === 'ESP' ? 'Descripción de la empresa' : 'Description of the company'}: `}
                                    name='description'
                                    initialValue={formData.description}
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
                                `${initialData ? 'Edit Card' : 'Create Card'}`
                            }
                        </Button>
                    </Container>
                </Form>   
            </Container>
        </div>
    )
}

export default CardForm;