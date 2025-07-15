import { formatCurrency } from '../utils/helpers/';
import { useNavigate } from 'react-router-dom';

function CarouselItem({ data, swiped, ...props }) {
  const navigate = useNavigate();

  if (!data) return null;
  const { imageUrl, name, unitPrice } = data;

  return (
    <div className="relative mt-4 ml-6">
      <div {...props}>
        <img
          src={imageUrl}
          alt={name}
          className="carousel-img h-120 w-120 touch-pan-x transition-all duration-300 ease-in-out select-none"
          draggable="false"
          onClick={() => {
            if (swiped) return;
            navigate('/orderPage');
          }}
        />
      </div>
      <p className="absolute -bottom-[20%] left-[30%] m-4 w-[50%] truncate p-4 text-left text-5xl font-semibold text-orange-100 transition-all duration-300 ease-in-out">
        {name}
      </p>
      <p className="absolute -bottom-[30%] left-[30%] m-4 flex p-4 text-4xl font-semibold text-orange-100 transition-all duration-300 ease-in-out">
        {formatCurrency(unitPrice)}
      </p>
    </div>
  );
}

export default CarouselItem;
