import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'reactstrap';

import { LoginCredentials, UserContextType } from '@types';
import { LoginForm, NavbarDefault } from 'components';
import { UserContext } from 'context';

import 'scss/css/style.css';
import 'styles/login.css';

const LoginPage = () => {
    const { darkMode, login } = useContext(UserContext) as UserContextType;
    const [loading, setLoading] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<boolean>(false);
    const navigate = useNavigate();

    const onLogin = async (credentials: LoginCredentials) => {
        setFormErrors(false);
        setLoading(true);
        const res = await login(credentials);
        if(res) navigate('/');
        setFormErrors(!res);
        setLoading(false);
    }
    
    return (
        <Container
            id='login-page'
            className={`
                ${darkMode ? 'bg-dark' : 'bg-light'}
            `}
            fluid
        >
            <NavbarDefault />
            <LoginForm 
                login={onLogin}
                loading={loading}
                formErrors={formErrors}
            />
        </Container>
    )    
}

export default LoginPage;