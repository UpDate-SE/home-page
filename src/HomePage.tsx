import { useContext } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import { InmomatchLogo, Meeting, RentFirmeLogo, TeamProcess, TrenningLogo } from 'assets';

import { CarouselHome, NavBarHome } from 'components';
import { UserContext } from 'context';
import { UserContextType } from '@types';

import 'scss/css/style.css';
import 'styles/HomePage.css';

const HomePage = () => {
    const { darkMode, currentLang } = useContext(UserContext) as UserContextType; 

    return (
        <Container fluid 
            className={`p-0 g-0 ${darkMode ? 'bg-dark' : 'bg-light'}`}
            id='home-page'
        >
            <NavBarHome/>
            <Container fluid id='page-content #' className='p-0'>
                <Container fluid id='image-top'
                    className='d-flex flex-column align-items-center justify-content-center user-select-none'
                    style={{backgroundImage: `url(${TeamProcess})`}}
                >
                    <span className='w-50 text-light fs-1 fw-bold text-center'>
                        {currentLang.language === 'ESP' ?
                            '¿Tienes alguna aplicación que quieras hacer realidad y no sabes cómo crearla?'
                            :
                            'Do you have a project you want to make and you don\'t know how?'
                        }
                    </span>
                    <Button color={darkMode ? 'primary-dark' : 'primary'} 
                        className='fw-bold text-uppercase p-3 mt-5'>
                        {currentLang.language === 'ESP' ?
                            'Cotiza tu Proyecto'
                            :
                            'Get a quote'
                        }
                    </Button>
                </Container>
                <Container fluid 
                    id='us-section'
                    className='position-relative px-5 mt-2 pt-4'
                >
                    <Row>
                        <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fs-2 fw-bold mb-2`}>
                            {currentLang.language === 'ESP' ?
                                'Sobre nosotros'
                                :
                                'About us'
                            }
                        </span>
                    </Row>
                    <Row className='my-4'>
                        <Col md='6'>
                            <span className={`${darkMode ? 'text-light' : 'text-dark'} fs-4 lh-lg`}>
                                {currentLang.language === 'ESP' ?
                                    <span>
                                        Somos una empresa desarrolladora de software (aplicaciones móbiles, páginas web, algoritmos) con un equipo de profesionales altamente capacitados y actualizados para poder brindar resultados con el mejor rendimiento posible a un precio justo.
                                        <br/>
                                        Cada uno de nuestros miembros de esta organización es contratado sabiendo que brindará la exigente calidad que &nbsp;
                                        <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fw-bold`}>
                                            “Advanced Code SE”
                                        </span>
                                        &nbsp; ofrece para cada uno de sus productos.
                                    </span>  
                                    :
                                    <span>
                                        We are a software developing company (mobile applications, web pages, algorithms) with a team of highly capable professionals able to bring results with the best possible performance at a fair price.
                                        <br/>
                                        Each one of our members is hired knowing that they will be capable of bringing the high quality that &nbsp;
                                        <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fw-bold`}>
                                            “Advanced Code SE”
                                        </span>
                                        &nbsp; offers for all of our producs.
                                    </span>
                                }
                                <br/>
                                
                                 
                            </span>
                        </Col>
                        <Col md="6">
                            <img className='p-0 img-fluid border border-primary border-3 prevent-select'
                                draggable={false}
                                src={Meeting}
                                alt='A photography of a meeting in an office with glass dors, there are three people working on their laptops'
                            />
                        </Col>
                    </Row>
                    <div className='anchor' id='us'></div>
                </Container>
                <Container fluid id='collaborators-section' className='position-relative px-5 mt-2'>
                    <Row>
                        <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fs-2 fw-bold my-2`}>
                            {currentLang.language === 'ESP' ?
                                'Empresas colaboradoras'
                                :
                                'Our collaborators'
                            }
                        </span>
                    </Row>
                    <CarouselHome
                        slidesContent={[
                            {
                                title: 'Trenning',
                                image: TrenningLogo,
                                description: currentLang.language === 'ESP' ?
                                [
                                    'Servicios de capacitacion y selección de personal.',
                                    'Empresa de capacitación especializada en cursos alineados en NOMS STPS.',
                                    'Ubicada en Av. industrias 896 Int. E, San Luis Potosí, Mexico, 78399.',
                                ]
                                :
                                [
                                    'Training and personnel selection services.',
                                    'Training company specialized in courses aligned with NOMS STPS.',
                                    'Adress: Industrias 896 Int. E, San Luis Potosí, Mexico, 78399.'
                                ],
                                contact: 'treningslp@gmail.com'
                            },
                            {
                                title: 'Rentefirme',
                                image: RentFirmeLogo,
                                description: currentLang.language === 'ESP' ?
                                [
                                    'Pólizas de garantia.',
                                    'Empresa que cuenta con 8 años de experiencia garantizando una renta/venta segura de tu inmueble y desocupación del mismo en caso de ser necesario mediante pólizas de arrendamiento.',
                                ]
                                :
                                [
                                    'Warranty policies',
                                    'Company with 8 years of experience guaranteeing a safe sale/rental of your property and vacating it if necessary trough leasing policies'
                                ],
                                contact: 'rentefirme@gmail.com'
                            }
                        ]}
                    />
                    <div className='anchor' id='collaborators'></div>
                </Container>
                <Container fluid id='projects-section' className='position-relative px-5 mt-2'>
                    <Row>
                        <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fs-2 fw-bold my-2`}>
                            {currentLang.language === 'ESP' ?
                                'Proyectos'
                                :
                                'Our projects'
                            }
                        </span>
                    </Row>
                    <CarouselHome
                        textPosition='left'
                        slidesContent={[
                            {
                                title: 'Trenning',
                                image: TrenningLogo,
                                description: currentLang.language === 'ESP' ? 
                                [
                                    'Para esta empresa se desarrolló una aplicación de escritorio enfocada en la centralización de usuarios para la capacitación de trabajadores en areas específicas de la industria.',
                                    'Esta aplicación está desarrollada para windows y proyectada para su posible funcionamiento en dispositivos móviles unificando su base de datos.'
                                ]
                                :
                                [
                                    'For this company we developed a desktop application focused on the centralization of users for the training of workers in specific areas of the industry.',
                                    'This application is developed for Windows PCs and designed to be functional in mobile devices in the future, using the same database'
                                ]
                            },
                            {
                                title: 'Rentefirme',
                                image: InmomatchLogo,
                                description: currentLang.language === 'ESP' ? 
                                [
                                    'Para esta empresa se desarrolló una plataforma web y aplicación móvil enfocada en la centralización de propiedades para una experiencia a otro nivel.',
                                    'Esta aplicación está desarrollada como página web y soportada para su funcionamiento en dispositivos móviles con una base de datos unificada.'
                                ]
                                :
                                [
                                    'For this company we developed a web and mobile application focused on the centralization of real state properties, providing an experience on another level.',
                                    'This application is developed as a web page and mobile application with a unified database.'
                                ]
                            }
                        ]}
                    />
                    <div className='anchor' id='projects'></div>
                </Container>
                <Container fluid id='contact-section' className='position-relative px-5 mt-2'>
                    <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fs-2 fw-bold my-2`}>
                        {currentLang.language === 'ESP' ?
                            'Contacto'
                            :
                            'Contact'
                        }
                    </span>
                    <br/>
                    <p className='fs-4 mb-0 pb-5'>
                        <span className={darkMode ? 'text-light' : 'text-dark'}>
                            {currentLang.language === 'ESP' ?
                                'Si quieres hacer una cotizacion para realizar una plataforma/App movil manda mensaje a este correo:'
                                :
                                'If you wish to get a quote for any application, please contact us using this email:'
                            }
                        </span>
                        <br/>
                        <a
                            className={darkMode ? 'text-primary-dark' : 'text-primary'}
                            href='mailto:josuearredondo@advancedcodese.com'
                        >
                            josuearredondo@advancedcodese.com
                        </a>
                    </p>
                    <div className='anchor' id='contact'></div>
                </Container>
            </Container>
        </Container>
    )
}

export default HomePage;