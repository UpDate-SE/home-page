import { useContext } from "react"
import { Col, Container, List, Row } from "reactstrap"

import { UserContextType } from "@types"
import { UserContext } from "context"

import 'scss/css/style.css';

type PackageInfoProps = {
    title: string;
    perks: Array<string>;
    image: string;
    price: string;
}

const PackageInfo = ({title, perks, image, price}: PackageInfoProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;
    
    return (
        <Container fluid
            className='mx-auto mt-3 border border-1 border-primary rounded'
            style={{
                width: '90%'
            }}
        >    
            <Row>
                <Col md={8}>
                    <span
                        className={`${darkMode ? 'text-light' : 'text-dark'} 
                            fs-2 fw-bold mb-2 section-title`}
                    >
                        {title}
                    </span>
                    <List
                        className={`${darkMode ? 'text-light' : 'text-dark'}
                            fs-5`}
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
                            aspectRatio:'16/9'
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
        </Container>
    )
}

export default PackageInfo;