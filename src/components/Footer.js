import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function FooterComponent() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>About the company</h3>
        <p>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Products</h3>
        <ul>
          <li>CSR Activities</li>
          <li>Green Banking</li>
          <li>News</li>
          <li>Ongoing Campaign</li>
          <li>Updates</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Get Started</h3>
        <ul>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Government Securities</li>
          <li>Examples</li>
          <li>NIS</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li>IPDC at a Glance</li>
          <li>Mission, Vision & Values</li>
          <li>Corporate Governance</li>
          <li>Shareholders</li>
          <li>Investor Relations</li>
        </ul>
      </div>

      <div className="contact-section">
        <FaPhoneAlt className="phone-icon" />
        <span className="phone-number">16519</span>
      </div>
    </footer>
  );
}
