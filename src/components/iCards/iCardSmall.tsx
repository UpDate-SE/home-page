import { useContext, useState } from "react";
import { Col, Row } from "reactstrap";

import { IconDefinition, faCheck, faCopy, faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import { BusinesCardInDB, UserContextType } from "@types"
import { UserContext } from "context";
import ICardSmOption from "./ICardSmOption";

import 'scss/css/style.css';

type ICardSmallProps = {
    businessCard: BusinesCardInDB;
    viewCard: (card: BusinesCardInDB) => void;
    editCard: (card: BusinesCardInDB) => void;
    deleteCard: (card: BusinesCardInDB) => void;
    copyCardLink: (card: BusinesCardInDB, copyCallback: () => void) => void;
}

const ICardSmall = ({businessCard, viewCard, editCard, deleteCard, copyCardLink}: ICardSmallProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;
    const [shareIcon, setShareIcon] = useState<IconDefinition>(faCopy)

    const onCopyFinished = () => {
        setShareIcon(faCheck);
        setTimeout(() => setShareIcon(faCopy), 5000);
    }

    return (
        <div
            className={`
                border border-2 rounded-5
                ${darkMode ? 'border-primary-dark bg-dark-dark' : 'border-primary'}
            `}
        >
            <Row
                className={`
                    ${darkMode ? 'text-light' : ''}
                    align-items-center
                `}
            >
                <Col
                    xs={2}
                    className='px-4 py-2'
                >
                    <img
                        src={businessCard.photo}
                        className='rounded-circle'
                        alt='person in card'
                        width={100}
                        height={100}
                    />
                </Col>
                <Col
                    className='ps-5'
                >
                    <span
                        className={`
                            ${darkMode ? 'text-primary-dark' : 'text-primary'}
                            fs-3 fw-bold
                        `}
                    >
                        {businessCard.name}
                    </span>
                    <br/>
                    <span>
                        {businessCard.position} | {businessCard.companyName} 
                    </span>
                    <br/>
                    {businessCard.email}
                </Col>
                <Col xs={2}
                    className='p-0 h-100'
                >
                    <div
                        className='fs-5 d-flex flex-column'
                    >
                        <ICardSmOption
                            onClick={() => viewCard(businessCard)}
                            hoverColor={darkMode ? 'var(--bs-primary-dark)' : 'var(--bs-primary)'}
                            icon={faEye}
                        />
                        <ICardSmOption
                            onClick={() => editCard(businessCard)}
                            hoverColor={darkMode ? 'var(--bs-primary-dark)' : 'var(--bs-primary)'}
                            className='my-2'
                            icon={faPencil}
                        />
                        <ICardSmOption
                            onClick={() => copyCardLink(businessCard, onCopyFinished)}
                            hoverColor='green'
                            className='mb-2'
                            icon={shareIcon}
                        />
                        <ICardSmOption
                            onClick={() => deleteCard(businessCard)}
                            hoverColor={'var(--bs-danger)'}
                            icon={faTrash}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ICardSmall;