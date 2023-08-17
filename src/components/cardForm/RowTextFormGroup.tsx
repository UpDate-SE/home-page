import { useContext, useState } from "react";
import { Col, FormFeedback, FormGroup, Input, Label } from "reactstrap";

import { UserContextType, TextFormGroup } from "@types";
import { UserContext } from "context";

import 'scss/css/style.css';
import 'styles/cardForm.css';

const RowTextFormGroup = ({label, name, valueChange, setValidInput, initialValue, type='text'}: TextFormGroup): JSX.Element => {
    const { currentLang, darkMode } = useContext(UserContext) as UserContextType;
    const [value, setValue] = useState<string>(initialValue);
    const [valid, setValid] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isValid = value.length > 0;
        setValue(value);
        setValid(isValid);
        setValidInput(name, isValid);
        if(isValid) valueChange(name, value);
    }

    return (
        <FormGroup row>
            <Label
                for={name}
                md={2}
                className={`
                    ${darkMode ? 'text-light': ''}
                    user-select-none
                `}
            >
                {label}
            </Label>
            <Col
                md={10}
                className='ms-auto'
            >
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
                />
                <FormFeedback>
                    {currentLang.language==='ESP' ? 
                        'Escriba un valor'
                        :
                        'Type a value'
                    }
                </FormFeedback>
            </Col>
        </FormGroup>
    )
}

export default RowTextFormGroup;