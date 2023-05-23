import { useContext } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import { InmomatchLogo, Meeting, RentFirmeLogo, TeamProcess, TrenningLogo } from 'assets';

import { CarouselHome, NavBarHome } from 'components';
import { Context, ContextType } from 'context';

import 'scss/css/style.css';
import 'styles/HomePage.css';

const HomePage = () => {
    const { darkMode } = useContext(Context) as ContextType; 

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
                    <span className='w-50 text-light fs-1 fw-bold text-center'>¿Tienes alguna aplicación que quieras hacer realidad y no sabes cómo crearla?</span>
                    <Button color={darkMode ? 'primary-dark' : 'primary'} 
                        className='fw-bold text-uppercase p-3 mt-5'>
                        Cotiza tu Proyecto
                    </Button>
                </Container>
                <Container fluid 
                    id='us-section'
                    className='position-relative px-5 mt-2 pt-4'
                >
                    <Row>
                        <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fs-2 fw-bold mb-2`}>
                            Sobre nosotros
                        </span>
                    </Row>
                    <Row className='my-4'>
                        <Col md='6'>
                            <span className={`${darkMode ? 'text-light' : 'text-dark'} fs-4 lh-lg`}>
                                Somos una empresa desarrolladora de software (Aplicaciones móbiles, páginas web y algoritmos) con un equipo de profesionales altamente capacitados y actualizados para poder brindar resultados con el mejor rendimiento posible a un precio justo.
                                Cada uno de nuestros miembros de esta organización es contratado sabiendo que brindará la exigente calidad que
                                <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fw-bold`}> “Advanced Code SE”</span> ofrece para cada uno de sus productos.
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
                            Empresas colaboradoras
                        </span>
                    </Row>
                    <CarouselHome
                        slidesContent={[
                            {
                                title: 'Trenning',
                                image: TrenningLogo,
                                description: [
                                    'Servicios de capacitacion y selección de personal.',
                                    'Empresa de capacitación especializada en cursos alineados en NOMS STPS.',
                                    'Ubicada en Av. industrias 896 Int. E, San Luis Potosí, Mexico, 78399.',
                                ],
                                contact: 'treningslp@gmail.com'
                            },
                            {
                                title: 'Rentefirme',
                                image: RentFirmeLogo,
                                description: [
                                    'Pólizas de garantia.',
                                    'Empresa que cuenta con 8 años de experiencia garantizando una renta/venta segura de tu inmueble y desocupación del mismo en caso de ser necesario mediante pólizas de arrendamiento.',
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
                            Proyectos
                        </span>
                    </Row>
                    <CarouselHome
                        textPosition='left'
                        slidesContent={[
                            {
                                title: 'Trenning',
                                image: TrenningLogo,
                                description: [
                                    'Para esta empresa se desarrolló una aplicación de escritorio enfocada en la centralización de usuarios para la capacitación de trabajadores en areas específicas de la industria.',
                                    'Esta aplicación está desarrollada para windows y proyectada para su posible funcionamiento en dispositivos móviles unificando su base de datos.'
                                ]
                            },
                            {
                                title: 'Rentefirme',
                                image: InmomatchLogo,
                                description: [
                                    'Para esta empresa se desarrolló una plataforma web y aplicación móvil enfocada en la centralización de propiedades para una experiencia a otro nivel.',
                                    'Esta aplicación está desarrollada como página web y soportada para su funcionamiento en dispositivos móviles con una base de datos unificada.'
                                ]
                            }
                        ]}
                    />
                    <div className='anchor' id='projects'></div>
                </Container>
                <Container fluid id='contact-section' className='position-relative px-5 mt-2'>
                    <span className={`${darkMode ? 'text-primary-dark' : 'text-primary'} fs-2 fw-bold my-2`}>
                        Contacto
                    </span>
                    <br/>
                    <p className='fs-4 mb-0 pb-5'>
                        <span className={darkMode ? 'text-light' : 'text-dark'}>
                            Si quieres hacer una cotizacion para realizar una plataforma/App movil manda mensaje a este correo:
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