import { useContext, useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import { ACSELogo } from "assets";
import { UserContext } from "context";
import { UserContextType } from "@types";
import { DarkModeToggler, LangSwitcher } from 'components';

import 'scss/css/style.css';
import 'styles/NavbarHome.css';

const NavBarHome = () => {
    const { darkMode, currentLang } = useContext(UserContext) as UserContextType; 
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
            container="fluid"
        >
            <NavbarBrand
                href='#'
                className='opacity-75-hover'
            >
                <img src={ACSELogo}
                    id='advanced-logo'
                    className={`${darkMode ? 'filter-dark': ''} img-fluid`}
                    alt='company logo'
                    draggable={false}
                />
            </NavbarBrand>
            <div id='options'
                className='d-flex'
            >
                <DarkModeToggler />
                <LangSwitcher
                    inNavbar
                />
            </div>
        </Navbar>
    )        
}

export default NavBarHome;