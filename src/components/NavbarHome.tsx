import { useContext, useState } from "react";
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

import { ACSELogo } from "assets";
import { UserContext } from "context";
import { UserContextType } from "@types";

import 'scss/css/style.css';
import 'styles/NavbarHome.css';

const NavBarHome = () => {
    const { darkMode, currentLang, langOption, toggleLanguage } = useContext(UserContext) as UserContextType; 
    const [collapseOpen, setCollapseOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [animation, setAnimation] = useState<boolean>(false);

    const toggleCollapse = () => setCollapseOpen(!collapseOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Navbar 
            light = {!darkMode}
            dark = {darkMode}
            fixed='top' 
            expand='md' 
            id='nav-bar'
            className={`${darkMode ? 'bg-dark-dark' : 'bg-light'} user-select-none ps-3`}
            container="fluid"
        >
            <NavbarBrand href='#' className='opacity-75-hover'>
                <img src={ACSELogo}
                    id='advanced-logo'
                    className={`${darkMode ? 'filter-dark': ''} img-fluid`}
                    alt='company logo'
                    draggable={false}
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggleCollapse} className='ms-auto' />
            <Collapse navbar isOpen={collapseOpen} 
                className={darkMode ? 'bg-dark-dark' : 'bg-light'} id='nav-bar-collapse'
                onEntering={() => setAnimation(true)} onExiting={() => setAnimation(true)}
                onEntered={() => setAnimation(false)} onExited={() => setAnimation(false)}
            >
                <Nav navbar className={`${darkMode ? 'bg-dark-dark' : 'bg-light'} ms-auto`}>
                    <NavItem>
                        <NavLink href='#us' 
                            className={darkMode ? 'link-primary-dark' : 'link-primary'}>
                            {currentLang.language === 'ESP' ? 'Nosotros' : 'About us'}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#collaborators'
                            className={darkMode ? 'link-primary-dark' : 'link-primary'}
                        >
                            {currentLang.language === 'ESP' ? 'Colaboradores' : 'Collaborators'}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#projects'
                            className={darkMode ? 'link-primary-dark' : 'link-primary'}
                        >
                            {currentLang.language === 'ESP' ? 'Proyectos' : 'Projects'}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contact'
                            className={darkMode ? 'link-primary-dark' : 'link-primary'}
                        >
                            {currentLang.language === 'ESP' ? 'Contacto' : 'Contact'}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <Dropdown inNavbar
                style={{
                    visibility: collapseOpen || animation ? 'hidden' : 'visible',
                    height: collapseOpen ? '0px' : 'inherit',
                }}
                isOpen={dropdownOpen} toggle={toggleDropdown}
                className='mx-2 me-3'
            >
                <DropdownToggle nav caret 
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
        </Navbar>
    )        
}

export default NavBarHome;