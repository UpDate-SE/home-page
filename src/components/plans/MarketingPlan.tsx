import { useContext, useState } from "react";
import { Col, Container, List } from "reactstrap";

import { MarketingPlanType, UserContextType } from "@types";
import { UserContext } from "context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import 'scss/css/style.css';
import 'styles/MarketingPlans.css';

type MartketingPlanProps = {
    name: string;
    plan: MarketingPlanType;
    planNumber: number;
}

const MarketingPlan = ({name, plan, planNumber}: MartketingPlanProps) => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [viewInfo, setViewInfo] = useState<boolean>(false);

    return (
        <Col md={4}>
            <span
                className={`
                    text-light
                    bg-primary
                `}
                style={{
                    padding: '2px 5px',
                    visibility: `${viewInfo ? 'inherit': 'hidden'}`
                }}
            >
                <FontAwesomeIcon
                    icon={faEnvelope}
                />
                &nbsp;
                {
                    currentLang.language === 'ESP' ?
                    'Más información'
                    :
                    'More info'   
                }
            </span>
            <a
                href={`mailto:josuearredondo@advancedcodese.com?subject=Plan #${planNumber}: ${name}`}
                className='text-decoration-none'
                onMouseEnter={() => setViewInfo(true)}
                onMouseLeave={() => setViewInfo(false)}        
            >
                <Container
                    fluid
                    className={`
                        marketing-plan py-2
                        border
                        ${viewInfo ? 'border-3' : 'border-1 rounded'} 
                        ${darkMode ? 'border-primary-dark' : 'border-primary'}
                        d-flex flex-column justify-content-between align-items-center
                    `}
                >
                    <span
                        className={`fs-3 fw-bold
                            ${darkMode ? 'text-light' : 'text-dark'}
                        `}
                    >
                        Plan #{planNumber}: {name}
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
            </a>
        </Col>
    )
}

export default MarketingPlan;