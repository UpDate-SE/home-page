import { useContext } from "react";
import { Col, Container, List, Row } from "reactstrap";

import { UserContextType } from "@types";
import { UserContext } from "context";

import 'scss/css/style.css';
import 'styles/MarketingPlans.css';

type MarketingPlan = {
    image: string;
    perks: Array<string>;
    price: string;
}

type MarketingPlansProps = {
    name: string
    plans: Array<MarketingPlan>;
}

const MarketingPlans = ({name, plans}: MarketingPlansProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;
    
    return (
        <Row id='marketing-plans'>
            {plans.map((plan, index) => (
                <Col md={4} key={index}>
                    <Container
                        fluid
                        className={`marketing-plan py-2
                            border rounded
                            ${darkMode ? 'border-primary-dark' : 'border-primary'}
                            d-flex flex-column justify-content-between align-items-center
                        `}
                    >
                        <span
                            className={`fs-3 fw-bold
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            Plan #{index+1}: {name}
                        </span>
                        <img
                            src={plan.image}
                            className='img-fluid user-select-none marketing-image'
                            draggable={false}
                            alt=''
                        />
                        <List 
                            className={`align-self-start
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            {plan.perks.map((perk, index) => (
                                <li key={index}>
                                    {perk}
                                </li>
                            ))}
                        </List>
                        <span
                            className={`fs-2 fw-bold
                                ${darkMode ? 'text-primary-dark' : 'text-primary'}
                            `}
                        >
                            {plan.price}
                        </span>
                    </Container>
                </Col>
            ))}
        </Row>
    )
}

export default MarketingPlans;