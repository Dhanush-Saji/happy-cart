import './HomepageLoader.scss'
import Lottie from "lottie-react";
import homeLoader from '../../assets/homeLoader.json'

const HomepageLoader = () => {
  return (
    <div className='homePageLoader'>
    <Lottie animationData={homeLoader} loop={true} />
    </div>
  )
}

export default HomepageLoader