import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialStyle = 'text-4xl text-orange-500';

function SocialIcons() {
  return (
    <div className="mt-50 flex flex-row gap-8">
      <FaFacebook className={socialStyle} />
      <FaTwitter className={socialStyle} />
      <FaInstagram className={socialStyle} />
    </div>
  );
}

export default SocialIcons;
