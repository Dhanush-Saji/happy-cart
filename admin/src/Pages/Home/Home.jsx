import React from 'react'
import Chart from '../../Components/Chart/Chart'
import FeaturesInfo from '../../Components/FeaturesInfo/FeaturesInfo'
import './Home.css'
import { data } from './../../Data/Data';
const Home = () => {
  return (
    <div className='homePage'>
      <FeaturesInfo />
      <Chart data={data} title={'User Analytics'} dataKey={'Active User'} grid={true} />
    </div>
  )
}

export default Home