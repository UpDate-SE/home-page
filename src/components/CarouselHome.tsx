import { useContext, useEffect, useState } from "react";
import { Carousel, CarouselIndicators, CarouselItem, Col, Row } from "reactstrap";

import { UserContext } from "context";
import { UserContextType, WindowDimensions } from "@types";

import 'scss/css/style.css';
import 'styles/CarouselHome.css';

interface CarouselSlide {
    title: string;
    image: string;
    description: Array<string>;
    contact?: string;
}

interface CarouselHomeProps {
    slidesContent: Array<CarouselSlide>;
    textPosition?: 'left' | 'right' 
    args?: any
}

const CarouselHome = ({slidesContent, textPosition='right', ...args}: CarouselHomeProps):JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType; 

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);

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

    const nextSlide = () => {
        if(animating) return;
        const nextIndex = activeIndex === slidesContent.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previousSlide = () => {
        if(animating) return;
        const previousIndex = activeIndex === 0 ? slidesContent.length - 1 : activeIndex - 1;
        setActiveIndex(previousIndex);
    }

    const goToIndex = (newIndex: number) => {
        if(animating) return;
        setActiveIndex(newIndex);
    }

    const slides = slidesContent.map((content, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <Row>
                    <Col md='5'
                        className={
                            `order-2 ${textPosition === 'left' ? 'text-center': ''}
                            ${windowSize.width < 768 ? 'text-center' : ''}
                        `}
                    >
                        <img 
                            className='p-0 w-75 img-fluid border border-primary border-3 user-select-none'
                            draggable={false}
                            src={content.image}
                            alt='logo'
                        />
                    </Col>
                    <Col md='7'
                        className={
                        `order-${textPosition === 'left' ? '1' : '3'}
                        ${textPosition === 'left' ? 'text-content-large' : 'text-content'}
                        h-sm-fit-content`}
                    >
                        <p className={`${darkMode ? 'text-light' : 'text-dark'} fs-4 lh-lg`}>
                            <span className='fw-bold'>{content.title}</span>
                            <br/>
                            {content.description.map((paragraph, index) => {
                                return(
                                    <span key={index}>{paragraph} <br/> </span>
                                )
                            })}
                            {
                                content.contact ? 
                                <span>
                                    Contacto:&nbsp;
                                    <a className={`${darkMode ? 'text-primary-dark' : 'text-primary'} opacity-75-hover`}
                                        href={`mailto:${content.contact}`}
                                    >
                                        {content.contact}
                                    </a>
                                </span>
                                :
                                <></>
                            }
                        </p>
                    </Col>
                </Row>
            </CarouselItem>
        )
    })

    return (
        <Carousel
            dark = {!darkMode}
            activeIndex={activeIndex}
            next={nextSlide}
            previous={previousSlide}
            className='mb-md-4 margin-bottom-mobile'
            {...args}
        >
            <CarouselIndicators
                style={{
                    bottom: '-50px'
                }}
                items={slidesContent}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                className={`${textPosition === 'left' ? 'bottom-sm-large' : 'bottom-sm'}`}
            />
            {slides}
        </Carousel>
    );
}

CarouselHome.defaultProps = {
    slides: [
        {
            title: 'company title',
            image: '...',
            description: ['text','text','text'],
            contact: 'contact@contact.com'
        },
        {
            title: 'company title',
            image: '...',
            description: ['text','text','text'],
            contact: 'contact@contact.com'
        },
        {
            title: 'company title',
            image: '...',
            description: ['text','text','text'],
            contact: 'contact@contact.com'
        }
    ]
}

export default CarouselHome;