import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { ConditionalRouter, UserContextType } from "@types";
import { UserContext } from "context";

const PrivateRouter = ({component: RouteComponent}: ConditionalRouter): JSX.Element => {
    const { token } = useContext(UserContext) as UserContextType;

    if(!token) return <Navigate to='/' />

    return <RouteComponent />;
}

export default PrivateRouter;