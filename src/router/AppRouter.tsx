import { UserContextProvider } from 'context';
import { HomePage, LoginPage, RegisterCardPage } from 'pages';
import React from 'react';
import { Routes, Route, Navigate, useLocation, BrowserRouter } from 'react-router-dom';

export const AppRouter = () => (
    <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path='/' element={ <HomePage /> } />;
                <Route path='/new-card' element={ <PrivateRouter component={RegisterCardPage}/> } />;
                <Route path='/login' element={ <LoggedRouter component={LoginPage} /> } />;
                <Route path='*' element={ <Navigate to='/' /> } />;
            </Routes>
        </UserContextProvider>
    </BrowserRouter>
)

type ConditionalRouter = {
    component: React.ComponentType;
}

const LoggedRouter = ({component: RouteComponent}: ConditionalRouter): JSX.Element => {
    const token = sessionStorage.getItem('token');
    
    if(token) return <Navigate to='/' />

    return <RouteComponent />
}

const PrivateRouter = ({component: RouteComponent}: ConditionalRouter): JSX.Element => {
    const token = sessionStorage.getItem('token');

    if(!token) return <Navigate to='/' />

    return <RouteComponent />;
}