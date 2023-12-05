import { useContext } from "react";
import { Button, Col, Container, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { BusinesCardInDB, SupportedSocials, UserContextType } from "@types";
import { UserContext } from "context";

import { WebsiteIcon } from "assets";
import { ICardSocialMedia, NavbarDefault } from "components";

import { allUpperCaseFirst, removeDashes } from "@helpers/card-formatter";

import 'scss/css/style.css';
import 'styles/cardPage.css';

type CardPageProps = {
    businessCard: BusinesCardInDB;
}

const CardPage = ({businessCard}: CardPageProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;

    return (
        <Container id='card-page'
            className={`
                pt-4 g-0
                ${darkMode ? 'bg-dark-dark':''}
                overflow-hidden
            `}
            fluid
        >
            <NavbarDefault />
            <Container
                id='card-page-content'
                className='overflow-hidden under-navbar'
            >
                <Row
                    id='row-top'
                    className={`
                        ${darkMode ? 'text-light' : ''}
                        justify-content-evenly align-items-center
                        mx-auto mb-3
                    `}
                >
                    <Col xs={6}
                        id='col-info'
                    >
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
                        {
                            businessCard.website ?
                            <a href={businessCard.website} target="_blank" rel="noreferrer"
                                className="d-flex align-items-center mt-2 fs-5"
                            >
                                <div>
                                    <img id="website-icon" src={WebsiteIcon} width={35} alt="logo for website"/>
                                    <span className="ms-2">
                                        {businessCard.website.split("//").at(1) ?? businessCard.website}
                                    </span>
                                </div>
                            </a>
                            :null
                        }
                    </Col>
                    <Col xs={6}
                        id='col-photo'
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
                <a href={`mailto:${businessCard.email}`}
                    className={`
                        ${darkMode ? 'text-dark' : 'text-light'}
                        text-decoration-none
                    `}
                >
                    <div className='text-center mb-3'>
                        <Button
                            id='contact-button'
                            className='w-100'
                            color={`${darkMode ? 'primary-dark' : 'primary'}`}
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className='me-2'
                            />
                            Contactar
                        </Button>
                    </div>
                </a>
                {
                    businessCard.socials.whatsapp ?
                    <a
                        id="save-contact"
                        href={`tel:${lastUrlItem(businessCard.socials.whatsapp)}`}
                        className={`
                            ${darkMode ? 'text-dark' : 'text-light'}
                            text-decoration-none
                        `}
                    >
                        <div className='text-center mb-3'>
                            <Button
                                id='contact-button'
                                className='w-100'
                                color={`${darkMode ? 'primary-dark' : 'primary'}`}
                            >
                                <FontAwesomeIcon
                                    icon={faAddressBook}
                                    className='me-2'
                                />
                                Guardar Contacto
                            </Button>
                        </div>
                    </a>
                    :null
                }
                <div id='socials-container'
                    className='d-flex flex-wrap'
                >
                    {
                        Object.keys(businessCard.socials).map((social, index) => {
                            const socialName = social as SupportedSocials;
                            const socialUrl = businessCard.socials[socialName];

                            if(!socialUrl) return null;

                            return (
                                <ICardSocialMedia
                                    url={socialUrl}
                                    social={socialName}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </Container>
    )
}

const lastUrlItem = (url: string) => url.substring(url.lastIndexOf('/') + 1);

export default CardPage;