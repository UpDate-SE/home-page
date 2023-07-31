import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LoadingPage } from "pages";
import { UserContextType } from "@types";
import { UserContext } from "context";
import { addDashes } from "@helpers/card-formatter";

const CardRouter = (): JSX.Element => {
    const { cardID } = useParams();
    const navigate = useNavigate();
    
    const { getBusinessCardWithID } = useContext(UserContext) as UserContextType;
    
    useEffect(() => {
        if(!cardID) return navigate('/');
        fetchBusinessCardData(cardID);
    }, [])

    const fetchBusinessCardData = async (id: string) => {
        const businessCardOrNull = await getBusinessCardWithID(id);
        if(!businessCardOrNull) return navigate('/');
        
        const companyName = addDashes(businessCardOrNull.companyName);
        const name = addDashes(businessCardOrNull.name);

        navigate(
            `/card/${companyName}/${name}`,
            {
                state: {card: businessCardOrNull}
            }
        )
    }

    return <LoadingPage />;
}

export default CardRouter;