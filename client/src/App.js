
import './App.scss'
import AllRoutes from './Routes/AllRoutes';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Newsletter from './Pages/Footer/Newsletter/Newsletter';
import { useLocation } from 'react-router';
import HomepageLoader from './Components/HomepageLoader/HomepageLoader';
import { useState } from 'react';
function App() {
  const location = useLocation();
  const shouldShow = location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/not-found';
  const dontShowHeader = location.pathname !== '/not-found';
  const isHomePage = location.pathname === '/'
  const [doIneedToShow, setdoIneedToShow] = useState(true)
  setTimeout(()=>setdoIneedToShow(false),4000)
  return (
    <>
    {isHomePage&&doIneedToShow&&<HomepageLoader />}
    {dontShowHeader&&<Header />}
    <AllRoutes />
    {shouldShow && <Newsletter />}
    {shouldShow && <Footer />}
    
    </>
  );
}

export default App;
