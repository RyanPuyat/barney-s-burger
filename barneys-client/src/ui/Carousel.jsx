import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import CarouselItem from './CarouselItem';
import Button from './Button';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiped, setSwiped] = useState(false);

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
      </div>
      <div className="absolute right-[5%] -bottom-[59%] m-4 flex gap-2">
        <Button
          size="lg"
          variant="secondary"
          shape="rectangle"
          className="align-bottom"
          onClick={prevSlide}
        >
          <FaLessThan className="text-3xl" />
        </Button>
        <Button
          size="lg"
          variant="secondary"
          shape="rectangle"
          className="align-bottom"
          onClick={nextSlide}
        >
          <FaGreaterThan className="text-3xl" />
        </Button>
      </div>
      <div className="absolute -bottom-[55%] left-1/2 flex -translate-x-75 transform gap-2">
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
                  ? 'h-2 w-10 rounded-full bg-orange-500'
                  : 'h-2 w-4 rounded-full bg-yellow-500'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
