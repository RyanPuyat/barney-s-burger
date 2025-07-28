import { formatCurrency } from '../utils/helpers/';
import { useNavigate } from 'react-router-dom';
import Image2 from '../assets/xl&lg.png';
import Button from './Button';

function CarouselItem({ data, swiped, ...props }) {
  const navigate = useNavigate();

  if (!data) return null;
  const { imageUrl, name, unitPrice } = data;

  return (
    <div className="flex flex-col items-center 2xl:hidden">
      <div className="relative top-10 h-[450px] w-[450px] object-none md:top-5 lg:top-[5px] lg:h-[600px] lg:w-[600px] xl:h-[600px] xl:w-[600px]">
        <img src={Image2} alt="" />
        <div
          className="absolute bottom-15 left-18 h-[300px] w-[300px] md:bottom-15 lg:bottom-20 lg:left-25 lg:h-[400px] lg:w-[400px] xl:bottom-20 xl:h-[400px] xl:w-[400px]"
          {...props}
        >
          <img
            src={imageUrl}
            alt={name}
            draggable="false"
            onClick={() => {
              if (swiped) return;
              navigate('/orderPage');
            }}
          />
        </div>
        <p className="absolute left-20 flex h-16 w-75 items-center justify-center rounded-tl-lg rounded-br-lg border-2 border-dashed border-yellow-500 bg-orange-100 p-2 text-2xl font-semibold whitespace-nowrap lg:bottom-5 lg:left-90 lg:w-90 lg:text-3xl lg:whitespace-nowrap xl:w-90 2xl:whitespace-nowrap">
          {name}
          {'   '}
          <span className="ml-2 text-yellow-500">
            {' '}
            {formatCurrency(unitPrice)}
          </span>
        </p>
        <div className="xl: absolute -bottom-[126px] left-42 z-150 flex items-center justify-center md:-bottom-[138px] lg:-bottom-[40px] lg:left-120 xl:-bottom-[40px] xl:left-120">
          <Button
            size="md"
            shape="pill"
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-orange-600"
            onClick={() => navigate('/orderPage')}
          >
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
