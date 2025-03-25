import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function SocialMediaIcons() {
  return (
    <div className="contact-section">
        <FaPhoneAlt className="phone-icon" />
        <span className="phone-number">16519</span>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
  );
}
