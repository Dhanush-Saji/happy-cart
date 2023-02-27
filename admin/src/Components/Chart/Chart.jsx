import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {
  return (
    <div className="charts">
       <h3 className='userAnalyticsText'>{title}</h3>
       <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
        <XAxis dataKey="name" />
        <Line type='monotone' dataKey={dataKey} />
        <Tooltip />
       { grid&&<CartesianGrid stroke='#ffffff18' />}
        </LineChart>
       </ResponsiveContainer>
    </div>
  )
}

export default Chart