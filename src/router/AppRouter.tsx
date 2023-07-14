import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from 'context';
import { HomePage, LoginPage, CreateCardPage } from 'pages';

import { LoggedRouter, PrivateRouter } from './conditional';

export const AppRouter = () => (
    <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path='/' element={ <HomePage /> } />;
                <Route path='/create-card' element={ <PrivateRouter component={CreateCardPage}/> } />;
                <Route path='/login' element={ <LoggedRouter component={LoginPage} /> } />;
                <Route path='*' element={ <Navigate to='/' /> } />;
            </Routes>
        </UserContextProvider>
    </BrowserRouter>
)