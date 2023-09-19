import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { ConditionalRouter, UserContextType } from "@types";
import { UserContext } from "context";
import { LoadingPage } from "pages";

const AdminRouter = ({component: RouteComponent}: ConditionalRouter): JSX.Element => {
    const { authenticate, token } = useContext(UserContext) as UserContextType;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        authenticate()
            .then(res => {
                setLoading(!res);
                setError(!res);
            })
    }, [])

    if(!token || error) return <Navigate to='/' />    

    if(loading) return <LoadingPage />

    return <RouteComponent />
}

export default AdminRouter;