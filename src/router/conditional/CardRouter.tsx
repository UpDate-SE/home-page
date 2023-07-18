import { Navigate, useParams } from "react-router-dom";

import { CardPage } from "pages";

const CardRouter = (): JSX.Element => {
    const { company, name } = useParams();
    
    if((!company) || (!name)) return <Navigate to='/' />

    return <CardPage companyName={company} name={name} />;
}

export default CardRouter;