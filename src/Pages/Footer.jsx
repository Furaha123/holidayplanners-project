import "../Css/Footer.css";
import PayImages from "../Images/payment-companies0-logo.png";
import FooterLogo from "../Images/white-logo.png";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <section class="section-footer">
      <div class="footer">
        <div class="footer-left">
          <ul class="footer-nav">
            <h2 className=" header-center">Navigation</h2>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="footer-right">
            <h2 className="header-right">Need Help?</h2>
            <div className="contact-right">
              <p>Call Us</p>
              <p>+342-236352-37</p>
            </div>

            <div className="email-right">
              <p>Email For Us </p>
              <p>test@gmail.com</p>
            </div>
            <div className="locatiion-right">
              <p>Location</p>
              <p>Kigali-Rwanda</p>
            </div>
            <div className="social-right">
              <p>Follow us</p>
              <div className="socila">
                <FiTwitter />
                <FiInstagram />
                <FiFacebook />
              </div>
            </div>
          </div>

          <img src={FooterLogo} alt="Footer icon" className="footer-logo" />
          <p className="footer-para">
            Stay Connected to Holiday Planners Join our community of travel
            enthusiasts and share travelers and get inspired for your next
            adventure.
          </p>

          <form>
            <input type="text" id="userInput" placeholder="Enter Your Email" />
            <button type="submit">Submit</button>
          </form>
          <div class="payment-companies">
            <img src={PayImages} alt="Payment Companies" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
