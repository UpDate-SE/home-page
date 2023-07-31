import { useContext } from "react";
import { Col, Container, Row } from "reactstrap";

import { BusinesCardInDB, UserContextType } from "@types";
import { UserContext } from "context";

import { NavbarDefault } from "components";

import { allUpperCaseFirst, removeDashes } from "@helpers/card-formatter";

import 'scss/css/style.css';
import 'styles/CardPage.css';

type CardPageProps = {
    businessCard: BusinesCardInDB;
}

const CardPage = ({businessCard}: CardPageProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;

    return (
        <Container
            id='card-page'
            fluid
            className={`
                ${darkMode ? 'bg-dark-dark':''}
            `}
        >
            <NavbarDefault />
            <Container
                id='card-page-content'
                className='w-75'
                fluid
            >
                <Row
                    className={`
                        ${darkMode ? 'text-light' : ''}
                        justify-content-evenly align-items-center
                        mx-auto mb-3
                    `}
                >
                    <Col xs={6}>
                        <span
                            className='fs-1 fw-bold'
                        >
                            {removeDashes(businessCard.companyName)}
                        </span>
                        <div className='fs-3'>
                            {allUpperCaseFirst(removeDashes(businessCard.name))}
                            &nbsp; | &nbsp;
                            {businessCard.position}
                            <br/>
                            {businessCard.description}
                        </div>
                    </Col>
                    <Col xs={6}
                        className='text-end'
                    >
                        <img
                            id='photo'
                            src={businessCard.photo}
                            width={300}
                            height={300}
                            className={`
                                ${darkMode ? 'border-light' : 'border-dark'}
                                border border-1
                                rounded-circle
                                user-select-none
                            `}
                            alt={`${businessCard.name}`}
                            draggable={false}
                        />
                    </Col>
                </Row>
                {
                    businessCard.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social}
                            className={`
                                ${darkMode ? 'text-light' : 'text-dark'}
                                text-decoration-none
                                fs-3
                            `}
                        >
                            <div
                                className={`
                                    ${darkMode ? 'border-light': 'border-dark'}
                                    border rounded
                                    mb-2
                                `}
                            >
                                {social}
                            </div>
                        </a>
                    ))
                }
            </Container>
        </Container>
    )
}

export default CardPage;