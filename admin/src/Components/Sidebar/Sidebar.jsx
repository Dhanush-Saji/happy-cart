import React, { useEffect, useState } from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './Sidebar.css'
import { useLocation, useNavigate } from 'react-router-dom';
const Sidebar = () => {
const [isActive, setisActive] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const navigateToCategory = () =>{
        navigate('/category')
    }
    const navigateToHome = () =>{
        navigate('/')
    }
    const navigateToProducts = () =>{
        navigate('/products')
    }
    useEffect(()=>{
        setisActive(location.pathname)
        return () =>{}
    },[location])
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <li className={isActive == '/'?'sidebarListItem active':'sidebarListItem'} onClick={navigateToHome}>
                        <LineStyleIcon className='sidebarIcon' />
                        Home
                    </li>
                    <li className='sidebarListItem'>
                        <TimelineIcon className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpIcon className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Inventories</h3>
                <ul className='sidebarList'>
                    <li className={isActive == '/category'?'sidebarListItem active':'sidebarListItem'} onClick={navigateToCategory}>
                        <LineStyleIcon className='sidebarIcon' />
                        Categories
                    </li>
                    <li className={isActive == '/products'?'sidebarListItem active':'sidebarListItem'} onClick={navigateToProducts}>
                        <TimelineIcon className='sidebarIcon' />
                        Products
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpIcon className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar