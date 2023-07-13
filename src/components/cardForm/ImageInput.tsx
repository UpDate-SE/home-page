import { useContext, useState } from 'react';
import { Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';

import { CardInput, UserContextType } from '@types';
import { UserContext } from 'context';

import 'scss/css/style.css';
import 'styles/CreateCardForm.css';

const ImageInput = ({name, valueChange, setValidInput}: CardInput ) => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [hover, setHover] = useState<boolean>(false);
    const [image, setImage] = useState<string | null>(null);
    
    const onImageChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const file = ev.target.files![0];
        const url = URL.createObjectURL(file);
        setImage(url);
        valueChange(name, file);
        setValidInput(name, true);
    }

    return (
        <div className='text-center user-select-none'>
            <label htmlFor='img-input'>
                <div
                    id='img-prev'
                    className={`
                        ${darkMode ? '' : 'border border-2 border-dark'}
                        rounded-circle
                        d-flex align-items-center justify-content-center
                        position-relative
                    `}
                    onMouseEnter={_ => setHover(true)}
                    onMouseLeave={_ => setHover(false)}
                    style={{
                        backgroundColor: `
                            ${hover ? 
                                darkMode ? '#b9b9b9' : '#dddddd'
                                :
                                darkMode ? '#6d6d6d' : 'white'
                            }`
                    }}
                >
                    {image ?
                        <img
                            id='image-container'
                            src={image}
                            alt=''
                            draggable={false}
                        />
                        :
                        <FontAwesomeIcon
                            id='icon-default'
                            icon={faUser}
                        />
                    }
                    <Col
                        className={`
                            text-light
                            position-absolute
                            fs-1
                        `}
                        style={{
                            visibility: `${hover ? 'inherit' : 'hidden'}`
                        }}
                    >
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                        <br/>
                        {currentLang.language === 'ESP' ? 'Editar' : 'Edit'}
                    </Col>
                </div>
            </label>
            <input
                id='img-input'
                type='file'
                accept='image/jpeg image/png image/jpg'
                multiple={false}
                style={{
                    visibility: 'hidden'
                }}
                onChange={onImageChange}
            />
        </div>
    )
}

export default ImageInput;