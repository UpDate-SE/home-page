import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import { BusinesCardInDB, BusinessCard, UserContextType, WithId } from "@types";
import { UserContext } from "context";

import { LoadingPage } from "pages";
import { BusinessCardSmall, EditCardModal, NavbarDefault } from "components";

import 'scss/css/style.css';

const DashboardPage = (): JSX.Element => {
    const { darkMode, getAllCards } = useContext(UserContext) as UserContextType;

    const [loading, setLoading] = useState<boolean>(true);
    const [businessCards, setBusinessCards] = useState<BusinesCardInDB[] | null>(null);
    const [cardEdit, setCardEdit] = useState<BusinesCardInDB | null>(null);
    const [modal, setModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const toggle = () => setModal(!modal);

    const viewCard = (card: BusinesCardInDB) => {
        const spaceToDash = (str: string) => str.replace(/ /g, '-'); 
        navigate(
            `/card/${spaceToDash(card.companyName)}/${spaceToDash(card.name)}`,
            {
                state: {card: card}
            }
        );
    }

    const editCard = (card: BusinesCardInDB) => {
        setCardEdit(card);
        toggle();
    }

    const submitEditCard = (card: WithId<BusinessCard>) => {

    }

    const deleteCard = (card: BusinesCardInDB) => {

    }

    const fetchCards = async () => {
        const cards = await getAllCards();
        setBusinessCards(cards);
    }

    if(loading) {
        fetchCards();
        setLoading(false);
    }

    if(!businessCards) return <LoadingPage />;

    return (
        <Container
            id='dashboard-page'
            fluid
            className={`
                under-navbar
                ${darkMode ? 'bg-dark-dark':''}
            `}
        >
            <NavbarDefault />
            <Container
                id='dashboard-page-content'
                fluid
            >
                <Row>
                    {businessCards.map((card, index) => (
                        <Col
                            md={6}
                            key={index}
                            className='my-3'
                        >
                            <BusinessCardSmall
                                key={index}
                                businessCard={card}
                                dark={darkMode}
                                viewCard={viewCard}
                                editCard={editCard}
                                deleteCard={deleteCard}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <EditCardModal
                isOpen={modal}
                toggle={toggle}
                card={cardEdit}
                submit={submitEditCard}
            />
        </Container>
    )
}

export default DashboardPage;