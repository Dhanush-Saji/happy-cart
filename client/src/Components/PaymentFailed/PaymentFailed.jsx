import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PaymentFailed = () => {
  return (
    <VStack p='4rem'>
      <Image src='https://cdn-icons-png.flaticon.com/512/2569/2569174.png' boxSize='150px' />
      <Text as='b' fontSize='3xl'>Opps.. transaction failed!</Text>
    </VStack>
  )
}

export default PaymentFailed