import { useContext, useState } from "react"
import { Col, Container, List, Row } from "reactstrap"

import { UserContextType } from "@types"
import { UserContext } from "context"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import 'scss/css/style.css';
import 'styles/Packages.css';

type PackageInfoProps = {
    title: string;
    perks: Array<string>;
    image: string;
    price: string;
}

const PackageInfo = ({title, perks, image, price}: PackageInfoProps): JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [viewInfo, setViewInfo] = useState<boolean>(false);

    return (
        <div>
            <span
                className={`
                    text-light
                    bg-primary
                `}
                style={{
                    padding: '2px 5px',
                    marginLeft: '4rem',
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
            <Container fluid
                id='package-info'
                className={`
                    mx-auto 
                    border 
                    ${viewInfo ? 'border-3' : 'border-1 rounded'} 
                    ${darkMode ? 'border-primary-dark' : 'border-primary'}
                `}
                style={{
                    width: '90%',
                    borderTopLeftRadius: `${viewInfo ? '0 !important' : ''}`
                }}
            >    
                <a
                    href={`mailto:josuearredondo@advancedcodese.com?subject=${title}`}
                    className='text-decoration-none'
                    onMouseEnter={() => setViewInfo(true)}
                    onMouseLeave={() => setViewInfo(false)}
                >
                    <Row>
                        <Col md={8} id='col-title'>
                            <span
                                id='title'
                                className={`${darkMode ? 'text-light' : 'text-dark'} 
                                    fs-2 fw-bold mb-2`}
                            >
                                {title}
                            </span>
                            <List
                                className={`${darkMode ? 'text-light' : 'text-dark'}
                                    fs-5 text-start`}
                            >
                                {perks.map((perk, index) => (
                                    <li key={index}>
                                        {perk}
                                    </li>
                                ))}
                            </List>
                        </Col>
                        <Col md={4}
                            className='text-center
                                d-flex flex-column justify-content-between align-items-center'
                        >
                            <img
                                src={image}
                                alt=''
                                draggable={false}
                                className='user-select-none img-fluid'
                                style={{
                                    objectFit: 'contain',
                                    aspectRatio:'10/9',
                                    height: '15rem',
                                    maxHeight: '50vh'
                                }}
                            />
                            <span 
                                className={`${darkMode ? 'text-primary-dark' : 'text-primary'} 
                                    fs-2 fw-bold mb-2 section-title`}
                            >
                                {price}
                            </span>
                        </Col>
                    </Row>
                </a>
            </Container>
        </div>    
    )
}

export default PackageInfo;