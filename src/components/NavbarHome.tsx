import { useState } from "react";
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

import { ACSELogo } from "assets";

import 'scss/css/style.css';
import 'styles/NavbarHome.css';

const NavBarHome = () => {
    const [collapseOpen, setCollapseOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [animation, setAnimation] = useState<boolean>(false);

    const toggleCollapse = () => setCollapseOpen(!collapseOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Navbar light 
            fixed='top' 
            expand='md' 
            id='nav-bar'
            className='bg-light prevent-select ps-3'
            container="fluid"
        >
            <NavbarBrand href='#' className='opacity-75-hover'>
                <img src={ACSELogo}
                    id='advanced-logo'
                    className='img-fluid'
                    alt='company logo'
                    draggable={false}
                />
                <span className='text-primary fw-bold'>Advanced Code</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggleCollapse} className='ms-auto' />
            <Collapse navbar isOpen={collapseOpen} 
                className='bg-light' id='nav-bar-collapse'
                onEntering={() => setAnimation(true)} onExiting={() => setAnimation(true)}
                onEntered={() => setAnimation(false)} onExited={() => setAnimation(false)}
            >
                <Nav navbar className='ms-auto'>
                    <NavItem>
                        <NavLink href='#us' className='link-primary'>Nosotros</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#collaborators' className='link-primary'>Colaboradores</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#projects' className='link-primary'>Proyectos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contact' className='link-primary'>Contacto</NavLink>
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
                <DropdownToggle nav caret className='text-dark d-flex align-items-center'>
                    <span className="fs-3 fi fi-mx"></span><span className='ms-2'>ESP</span>
                </DropdownToggle>
                <DropdownMenu end className='no-min-width fit-content'>
                    <DropdownItem className='no-min-width fit-content'>
                        <span className="fs-3 fi fi-us"></span><span className='ms-2'>ENG</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Navbar>
    )        
}

export default NavBarHome;