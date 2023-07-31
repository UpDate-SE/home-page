import { useLocation, useNavigate, useParams } from "react-router-dom";

import { CardPage, LoadingPage } from "pages";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "context";
import { BusinesCardInDB, UserContextType } from "@types";
import { removeDashes } from "@helpers/card-formatter";

const CardRouter = (): JSX.Element => {
    const { company, name } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const { getBusinessCard } = useContext(UserContext) as UserContextType;

    const [businessCard, setBusinessCard] = useState<BusinesCardInDB | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if((!company) || (!name)) return navigate('/');
        
        if(state?.card) {
            setBusinessCard(state.card);
            setLoading(false);
        }
        
        if(!businessCard && !state?.card) {
            fetchBusinessCardData(company, name);
        }
    }, [])

    const fetchBusinessCardData = async (company: string, name:string) => {
        const businessCardOrNull = await getBusinessCard(removeDashes(company), removeDashes(name));
        if(!businessCardOrNull) navigate('/');
        setBusinessCard(businessCardOrNull);
        setLoading(false);
    }
    
    if(loading || !businessCard) {
        return <LoadingPage />;
    }

    return <CardPage businessCard={businessCard} />
}

export default CardRouter;