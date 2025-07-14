import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ burgerId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-between">
      <Button
        size="md"
        shape="pill"
        className="mt-10 uppercase"
        onClick={() => dispatch(deleteItem(burgerId))}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
