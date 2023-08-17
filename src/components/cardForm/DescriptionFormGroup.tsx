import { useContext, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

import { TextFormGroup, UserContextType } from '@types';
import { UserContext } from 'context';

import 'scss/css/style.css';
import 'styles/CardForm.css';

const DescriptionFormGroup = ({label, name, valueChange, setValidInput, initialValue, type='textarea'}: TextFormGroup): JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [value, setValue] = useState<string>(initialValue);
    const [valid, setValid] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);

        const isValid = value.length > 0;
        setValid(isValid);

        setValidInput(name, isValid);
        if(isValid) valueChange(name, value);
    }

    return (
        <FormGroup>
            <Label
                for={name}
                className={`
                    ${darkMode ? 'text-light': ''}
                    user-select-none
                `}
            >
                {label}
            </Label>
            <Input
                id={name}
                name={name}
                onChange={handleChange}
                invalid={!valid}
                value={value}
                type={type}
                className={`
                    ${darkMode ? 'bg-dark text-light' : ''}
                `}
                style={{
                    resize: 'none'
                }}
            />
            <FormFeedback>
                {currentLang.language==='ESP' ? 
                    'Escriba un valor'
                    :
                    'Type a value'
                }
            </FormFeedback>
        </FormGroup>
    )
}

export default DescriptionFormGroup;