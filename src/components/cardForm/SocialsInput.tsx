import { useContext, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

import { CardInput, SocialMedia, SupportedSocials, UserContextType } from "@types";
import { UserContext } from "context";

import { initialSocialMedia } from "@helpers/initial-card";
import { isValidUrl } from "@helpers/url-validator";

import 'scss/css/style.css';
import 'styles/CreateCardForm.css';

const SocialsInput = ({name, valueChange, setValidInput}: CardInput): JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [socials, setSocials] = useState<SocialMedia>(initialSocialMedia);

    const onTextChange = (value: string, key: keyof SocialMedia) => {
        const socialUrl = value.length > 0 ? value : null;

        let newSocials = {...socials }
        newSocials[key] = socialUrl;
        
        const valid = socialUrl ? isValidUrl(value) : true;

        setValidInput(name, valid);

        if(valid) {
            setSocials(newSocials);
            valueChange(name, newSocials);
        }
    }

    return (
        <div
            className={`
                ${darkMode ? 'text-light' : ''}
                mb-2
            `}
        >
            <span>
                {currentLang.language === 'ESP' ?
                    'Redes Sociales:'
                    :
                    'Social Media:'
                }
            </span>
            <div
                id='socials-input'
                className={`
                    ${darkMode ? 'bg-dark-dark border-primary-dark' : 'border-primary'}
                    border rounded
                    p-2
                `}
            >
                {
                    Object.keys(socials).map((socialName, index) => (
                        <FormGroup key={index}>
                            <Label for={socialName}>
                                {socialName}
                            </Label>
                            <Input
                                id={socialName}
                                className={`
                                    ${darkMode ? 'bg-dark-dark text-light' : ''}
                                `}
                                type='url'
                                placeholder={`https://${socialName}.com`}
                                onChange={(ev) => onTextChange(ev.target.value, socialName as SupportedSocials)}
                            />
                        </FormGroup>
                    ))
                }
            </div>
        </div>
    )
}

export default SocialsInput;