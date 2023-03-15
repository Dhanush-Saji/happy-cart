import './HomepageLoader.scss'
import Lottie from "lottie-react";
import homeLoader from '../../assets/homeLoader.json'
import { Flex } from '@chakra-ui/react';

const HomepageLoader = () => {
  return (
    <Flex className='homePageLoader'>
    <Lottie animationData={homeLoader} loop={true} />
    </Flex>
  )
}

export default HomepageLoader