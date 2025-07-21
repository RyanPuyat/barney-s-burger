import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialStyle = 'text-4xl text-orange-500';

function SocialIcons() {
  return (
    <div className="hidden 2xl:mt-50 2xl:block 2xl:flex 2xl:flex-row 2xl:gap-8">
      <FaFacebook className={socialStyle} />
      <FaTwitter className={socialStyle} />
      <FaInstagram className={socialStyle} />
    </div>
  );
}

export default SocialIcons;
