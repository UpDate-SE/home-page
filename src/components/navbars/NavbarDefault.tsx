import { useContext, useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

import { ACSELogo, ACSELogoDark } from "assets";
import { UserContext } from "context";
import { UserContextType } from "@types";
import { DarkModeToggler, LangSwitcher } from 'components';

import 'scss/css/style.css';
import 'styles/navbar.css';

const NavBarDefault = () => {
    const { darkMode } = useContext(UserContext) as UserContextType;

    const [collapseOpen, setCollapseOpen] = useState<boolean>(false);

    const toggleCollapse = () => setCollapseOpen(!collapseOpen);

    return (
        <Navbar
            light = {!darkMode}
            dark = {darkMode}
            fixed='top' 
            expand='md' 
            id='nav-bar'
            className={`${darkMode ? 'bg-dark-dark' : 'bg-light'} 
                ps-3 user-select-none border-bottom
                ${darkMode ? 'border-primary-dark' : 'border-primary'}    
            `}
        >
            <NavbarBrand
                href='/'
                className='opacity-75-hover'
            >
                <img src={darkMode ? ACSELogoDark : ACSELogo}
                    id='advanced-logo'
                    className='img-fluid'
                    alt='company logo'
                    draggable={false}
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggleCollapse} className='ms-auto' />
            <Collapse navbar
                id='nav-bar-collapse'
                isOpen={collapseOpen}
                className={darkMode ? 'bg-dark-dark' : 'bg-light'}
            >
                <div id='options-default'
                    className='d-flex ms-auto'
                >
                    <DarkModeToggler />
                    <LangSwitcher
                        inNavbar
                    />
                </div>
            </Collapse>
        </Navbar>
    )        
}

export default NavBarDefault;