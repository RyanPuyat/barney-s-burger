import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ burgerId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="mt-10 flex items-center gap-2 md:gap-3">
      <Button
        className="transition-all duration-300 ease-in-out hover:scale-105"
        size="round"
        shape="pill"
        onClick={() => dispatch(decreaseItemQuantity(burgerId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        className="transition-all duration-300 ease-in-out hover:scale-105"
        size="round"
        shape="pill"
        onClick={() => dispatch(increaseItemQuantity(burgerId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
