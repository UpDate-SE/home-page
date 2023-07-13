import { useContext, useRef, useState } from "react";
import { Button } from "reactstrap";

import { CardInput, UserContextType } from "@types";
import { UserContext } from "context";

import { SocialsTextInputs } from 'components'; 

import 'scss/css/style.css';
import 'styles/CreateCardForm.css';

const SocialsInput = ({name, valueChange, setValidInput}: CardInput): JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [socials, setSocials] = useState<string[]>(['']);
    const containerRef = useRef<HTMLDivElement>(null);

    const isEveryStringNotEmpty = (array: string[]):boolean => array.every(element => element.length > 0);

    const pushSocial = () => {
        setSocials([...socials, '']);
        setValidInput(name, false);
    }

    const removeSocial = (index: number) => {
        if(socials.length === 1) return;
        const newSocials = socials.slice();
        newSocials.splice(index, 1);
        setSocials(newSocials);
        setValidInput(name, isEveryStringNotEmpty(newSocials));
    }

    const onTextChange = (value: string, index: number) => {
        const newSocials = socials.slice();
        const valid = value.length > 0;

        newSocials[index] = value;
        setSocials(newSocials);
        
        setValidInput(name, valid);
        if(valid) valueChange(name, newSocials);
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <span
                    className={`
                        ${darkMode ? 'text-light' : ''}
                        me-3
                    `}
                >
                    {currentLang.language === 'ESP' ?
                        'Redes sociales: ' : 'Social media: '
                    }
                </span>
                <Button
                    id='add-social-btn'
                    color={`${darkMode ? 'primary-dark' : 'primary'}`}
                    onClick={pushSocial}
                    className={`
                        ${darkMode ? 'text-dark' : 'text-light'}
                        rounded-circle
                        d-flex align-items-center justify-content-center                  
                    `}
                >
                    +
                </Button>
            </div>
            <div id='inputs-container'
                ref={containerRef}
                className={`
                    px-2 my-2
                    ${darkMode ? 'border-primary-dark' : 'border-primary'}
                    border border-2 rounded
                `}
            >
                <SocialsTextInputs
                    socials={socials}
                    containerRef={containerRef}
                    removeSocial={removeSocial}
                    onTextChange={onTextChange}
                />
            </div>
        </div>
    )
}

export default SocialsInput;