import { useContext, useEffect } from "react";
import { Button, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { UserContextType } from "@types";
import { UserContext } from "context";

import 'scss/css/style.css';
import 'styles/CreateCardForm.css';


type SocialsTextInputsProps = {
    socials: string[];
    containerRef: React.RefObject<HTMLDivElement>
    removeSocial: (index: number) => void;
    onTextChange: (value: string, index: number) => void;
}

const SocialsTextInputs = ({socials, containerRef, removeSocial, onTextChange}: SocialsTextInputsProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;

    useEffect(() => {
        containerRef.current?.scroll({
            top: containerRef.current.scrollHeight,
            behavior: 'smooth'
        });
    })

    const elements = socials.map((social, index) => (
        <div
            key={index}
            className='position-relative my-3'
        >
            <Input
                className={`
                    ${darkMode ? 'text-light bg-dark' : ''}
                `}
                value={social}
                type='url'
                placeholder='url'
                onChange={(ev) => onTextChange(ev.target.value, index)}
            />
            <Button
                id='delete-social-btn'
                onClick={() => removeSocial(index)}
                className='
                    position-absolute
                    border-0 rounded-circle
                    bg-danger text-light
                '
                style={{
                    visibility: `${index === 0 ? 'hidden' : 'visible'}`
                }}
            >
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </div>
    ));

    return (
        <>
            {elements}
        </>
    );
}

export default SocialsTextInputs;