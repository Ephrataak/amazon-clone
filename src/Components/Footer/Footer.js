import React from 'react'
import './Footer.css'
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
    return (
      <div className='footer__container'>
        <div className=" footer">
          <div className="wrapper">
            
            <div className="footer__column">
              <div className="navFooterColHead">Get to Know Us</div>
              <ul>
                <li className="nav_first">Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li className="nav_last ">Amazon Science</li>
              </ul>
            </div>

            <div className="footer__column">
              <div className="navFooterColHead">Make Money with Us</div>
              <ul>
                <li className="nav_first">Sell products on Amazon</li>
                <li>Sell on Amazon Business</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li className="nav_last nav_a_carat">
                  <span className="nav_a_carat">›</span>See More Make Money{" "}
                  <br />
                  with Us
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <div className="navFooterColHead">Amazon Payment Products</div>
              <ul>
                <li className="nav_first">Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li className="nav_last ">Amazon Currency Converter</li>
              </ul>
            </div>

            <div className="footer__column">
              <div className="navFooterColHead">Let Us Help You</div>
              <ul>
                <li className="nav_first">
                  Amazon and COVID-
                  <br />
                  19
                </li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>
                  Shipping Rates &amp;
                  <br />
                  Policies
                </li>
                <li>
                  Returns &amp;
                  <br />
                  Replacements
                </li>
                <li>
                  Manage Your Content
                  <br /> and Devices
                </li>
                <li>Amazon Assistant</li>
                <li className="nav_last ">Help</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navFooterLine">
          <img
            className="logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
      </div>
    );
}

export default Footer