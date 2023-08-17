import { useContext, useState } from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

import { ACSELogo, ACSELogoDark } from "assets";
import { UserContext } from "context";
import { UserContextType } from "@types";
import { DarkModeToggler, LangSwitcher } from 'components';

import 'scss/css/style.css';
import 'styles/navbar.css';

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
                className='opacity-75-hover d-flex align-items-center'
                style={{
                    height: `${collapseOpen ? '10vh' : ''}`
                }}
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
                <Container fluid
                    id='collapsed-items'
                    className='p-0 d-flex 
                        align-items-center
                    '
                >
                    <Nav navbar className={`${darkMode ? 'bg-dark-dark' : 'bg-light'} mx-auto`}>
                        <NavItem>
                            <NavLink href='#plans' 
                                className={darkMode ? 'link-primary-dark' : 'link-primary'}
                                onClick={()=>setCollapseOpen(false)}
                            >
                                {currentLang.language === 'ESP' ? 'Planes' : 'Plans'}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#us' 
                                className={darkMode ? 'link-primary-dark' : 'link-primary'}
                                onClick={()=>setCollapseOpen(false)}
                            >
                                {currentLang.language === 'ESP' ? 'Nosotros' : 'About us'}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#collaborators'
                                className={darkMode ? 'link-primary-dark' : 'link-primary'}
                                onClick={()=>setCollapseOpen(false)}
                            >
                                {currentLang.language === 'ESP' ? 'Colaboradores' : 'Collaborators'}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#projects'
                                className={darkMode ? 'link-primary-dark' : 'link-primary'}
                                onClick={()=>setCollapseOpen(false)}
                            >
                                {currentLang.language === 'ESP' ? 'Proyectos' : 'Projects'}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#contact'
                                className={darkMode ? 'link-primary-dark' : 'link-primary'}
                                onClick={()=>setCollapseOpen(false)}
                            >
                                {currentLang.language === 'ESP' ? 'Contacto' : 'Contact'}
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <div id='options'
                        className='d-flex'
                    >
                        <DarkModeToggler />
                        <LangSwitcher
                            inNavbar
                        />
                    </div>
                </Container>
            </Collapse>
        </Navbar>
    )        
}

export default NavBarHome;