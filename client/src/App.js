
import './App.scss'
import AllRoutes from './Routes/AllRoutes';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Newsletter from './Pages/Footer/Newsletter/Newsletter';
function App() {
  return (
    <>
    <Header />
    <AllRoutes />
    <Newsletter />
    <Footer />
    
    </>
  );
}

export default App;
