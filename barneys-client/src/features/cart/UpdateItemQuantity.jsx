import Button from '../../ui/Button';

function UpdateItemQuantity() {
  return (
    <div className="mt-10 flex items-center gap-1 md:gap-3">
      <Button size="round" shape="pill">
        -
      </Button>
      <Button size="round" shape="pill">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
