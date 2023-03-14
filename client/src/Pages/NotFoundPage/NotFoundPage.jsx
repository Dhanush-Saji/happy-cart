import { Button, VStack } from '@chakra-ui/react';
import React from 'react'
import NotFound from './../../Components/NotFound/NotFound';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <VStack p='1rem'>
      {/* <Text as='b' fontSize='3xl'>Thank you for your order!</Text> */}
      <NotFound />
      <Button colorScheme={'blue'} onClick={()=>{navigate('/')}}>Go to Home</Button>
    </VStack>
  )
}

export default NotFoundPage