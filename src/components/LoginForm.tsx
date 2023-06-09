import { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, FormFeedback, FormGroup, Input, Label, Spinner } from 'reactstrap';

import { LoginCredentials, UserContextType } from '@types';
import { UserContext } from 'context';

import 'scss/css/style.css';
import 'styles/LoginForm.css';

type LoginFormProps = {
    login: (credentials: LoginCredentials) => void;
    loading: boolean;
    formErrors: boolean;
}

const LoginForm = ({login, loading, formErrors}: LoginFormProps): JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    
    const [username, setUsername] = useState<string>('');
    const [usernameValid, setUsernameValid] = useState<boolean>(true);
    
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(true);

    useEffect(() => {
        if(formErrors) {
            setUsernameValid(false);
            setPasswordValid(false);
        }
    }, [formErrors]);

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const credentials: LoginCredentials = {
            username: username,
            password: password
        }
        login(credentials);
    }

    const onUsernameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value.trim();
        setUsername(value);
        setUsernameValid(value.length > 0);
    }

    const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value;
        setPassword(value);
        setPasswordValid(value.length > 0);
    }

    return (
        <div id='form-container'>
            <Container
                id='form'
                className={`
                    ${darkMode ? 'border-primary-dark' : 'border-primary'}
                    border border-2 rounded 
                    pb-3
                `}
            >
                <div
                    className={`
                        ${darkMode ? 'text-primary-dark' : 'text-primary'}
                        fs-1 fw-bold text-center
                    `}
                >
                    {currentLang.language === 'ESP' ? 'Ingresar' : 'Login'}
                </div>
                <Form onSubmit={onSubmit}
                    className='mt-3'
                >
                    <FormGroup floating>
                        <Input
                            id='user'
                            type='text'
                            className={`
                                ${darkMode ? 'bg-dark text-light' : ''}
                            `}
                            placeholder={currentLang.language === 'ESP' ? 'Usuario' : 'Username'}
                            value={username}
                            invalid={!usernameValid}
                            onChange={onUsernameChange}
                        />
                        <Label
                            for='user'
                            className={`
                                ${darkMode ? 'text-light' : ''}
                            `}
                        >
                            {currentLang.language === 'ESP' ? 'Usuario' : 'Username'}
                        </Label>
                        {
                            formErrors ?
                            ''
                            :
                            <FormFeedback>
                                {currentLang.language === 'ESP' ? 'Ingrese un valor' : 'Enter a value'}
                            </FormFeedback>
                        }
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            id='password'
                            type='password'
                            className={`
                                ${darkMode ? 'bg-dark text-light' : ''}
                            `}
                            placeholder={currentLang.language === 'ESP' ? 'Contraseña' : 'Password'}
                            value={password}
                            invalid={!passwordValid}
                            onChange={onPasswordChange}
                        />
                        {
                            formErrors ?
                            ''
                            :
                            <FormFeedback>
                                {currentLang.language === 'ESP' ? 'Ingrese un valor' : 'Enter a value'}
                            </FormFeedback>
                        }
                        <Label
                            for='password'
                            className={`
                                ${darkMode ? 'text-light' : ''}
                            `}
                        >
                            {currentLang.language === 'ESP' ? 'Contraseña' : 'Password'}
                        </Label>
                    </FormGroup>
                    {
                        formErrors ?
                        <span
                            className='text-danger'
                        >
                            {currentLang.language === 'ESP' ? 
                                'Usuario o contraseña son incorrectos'
                                :
                                'Username or password are incorrect'
                            }
                        </span>
                        :
                        ''
                    }
                    <Button
                        className='w-100'
                        color='primary'
                        disabled={username.length === 0 || password.length === 0}
                    >
                        {
                            loading ?
                            <Spinner />
                            :
                            `${currentLang.language === 'ESP' ? 'Ingresar' : 'Login'}`
                        }
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm;