import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialStyle = 'text-xl text-stone-500 ';

function SocialIconsFooter() {
  return (
    <div>
      <div className="mt-4 ml-15 flex flex-row items-center gap-8 2xl:hidden">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className={`${socialStyle}hover:text-blue-500 transition duration-300`}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            className={`${socialStyle}hover:text-sky-500 transition duration-300`}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className={`${socialStyle}hover:text-pink-500 transition duration-300`}
          />
        </a>
      </div>
    </div>
  );
}

export default SocialIconsFooter;
