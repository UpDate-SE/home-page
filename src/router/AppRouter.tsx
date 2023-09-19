import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from 'context';
import { HomePage, LoginPage, DashboardPage } from 'pages';

import { CardRouter, CardRouterID, LoggedRouter, AdminRouter } from './conditional';

export const AppRouter = () => (
    <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path='/' element={ <HomePage /> } />;
                <Route path='/card/:cardID' element={ <CardRouterID />} />;
                <Route path='/card/:company/:name' element={ <CardRouter />} />;
                <Route path='/dashboard' element={ <AdminRouter component={DashboardPage} /> } />;
                <Route path='/login' element={ <LoggedRouter component={LoginPage} /> } />;
                <Route path='*' element={ <Navigate to='/' /> } />;
            </Routes>
        </UserContextProvider>
    </BrowserRouter>
)