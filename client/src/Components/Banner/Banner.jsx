import "./Banner.scss";
import HeadphoneCanvas from "../3d/Three_screen";
import { useNavigate } from "react-router";
const Banner = () => {
    const navigate = useNavigate()
    const navigateFn = () =>{
        navigate(`/product`)
    }
    return(
         <div className="hero-banner"  id='#home'>
            <div className="content">
                <div className="text-content">
                    <h1>EXPLORE</h1>
                    <p>Explore the world of electronic gadgets and discover a new level of convenience.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={navigateFn}>Shop Now</div>
                    </div>
                </div>
                <div  className='banner-img'>
                    <HeadphoneCanvas />
                </div>
            </div>
        </div>
    );
};

export default Banner;
