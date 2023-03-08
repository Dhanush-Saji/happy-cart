import React from 'react'
import Lottie from "lottie-react";
import loader from '../../assets/loader.json'
import { Flex } from '@chakra-ui/react';

const LottieAnimation = () => {
  return (
    <Flex>
    <Lottie animationData={loader} loop={true} />
    <Lottie animationData={loader} loop={true} />
    </Flex>
  )
}

export default LottieAnimation