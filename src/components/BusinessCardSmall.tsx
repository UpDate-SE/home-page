import { Col, Row } from "reactstrap";

import { BusinesCardInDB } from "@types"

import 'scss/css/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type BusinessCardSmallProps = {
    businessCard: BusinesCardInDB;
    dark: boolean;
    viewCard: (card: BusinesCardInDB) => void;
    editCard: (card: BusinesCardInDB) => void;
    deleteCard: (card: BusinesCardInDB) => void;
}

const BusinessCardSmall = ({businessCard, dark, viewCard, editCard, deleteCard}: BusinessCardSmallProps) => (
    <div
        className={`
            border border-2 rounded-5
            ${dark ? 'border-primary-dark bg-dark-dark' : 'border-primary'}
        `}
    >
        <Row
            className='align-items-center'
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
                    className='fs-3 fw-bold'
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
                    <Option
                        onClick={() => viewCard(businessCard)}
                        hoverColor={dark ? 'var(--bs-primary-dark)' : 'var(--bs-primary)'}
                        icon={faEye}
                    />
                    <Option
                        onClick={() => editCard(businessCard)}
                        hoverColor={dark ? 'var(--bs-primary-dark)' : 'var(--bs-primary)'}
                        className='my-2'
                        icon={faPencil}
                    />
                    <Option
                        onClick={() => deleteCard(businessCard)}
                        hoverColor={'var(--bs-danger)'}
                        icon={faTrash}
                    />
                </div>
            </Col>
        </Row>
    </div>
)

type OptionProps = {
    onClick: () => void;
    hoverColor: string;
    icon: IconDefinition;
    className?: string;
}

const Option = ({onClick, hoverColor, icon, className}: OptionProps) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <FontAwesomeIcon
            icon={icon}
            style={{
                cursor: 'pointer',
                color: `${hover ? hoverColor : ''}`
            }}
            className={className}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        />
    )
}

export default BusinessCardSmall;