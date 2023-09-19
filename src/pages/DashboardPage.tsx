import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

import { BusinesCardInDB, UserContextType } from "@types";
import { UserContext } from "context";

import { LoadingPage } from "pages";
import { CreateCardModal, EditCardModal, ICardSmall, NavbarDefault } from "components";

import 'scss/css/style.css';

const DashboardPage = (): JSX.Element => {
    const { darkMode, createBusinessCard, editCard, getAllCards } = useContext(UserContext) as UserContextType;

    const [loading, setLoading] = useState<boolean>(true);
    const [businessCards, setBusinessCards] = useState<BusinesCardInDB[] | null>(null);
    const [cardEdit, setCardEdit] = useState<BusinesCardInDB | null>(null);
    
    const [modalCreate, setModalCreate] = useState<boolean>(false);
    const [modalEdit, setModalEdit] = useState<boolean>(false);

    const navigate = useNavigate();

    const toggleCreate = () => setModalCreate(!modalCreate);
    const toggleEdit = () => setModalEdit(!modalEdit);

    const viewCardOptionClicked = (card: BusinesCardInDB) => {
        const spaceToDash = (str: string) => str.replace(/ /g, '-'); 
        navigate(
            `/card/${spaceToDash(card.companyName)}/${spaceToDash(card.name)}`,
            {
                state: {card: card}
            }
        );
    }

    const editCardOptionClicked = (card: BusinesCardInDB) => {
        setCardEdit(card);
        toggleEdit();
    }

    const copyCardOptionClicked = async (card: BusinesCardInDB, copyCallback: () => void) => {
        await navigator.clipboard.writeText(`${window.location.host}/card/${card._id}`);
        copyCallback();
    }

    const submitEditCard = async (cardFormData: FormData): Promise<void> => {
        if(!businessCards) return;

        const newCard = await editCard(cardFormData);
        if(!newCard) return;
        
        const edittedIndex = businessCards?.findIndex((element) => element._id === newCard._id);
        const newCards = [...businessCards];
        newCards[edittedIndex] = newCard;
        setBusinessCards(newCards);
        toggleEdit();
    }

    const submitCreateCard = async (cardFormData: FormData) => {
        const newCard = await createBusinessCard(cardFormData);
        if(!newCard) return;

        const newCards = businessCards !== null ? [...businessCards, newCard] : [newCard];
        setBusinessCards(newCards);
        toggleCreate();
    }

    const deleteCardOptionClicked = (card: BusinesCardInDB) => {

    }

    const fetchCards = async () => {
        const cards = await getAllCards();
        setBusinessCards(cards);
    }

    const modalEditClosed = () => {
        setCardEdit(null);
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
            style={{
                minHeight: '100vh'
            }}
        >
            <NavbarDefault />
            <Container
                id='dashboard-page-content'
                fluid
                className='pt-3'
            >
                <div id='btn-add'
                    className='mt-2 text-end`'
                >
                    <Button
                        className={`
                            ${darkMode ? '' : 'text-light'}
                            px-5 py-2
                        `}
                        color={darkMode ? 'primary-dark' : 'primary'}
                        onClick={() => toggleCreate()}
                    >
                        Add Card
                    </Button>
                </div>
                <Row id='cards-row'
                >
                    {businessCards.map((card, index) => (
                        <Col
                            md={6}
                            key={index}
                            className='my-3'
                        >
                            <ICardSmall
                                key={index}
                                businessCard={card}
                                viewCard={viewCardOptionClicked}
                                editCard={editCardOptionClicked}
                                deleteCard={deleteCardOptionClicked}
                                copyCardLink={copyCardOptionClicked}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <EditCardModal
                isOpen={modalEdit}
                toggle={toggleEdit}
                card={cardEdit}
                onClose={modalEditClosed}
                submit={submitEditCard}
            />
            <CreateCardModal
                isOpen={modalCreate}
                toggle={toggleCreate}
                submit={submitCreateCard}
            />
        </Container>
    )
}

export default DashboardPage;