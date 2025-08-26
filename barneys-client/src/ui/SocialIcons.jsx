import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialStyle2 =
  'text-4xl text-orange-500 transition-all duration-300 ease-in-out hover:scale-150';

function SocialIcons() {
  return (
    <div className="hidden 2xl:mt-45 2xl:flex 2xl:flex-row 2xl:gap-8">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className={socialStyle2} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className={socialStyle2} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={socialStyle2} />
      </a>
    </div>
  );
}

export default SocialIcons;
