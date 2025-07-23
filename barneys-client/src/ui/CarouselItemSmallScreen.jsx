import { formatCurrency } from '../utils/helpers/';
import { useNavigate } from 'react-router-dom';
import Image2 from '../assets/xl&lg.png';

function CarouselItem({ data, swiped, ...props }) {
  const navigate = useNavigate();

  if (!data) return null;
  const { imageUrl, name, unitPrice } = data;

  return (
    <div className="flex flex-col items-center space-y-1 2xl:hidden">
      <div className="relative -top-25 h-[510px] w-[510px] object-none lg:h-[600px] lg:w-[600px] xl:h-[600px] xl:w-[600px]">
        <img src={Image2} alt="" />
      </div>
      <div
        className="absolute bottom-120 h-[325px] w-[325px] lg:bottom-133 lg:h-[380px] lg:w-[380px] xl:bottom-133 xl:h-[380px] xl:w-[380px]"
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
      <p className="mb-8 text-4xl font-semibold lg:text-6xl xl:text-6xl">
        {name}
      </p>
      <p className="text-3xl font-semibold lg:text-5xl xl:text-5xl">
        {formatCurrency(unitPrice)}
      </p>
    </div>
  );
}

export default CarouselItem;
