import { useContext } from "react";
import { Col, Container, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { UserContextType } from "@types";
import { UserContext } from "context";

const Footer = ():JSX.Element => {
    const { darkMode, currentLang } = useContext(UserContext) as UserContextType; 

    return(
        <Container fluid 
            className={
                `px-sm-5 user-select-none
                ${darkMode ? 'bg-primary text-light' : 'bg-primary-dark'}`
            }
        >
            <Row className='d-flex align-items-center'>
                <Col md='2'>
                    <span>&copy; Advanced Code SE</span>
                </Col>
                <Col md='2'>
                    {currentLang.language === 'ESP' ?
                        <span>Hecho con &#128153; </span>
                        :
                        <span>Made with &#128153; </span>
                    }
                </Col>
                <Col md='2' className='ms-md-auto'>
                    <Container fluid className='p-0 fs-4 d-flex justify-content-evenly align-items-center'>
                        <a
                            href='https://www.linkedin.com/company/advanced-code-se/'
                            className={`
                                opacity-50-hover
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href='https://www.instagram.com/advancedcode_se/'
                            className={`
                                opacity-50-hover
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href='https://www.facebook.com/advancedcodese/'
                            className={`
                                opacity-50-hover
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                            href='https://www.youtube.com/@AdvancedCodeSE/'
                            className={`
                                opacity-50-hover
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a
                            href='https://www.tiktok.com/@advancedcodese'
                            className={`
                                opacity-50-hover
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href='https://github.com/UpDate-SE'
                            className={`
                                opacity-50-hover
                                ${darkMode ? 'text-light' : 'text-dark'}
                            `}
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;