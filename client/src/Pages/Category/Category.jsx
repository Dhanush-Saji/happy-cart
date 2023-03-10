import "./Category.scss";
import { Checkbox, CheckboxGroup, Hide, Stack, Text, VStack } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import LottieAnimation from "../../Components/LottiesFile/LottieAnimation";
import Products from "../../Components/Products/Products";
import { getProducts } from "../../API/APICalls";
const Category = () => {
  const { pathname,location } = useLocation();
    const dispatch = useDispatch()
    const {products,isLoading} = useSelector((store)=>store.products)
    const [searchParams,setSearchParams] = useSearchParams()
    const initialCategory = searchParams.getAll("category")
    const initialPrice = searchParams.getAll("price")
    const [category, setcategory] = useState(initialCategory || [])
    const [price, setprice] = useState(initialPrice || [])
    const handleFilterChange = (e) =>{
        const newcategory = [...category]
        if(newcategory.includes(e.target.value)){
          newcategory.splice(newcategory.indexOf(e.target.value),1)
        }
        else{
          newcategory.push(e.target.value)
        }
        setcategory(newcategory)
      }
      const handleFilterPrice = (e) =>{
    const newprice = [...price]
    if(newprice.includes(e.target.value)){
      newprice.splice(newprice.indexOf(e.target.value),1)
    }
    else{
      newprice.push(e.target.value)
    }
    setprice(newprice)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      useEffect(()=>{
        let params={}
        params.category = category;
        params.price = price;
        setSearchParams(params)
        dispatch(getProducts(params))
      },[category,setSearchParams,price])
      useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      
  return (
    <div className="category-main-content">
        <div className="productContent">
          <Hide below="md">
          <VStack height='fit-content'
            bg="#8e2de2"
            borderRadius={"0px 15px 15px 0px"}
            minW="20%" justifyContent='flex-start' p='0.5rem'
          >
            <VStack bg='white' color='black' w='100%'  borderRadius='10px' p='0.8rem'>
            <Text fontSize='2xl' as='b'>Category</Text>
                <Stack spacing={[2]} direction='column'>
                <Checkbox onChange={handleFilterChange} isChecked={category.includes("headphones")} value="headphones">Headphones</Checkbox>
                <Checkbox onChange={handleFilterChange} isChecked={category.includes("speaker")} value="speaker">Speaker</Checkbox>
                <Checkbox onChange={handleFilterChange} isChecked={category.includes("smart_watches")} value="smart_watches">Smart Watches</Checkbox>
                <Checkbox onChange={handleFilterChange} isChecked={category.includes("wireless_earbuds")} value="wireless_earbuds">Wireless Earbuds</Checkbox>
                </Stack>
            </VStack>
            <VStack bg='white' color='black' w='100%'  borderRadius='10px' p='0.8rem'>
            <Text fontSize='2xl' as='b'>Price</Text>
                <Stack  spacing={[2]} direction='column'>
                <Checkbox onChange={handleFilterPrice} isChecked={price.includes("1000-2999")} value="1000-2999">1000 - 2999</Checkbox>
                <Checkbox onChange={handleFilterPrice} isChecked={price.includes("3000-4999")}  value="3000-4999">3000 - 4999</Checkbox>
                <Checkbox onChange={handleFilterPrice} isChecked={price.includes("5000")} value='5000'>5000+</Checkbox>
                </Stack>
            </VStack>
          </VStack>
          </Hide>
          {
            isLoading?<LottieAnimation />:<Products productData={products} />
          }
          
        </div>
    </div>
  );
};

export default Category;
