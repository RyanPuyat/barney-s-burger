import Button from './Button';
import SocialIconsFooter from './SocialIconsFooter';

function FooterLeftSide() {
  return (
    <div className="flex h-full flex-col justify-center p-2 sm:ml-[110px]">
      <p className="mb-2 ml-4 text-lg font-medium">
        Notify Me The Latest Offer
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <input
          placeholder="Enter your email"
          className="focus:ring-opacity-50 h-10 w-48 rounded-full bg-orange-100 px-4 py-2 text-center ring ring-orange-500 transition-all duration-300 placeholder:text-yellow-500 focus:ring-2 focus:ring-orange-500 focus:outline-none md:w-[250px] md:text-lg"
        />
        <Button
          size="md"
          shape="pill"
          className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-orange-600"
        >
          Subscribe
        </Button>
      </div>
      <SocialIconsFooter />
    </div>
  );
}

export default FooterLeftSide;
