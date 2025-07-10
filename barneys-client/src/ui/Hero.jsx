import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mt-50 min-h-[80px] text-6xl leading-tight font-extrabold tracking-wide text-orange-500">
        Bite Into <span className="inline-block text-yellow-500">Bliss</span>
      </h1>
      <p className="text-xl tracking-wide text-stone-500">
        <br />
        Welcome to the home of burger bliss —
        <br /> where every patty is seared with passion
        <br />
        and stacked with flavor.
      </p>
      <Button
        size="md"
        shape="pill"
        className="mt-25 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-orange-600"
        onClick={() => navigate('/orderPage')}
      >
        Order now
      </Button>
      {/* <SocialIcons /> */}
    </>
  );
}

export default Hero;
