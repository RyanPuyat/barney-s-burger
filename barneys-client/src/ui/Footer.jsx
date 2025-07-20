import FooterLeftSide from './FooterLeftSide';
import FooterRightSide from './FooterRightSide';
import Image from '../assets/hawaiian.png';

function Footer() {
  return (
    <div className="relative flex h-auto w-full items-start justify-between bg-stone-300 p-4 text-stone-500">
      <img
        src={Image}
        alt="hawaiian"
        className="absolute bottom-0 -left-10 h-[120px] w-[120px]"
      />
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:items-center sm:pt-0">
        <FooterLeftSide />

        <FooterRightSide />
      </div>
    </div>
  );
}

export default Footer;
