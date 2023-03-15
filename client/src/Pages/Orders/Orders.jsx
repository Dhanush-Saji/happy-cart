import { VStack,Text, Flex, Image, Button, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../API/APICalls';
import LottieAnimation from '../../Components/LottiesFile/LottieAnimation';
import './Orders.scss'

const Orders = () => {
    const dispatch = useDispatch()
    const userData = useSelector((store)=>store.user.user)
    const {orderItems,isLoading} = useSelector((store)=>store.orders)
    const dateString = orderItems[0]?.createdAt
    const date = new Date(dateString);
useEffect(()=>{
    if(userData){
        dispatch(getUserOrders(userData._id))
    }
},[])
  return (
    <VStack p='3rem 1rem' alignItems={{base:'center',md:'flex-start'}}>
        <Text as='b' fontSize={'3xl'} m='auto' mb='1rem'>My Orders</Text>
        {
            isLoading&&<LottieAnimation />
        }
        <Grid gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)'}} gap='10px' m='auto' w='100%'>
        {
                    orderItems[0] && orderItems.map((item,id)=>(
                        <VStack bg='rgba(0, 0, 0, 0.05)' p='1rem' borderRadius='15px' gap='1rem' key={id}  justifyContent='space-between'>
            <Flex justifyContent='space-between' w='100%' alignItems={'center'}>
            <Text fontSize='xs'>Order on: {`${date.getDate()}/${date.toLocaleString('default', { month: 'long' })}/${date.getFullYear()}`}</Text>
            <span className={item.payment_status == 'paid'?'payment-status-paid':''}>{item.payment_status}</span>
            </Flex>
            <Flex gap='1rem' flexDirection={{base:'column',md:'row'}} w='100%' justifyContent={'space-between'}>
                <Flex mt='auto' alignContent={'flex-start'} flexDirection='column'  gap='0.5rem'>
                    {
                        item.products.map((item,id)=>(
                            <Flex bg='white' borderRadius='15px' p='0.5rem' key={item+id}>
                <Image src={item.imageurl} boxSize='50px' />
                <VStack alignItems='flex-start'>
                <Text fontSize='sm' className='order-product-title'>{item.title}</Text>
                <Text fontSize='sm'>Price: ₹{item.price} | Quantity: {item.quantity}</Text>
                </VStack>
            </Flex>
                        ))
                    }
                
                </Flex>
                <Flex flexDirection={{base:'row-reverse',md:'column'}} gap='0.5rem' justifyContent={'space-between'}>
            <Button colorScheme='telegram' mt='auto'>Track Order</Button>
            <Button colorScheme='telegram' variant='outline'>View Details</Button>
            </Flex>
            </Flex>
        </VStack>
                    ))
                }
                </Grid>
                
        
    </VStack>
  )
}

export default Orders