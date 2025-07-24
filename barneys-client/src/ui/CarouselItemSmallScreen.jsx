import { formatCurrency } from '../utils/helpers/';
import { useNavigate } from 'react-router-dom';
import Image2 from '../assets/xl&lg.png';

function CarouselItem({ data, swiped, ...props }) {
  const navigate = useNavigate();

  if (!data) return null;
  const { imageUrl, name, unitPrice } = data;

  return (
    <div className="flex flex-col items-center -space-y-10 2xl:hidden">
      <div className="relative -top-25 h-[450px] w-[450px] object-none lg:h-[600px] lg:w-[600px] xl:h-[600px] xl:w-[600px]">
        <img src={Image2} alt="" />
      </div>
      <div
        className="absolute bottom-133 h-[300px] w-[300px] lg:bottom-145 lg:h-[400px] lg:w-[400px] xl:bottom-145 xl:h-[400px] xl:w-[400px]"
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
      <p className="mb-4 rounded-tl-lg rounded-br-lg border-2 border-dashed border-yellow-500 bg-orange-100 p-6 text-4xl font-semibold lg:text-6xl xl:text-6xl">
        {name}
      </p>
      <p className="rounded-tl-lg rounded-br-lg border-2 border-dashed border-yellow-500 bg-orange-100 p-2 text-3xl font-semibold lg:text-5xl xl:text-5xl">
        {formatCurrency(unitPrice)}
      </p>
    </div>
  );
}

export default CarouselItem;
