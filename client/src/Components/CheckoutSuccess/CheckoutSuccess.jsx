import { Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearReduxCart } from '../../Redux/cartSlice'
import SuccessLottie from '../SuccessLottie/SuccessLottie'

const CheckoutSuccess = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(clearReduxCart())
  },[])
  return (
    <VStack p='1rem'>
      <Text as='b' fontSize='3xl'>Thank you for your order!</Text>
      <SuccessLottie />
    </VStack>
  )
}

export default CheckoutSuccess