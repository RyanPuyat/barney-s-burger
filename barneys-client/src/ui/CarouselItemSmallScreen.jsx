import { formatCurrency } from '../utils/helpers/';
import { useNavigate } from 'react-router-dom';
import Image2 from '../assets/xl&lg.png';

function CarouselItem({ data, swiped, ...props }) {
  const navigate = useNavigate();

  if (!data) return null;
  const { imageUrl, name, unitPrice } = data;

  return (
    <div className="flex flex-col items-center 2xl:hidden">
      <div className="relative top-15 h-[450px] w-[450px] object-none md:top-5 lg:top-5 lg:h-[600px] lg:w-[600px] xl:h-[600px] xl:w-[600px]">
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
        <p className="absolute left-28 flex h-16 w-60 items-center justify-center rounded-tl-lg rounded-br-lg border-2 border-dashed border-yellow-500 bg-orange-100 p-2 text-2xl font-semibold whitespace-nowrap lg:bottom-5 lg:left-90 lg:w-70 lg:text-3xl lg:whitespace-nowrap xl:w-70 2xl:whitespace-nowrap">
          {name}
        </p>
        <p className="absolute -bottom-30 left-48 rounded-tl-lg rounded-br-lg border-2 border-dashed border-yellow-500 bg-orange-100 p-2 text-xl font-semibold lg:-bottom-10 lg:left-110">
          {formatCurrency(unitPrice)}
        </p>
      </div>
    </div>
  );
}

export default CarouselItem;
