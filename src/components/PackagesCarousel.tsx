import { useContext, useState } from "react";
import { Carousel, CarouselIndicators, CarouselItem } from "reactstrap";

import { UserContextType } from "@types";
import { UserContext } from "context";

import 'scss/css/style.css';
import 'styles/PackagesCarousel.css';

type PackagesCarouselProps = {
    items: JSX.Element[];
}

const PackagesCarousel = ({items}: PackagesCarouselProps): JSX.Element => {
    const { darkMode } = useContext(UserContext) as UserContextType;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = items.map((item, key) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={key}
        >
            {item}
        </CarouselItem>
    ))

    return (
        <Carousel
            id='packages-carousel'
            dark={!darkMode}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={slides}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
        </Carousel>
    )
}

export default PackagesCarousel;