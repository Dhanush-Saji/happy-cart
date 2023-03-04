import "./Banner.scss";
import HeadphoneCanvas from "../3d/Three_screen";
const Banner = () => {
    return(
         <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <div  className='banner-img'>
                    {/* <HeadphoneCanvas /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
