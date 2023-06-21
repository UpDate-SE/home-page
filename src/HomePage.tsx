import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { CaorIncLogo, InmomatchLogo, KeepCommunity, MakeKnown, Marketing1, Marketing2, Marketing3, MarketingExpert, Meeting, Networks1, Networks2, Networks3, RentFirmeLogo, StarterGraph, TeamProcess, TeamProcessSM, TrenningLogo, ZoomerChatLogo } from 'assets';
import { CarouselHome, FooterHome, MarketingPlans, NavBarHome, PackageInfo, PackagesCarousel } from 'components';
import { UserContext } from 'context';
import { UserContextType, WindowDimensions } from '@types';

import 'scss/css/style.css';
import 'styles/HomePage.css';

const HomePage = () => {
    const { darkMode, currentLang } = useContext(UserContext) as UserContextType; 
    const [windowSize, setWindowSize] = useState<WindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight,
    });
        
    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);

    return (
        <Container fluid 
            className={`p-0 g-0 ${darkMode ? 'bg-dark' : 'bg-light'} overflow-hidden`}
            id='home-page'
        >
            <NavBarHome/>
            <Container fluid id='page-content #' className='p-0'>
                <Container fluid id='image-top'
                    className='d-flex flex-column align-items-center justify-content-center user-select-none'
                    style={
                        windowSize.width > 768 ?
                        {backgroundImage: `url(${TeamProcess})`}
                        :
                        {backgroundImage: `url(${TeamProcessSM})`}
                    }
                >
                    <span className='w-50 text-light fs-1 fw-bold text-center'>
                        {currentLang.language === 'ESP' ?
                            '¿Tienes alguna aplicación que quieras hacer realidad y no sabes cómo crearla?'
                            :
                            'Do you have a project you want to make and you don\'t know how?'
                        }
                    </span>
                    <a href='mailto:josuearredondo@advancedcodese.com'
                        className='text-decoration-none'
                    >
                        <Button color={darkMode ? 'primary-dark' : 'primary'} 
                            className='fw-bold text-uppercase p-3 mt-5
                                d-flex align-items-center
                            '
                        >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className='me-2 fs-3'
                                />
                                {currentLang.language === 'ESP' ?
                                    'Cotiza tu Proyecto'
                                    :
                                    'Get a quote'
                                }
                        </Button>
                    </a>
                </Container>
                <Container fluid id='development'
                    className='position-relative px-sm-5 mt-2 pt-4'
                >
                    <span
                        className={`${darkMode ? 'text-primary-dark' : 'text-primary'} 
                            fs-2 fw-bold mb-2 section-title`}
                    >
                        {currentLang.language === 'ESP' ?
                            'Desarrollo todo en uno'
                            :
                            'All-in-one development'
                        }
                    </span>
                    <PackageInfo
                        title={currentLang.language === 'ESP' ?
                            'Paquete iniciador digital'
                            :
                            'Digital startup'
                        }
                        perks={
                            currentLang.language === 'ESP' ?
                            [
                                'Página web sencilla.',
                                'De uno a tres correos empresariales.',
                                'Hosting de la página web.',
                                'Dominio personalizado.',
                                'Paquete "Presencia" de Marketing.',
                                'Paquete "Presencia" de Redes.',
                                'Tarjeta inteligente personal.'
                            ]
                            :
                            [
                                'Simple web page.',
                                '1-3 company emails.',
                                'Web page hosting.',
                                'Customized domain.',
                                'Includes "Presence" Marketing package.',
                                'Includes "Presence" Networks package.',
                                'Personal smart card.'
                            ]
                        }
                        image={StarterGraph}
                        price={'$10,000 MXN'}
                    />
                    <div className='anchor' id='plans'></div>
                </Container>
                <Container fluid id='content'
                    className='px-sm-5 mt-2 pt-3'
                >
                    <span
                        className={`${darkMode ? 'text-primary-dark' : 'text-primary'} 
                            fs-2 fw-bold mb-2 section-title`}
                    >
                        {currentLang.language === 'ESP' ?
                            'Paquetes de contenido'
                            :
                            'Content packages'
                        }
                    </span>
                    <PackagesCarousel
                        items={[
                            <PackageInfo
                                title={currentLang.language === 'ESP' ?
                                    'Paquete "Date a conocer"'
                                    :
                                    '"Make yourself known" Package'
                                }
                                perks={
                                    currentLang.language === 'ESP' ?
                                    [
                                        'Plan 1 de Marketing: SEO en pagina web.',
                                        'Plan 1 de Redes sociales: 3 publicaciones en Instagram y Facebook a la semana y análisis de resultados (12 publicaciones al mes).',
                                        'En el primer mes se hace un estudio de la marca con un costo de $500 MXN.'
                                    ]
                                    :
                                    [
                                        'Marketing plan 1: Web page SEO.',
                                        'Social Networks plan 1: 3 Instagram and Facebook posts a week and results analysis (12 posts a month).',
                                        'During the first month, a brand study is made with an extra cost of $500 MXN'
                                    ]
                                }
                                image={MakeKnown}
                                price='$4,500 MXN/mes'
                            />,
                            <PackageInfo
                                title={currentLang.language === 'ESP' ?
                                    'Paquete "Mantener Comunidad"'
                                    :
                                    '"Keeping the Community" Package'
                                }
                                perks={
                                    currentLang.language === 'ESP' ?
                                    [
                                        'Plan 2 de Marketing: SEO en pagina web y palabras clave (analytics).',
                                        'Plan 2 de Redes sociales: 5 publicaciones en Instagram y Facebook a la semana y análisis de resultados (20 publicaciones al mes).',
                                        'En el primer mes se hace un estudio de la marca con un costo de $500 MXN.'
                                    ]
                                    :
                                    [
                                        'Marketing plan 2: Web page SEO and keywords (analytics).',
                                        'Social Networks plan 1: 5 Instagram and Facebook posts a week and results analysis (20 posts a month).',
                                        'During the first month, a brand study is made with an extra cost of $500 MXN'
                                    ]
                                }
                                image={KeepCommunity}
                                price='$8,000* MXN/mes'
                            />,
                            <PackageInfo
                                title={currentLang.language === 'ESP' ?
                                    'Paquete "Experto del Marketing"'
                                    :
                                    '"Marketing Expert" Package'
                                }
                                perks={
                                    currentLang.language === 'ESP' ?
                                    [
                                        'Plan 3 de Marketing: SEO en pagina web, palabras clave y SEM (500 destinados para campañas de anuncios).',
                                        'Plan 3 de Redes sociales: 10 publicaciones en Instagram y Facebook a la semana y análisis de resultados (40 publicaciones al mes).',
                                        'En el primer mes se hace un estudio de la marca con un costo de $500 MXN.'
                                    ]
                                    :
                                    [
                                        'Marketing plan 2: Web page SEO, keywords and SEM (500 allocated towards ad campaings).',
                                        'Social Networks plan 2: 10 Instagram and Facebook posts a week and results analysis (40 posts a month).',
                                        'During the first month, a brand study is made with an extra cost of $500 MXN'
                                    ]
                                }
                                image={MarketingExpert}
                                price='$13,000* MXN/mes'
                            />
                        ]}
                    />
                </Container>
                <Container fluid id='marketing'
                    className='px-sm-5 mt-3 pt-2'
                >
                    <span 
                        className={`${darkMode ? 'text-primary-dark' : 'text-primary'}
                            fs-2 fw-bold my-2 section-title`
                        }
                    >
                        {currentLang.language === 'ESP' ?
                            'Marketing en páginas web'
                            :
                            'Web page marketing'
                        }
                    </span>
                    <MarketingPlans
                        name='Marketing'
                        plans={[
                            {
                                image: Marketing1,
                                perks: currentLang.language === 'ESP' ? 
                                [
                                    'SEO en página web.'
                                ]
                                :
                                [
                                    'SEO in web page.'
                                ],
                                price: '$2,500* MXN/mes'
                            },
                            {
                                image: Marketing2,
                                perks: currentLang.language === 'ESP' ? 
                                [
                                    'SEO en página web.',
                                    'Palabras clave.'
                                ]
                                :
                                [
                                    'SEO in web page.',
                                    'Keywords.'
                                ],
                                price: '$3,500* MXN/mes'
                            },
                            {
                                image: Marketing3,
                                perks: currentLang.language === 'ESP' ? 
                                [
                                    'SEO en página web.',
                                    'Palabras clave.',
                                    'SEM (500 para anuncios).'
                                ]
                                :
                                [
                                    'SEO in web page',
                                    'Keywords.',
                                    'SEM (500 for ads).'
                                ],
                                price: '$4,500* MXN/mes'
                            }
                        ]}
                    />
                </Container>
                <Container fluid id='social-networks'
                    className='px-sm-5 mt-3 pt-2'
                >
                    <span 
                        className={`${darkMode ? 'text-primary-dark' : 'text-primary'}
                            fs-2 fw-bold my-2 section-title`
                        }
                    >
                        {currentLang.language === 'ESP' ?
                            'Marketing en redes sociales'
                            :
                            'Social networks marketing'
                        }
                    </span>
                    <MarketingPlans
                        name={currentLang.language === 'ESP' ? 'Redes' : 'Networks'}
                        plans={[
                            {
                                image: Networks1,
                                perks: currentLang.language === 'ESP' ? 
                                [
                                    '3 publicaciones en Facebook e Instagram a la semana.',
                                    'Análisis de resultados.'
                                ]
                                :
                                [
                                    '3 Facebook and Instagram posts a week.',
                                    'Analysis of results.'
                                ],
                                price: '$2,500* MXN/mes'
                            },
                            {
                                image: Networks2,
                                perks: currentLang.language === 'ESP' ? 
                                [
                                    '5 publicaciones en Facebook e Instagram a la semana.',
                                    'Análisis de resultados.'
                                ]
                                :
                                [
                                    '5 Facebook and Instagram posts a week.',
                                    'Analysis of results.'
                                ],
                                price: '$5,000* MXN/mes'
                            },
                            {
                                image: Networks3,
                                perks: currentLang.language === 'ESP' ? 
                                [
                                    '10 publicaciones en Facebook e Instagram a la semana.',
                                    'Análisis de resultados.'
                                ]
                                :
                                [
                                    '10 Facebook and Instagram posts a week.',
                                    'Analysis of results.'
                                ],
                                price: '$9,000* MXN/mes'
                            }
                        ]}
                    />
                </Container>
                <Container fluid id='us-section'
                    className='position-relative px-sm-5 mt-2 pt-4'
                >
                    <Row>
                        <span 
                            className={`${darkMode ? 'text-primary-dark' : 'text-primary'} 
                                fs-2 fw-bold mb-2 section-title`}
                        >
                            {currentLang.language === 'ESP' ?
                                'Sobre nosotros'
                                :
                                'About us'
                            }
                        </span>
                    </Row>
                    <Row className='my-sm-4'>
                        <Col md='6'>
                            <span 
                                className={`${darkMode ? 'text-light' : 'text-dark'} fs-4 lh-lg`}
                                id='about-us'
                            >
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
                <Container fluid 
                    id='collaborators-section'
                    className='position-relative px-sm-5 mt-3'
                >
                    <Row>
                        <span 
                            className={`${darkMode ? 'text-primary-dark' : 'text-primary'}
                                fs-2 fw-bold my-2 section-title`
                            }
                        >
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
                                title: 'Caor Inc',
                                image: CaorIncLogo,
                                description: currentLang.language === 'ESP' ?
                                [
                                    'Startup enfocada en el negocio de las redes sociales con un proyecto innovador para la epoca utilizando un complejo sistema de emparejamiento con inteligencia artificial.'
                                ]
                                :
                                [
                                    'Startup focused on the business of social networks with an innovative project at the time using a complex matchmaking system with artificial intelligence.'
                                ],
                                contact: 'contact@caorinc.com'
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
                                    'Company with 8 years of experience guaranteeing a safe sale/rental of your property and vacating it if necessary trough leasing policies.'
                                ],
                                contact: 'rentefirme@gmail.com'
                            },
                        ]}
                    />
                    <div className='anchor' id='collaborators'></div>
                </Container>
                <Container fluid id='projects-section' className='position-relative px-sm-5 mt-2'>
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
                                    'Para esta empresa se desarrolló una aplicación de escritorio enfocada en la centralización de usuarios para la capacitación de trabajadores en áreas específicas de la industria.',
                                    'Esta aplicación está desarrollada para Windows y proyectada para su posible funcionamiento en dispositivos móviles unificando su base de datos.'
                                ]
                                :
                                [
                                    'For this company we developed a desktop application focused on the centralization of users for the training of workers in specific areas of the industry.',
                                    'This application is developed for Windows PCs and designed to be functional in mobile devices in the future, using the same database.'
                                ]
                            },
                            {
                                title: 'Zoomer.chat',
                                image: ZoomerChatLogo,
                                description: currentLang.language === 'ESP' ?
                                [
                                    'Para esta empresa se desarrolló una red social optimizada tanto como aplicacion mobil como plataforma web en la que se buscaba innovar la comunicación de video llamadas mediante un sistema de traducción automática en tiempo real.',
                                    'El proyecto llegó a concluirse pero está a la espera de ver la luz a un público general.'
                                ]
                                :
                                [
                                    'For this company, we developed an optimized social network, we made it available as a mobile application and a web platform in which we sought to innovate video call communication using a live, automatic, in real time translation system.',
                                    'The project came to an end but is waiting to see the light to a general public.'
                                ]
                            },
                            {
                                title: 'Inmomatch',
                                image: InmomatchLogo,
                                description: currentLang.language === 'ESP' ? 
                                [
                                    'Se desarrolló una plataforma web y aplicación móvil enfocada en la centralización de propiedades para una experiencia a otro nivel.',
                                    'Esta aplicación está desarrollada como página web y soportada para su funcionamiento en dispositivos móviles con una base de datos unificada.'
                                ]
                                :
                                [
                                    'We developed a web and mobile application focused on the centralization of real state properties, providing an experience on another level.',
                                    'This application is developed as a web page and mobile application with a unified database.'
                                ]
                            }
                        ]}
                    />
                    <div className='anchor' id='projects'></div>
                </Container>
                <Container fluid id='contact-section' className='position-relative px-sm-5 mt-sm-2'>
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
                                'Si quieres hacer una cotización para realizar una plataforma/app móvil manda mensaje a este correo:'
                                :
                                'If you wish to get a quote for any application, please contact us using this email:'
                            }
                        </span>
                        <br/>
                        <a
                            className={`${darkMode ? 'text-primary-dark' : 'text-primary'} text-break`}
                            id='bottom-email'
                            href='mailto:josuearredondo@advancedcodese.com'
                        >
                            josuearredondo@advancedcodese.com
                        </a>
                    </p>
                    <div className='anchor' id='contact'></div>
                </Container>
            </Container>
            <FooterHome/>
        </Container>
    )
}

export default HomePage;