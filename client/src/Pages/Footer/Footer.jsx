import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from 'react-icons/fa'
import Payment from '../../assets/payments.png'
const Footer = () => {
    return(
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum, dolore exercitationem itaque quidem numquam quos repellendus eius, et ab praesentium delectus rem ducimus, alias voluptatem a consequuntur? Aliquam, tempora?</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Edayarnmula.P.O, Aranmula, Pathanamthitta, Kerala, 689532
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 8547074715</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: dhanushsaji1@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    Made with❤️by Dhanush
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;