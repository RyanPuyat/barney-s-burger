import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import CarouselItem from './CarouselItem';
import CarouselItemSmallScreen from './CarouselItemSmallScreen';
import Button from './Button';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

function Carousel({ data }) {
  const [swiped, setSwiped] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % data?.length);
  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + data?.length) % data?.length);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwiped(true);
      nextSlide();
    },
    onSwipedRight: () => {
      setSwiped(true);
      prevSlide();
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (swiped) {
      const timer = setTimeout(() => setSwiped(false), 200);
      return () => clearTimeout(timer);
    }
  }, [swiped]);

  return (
    <div className="relative">
      <div {...handlers}>
        <CarouselItem data={data[currentIndex]} {...handlers} swiped={swiped} />
        <CarouselItemSmallScreen
          data={data[currentIndex]}
          {...handlers}
          swiped={swiped}
        />
      </div>
      <div className="relative flex h-[200px] items-center justify-center space-y-2 2xl:block 2xl:h-[400px]">
        <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 transform gap-2 lg:bottom-11 2xl:bottom-[37%] 2xl:-translate-x-75">
          {data?.map((_, idx) => {
            const distance = Math.abs(currentIndex - idx);
            if (distance > 1) return null;

            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'h-1 w-4 rounded-full bg-orange-500 lg:h-2 lg:w-10 xl:h-2 xl:w-10 2xl:h-2 2xl:w-10'
                    : 'h-1 w-2 rounded-full bg-yellow-500 lg:h-2 lg:w-4 xl:h-2 xl:w-4 2xl:h-2 2xl:w-4'
                }`}
              />
            );
          })}
        </div>
        <div className="absolute bottom-5 m-4 hidden gap-2 lg:bottom-20 lg:flex 2xl:right-[5%] 2xl:bottom-[35%]">
          <Button
            variant="secondary"
            shape="rectangle"
            className="px-3 py-1.5 text-sm lg:px-6 lg:py-4 xl:px-6 xl:py-4 2xl:px-6 2xl:py-4 2xl:text-xl"
            onClick={prevSlide}
          >
            <FaLessThan className="text-xl 2xl:text-3xl" />
          </Button>
          <Button
            variant="secondary"
            shape="rectangle"
            className="px-3 py-1.5 text-sm lg:px-6 lg:py-4 xl:px-6 xl:py-4 2xl:px-6 2xl:py-4 2xl:text-xl"
            onClick={nextSlide}
          >
            <FaGreaterThan className="text-xl 2xl:text-3xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
