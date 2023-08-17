import { useContext, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

import { UserContextType } from "@types";
import { UserContext } from "context";

type LangSwitcherProps = {
    inNavbar: boolean;
}

const LangSwitcher = ({inNavbar}: LangSwitcherProps):JSX.Element => {
    const {darkMode, currentLang, langOption, toggleLanguage} = useContext(UserContext) as UserContextType;
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Dropdown inNavbar = {inNavbar}
            isOpen={dropdownOpen} toggle={toggleDropdown}
            className='mx-2 me-3'
        >
            <DropdownToggle nav={inNavbar} caret 
                className={`${darkMode ? 'text-light' : 'text-dark'} d-flex align-items-center`}
            >
                <span className={`fs-3 ${currentLang.flag}`}></span>
                <span className='ms-2'>
                    {currentLang.language}
                </span>
            </DropdownToggle>
            <DropdownMenu dark={darkMode}
                className={`${darkMode ? 'bg-dark-dark' : 'bg-light'} no-min-width fit-content`}
            >
                <DropdownItem
                    className='no-min-width fit-content'
                    onClick={toggleLanguage}
                >
                    <span className={`fs-3 ${langOption.flag}`}></span>
                    <span className='ms-2'>{langOption.language}</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default LangSwitcher;