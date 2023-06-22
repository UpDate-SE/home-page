import { useContext } from "react";
import { FormGroup, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { UserContextType } from "@types";
import { UserContext } from "context";

import 'scss/css/style.css';
import 'styles/DarkModeToggler.css';

const DarkModeToggler = (): JSX.Element => {
    const { darkMode, toggleDarkMode } = useContext(UserContext) as UserContextType;
    
    return (
        <div
            id='dark-mode-toggler'
            className='d-flex align-items-center justify-content-center'
        >
            <FontAwesomeIcon
                icon={faSun}
                className='fs-5'
                color="#f6d32d"
            />
            <FormGroup
                switch
                className='d-flex justify-content-center'
            >
                <Input
                    type='switch'
                    checked={darkMode}
                    onClick={toggleDarkMode}
                    className='no-focus'
                    readOnly
                />
            </FormGroup>
            <FontAwesomeIcon
                icon={faMoon}
                className='fs-5'
                color={`${darkMode? 'white': '#2300BF'}`}
            />
        </div>
    )    
}

export default DarkModeToggler;