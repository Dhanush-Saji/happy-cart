import React, { useEffect } from 'react'
import Chart from '../../Components/Chart/Chart'
import FeaturesInfo from '../../Components/FeaturesInfo/FeaturesInfo'
import './Home.css'
import { data } from './../../Data/Data';
import { getCategoryFnApi, getProductsFnApi } from '../../API/APICalls';
import { useDispatch } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    let firstTime = true
    dispatch(getCategoryFnApi(firstTime))
  },[])
  useEffect(()=>{
    let firstTime = true
    dispatch(getProductsFnApi(firstTime))
  },[])
  return (
    <div className='homePage'>
      <FeaturesInfo />
      <Chart data={data} title={'User Analytics'} dataKey={'Active User'} grid={true} />
    </div>
  )
}

export default Home