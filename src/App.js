import './App.css';
import Header from './Components/Header';
import Store from './Components/FlashSales';
import ShoppinProvider from './Context/ShoppingContext';
import Categories from './Components/Categories';
import BestSelling from './Components/BestSelling';
import Boster from './Components/Boster';
import ExploreProduct from './Components/ExploreProduct';
import NewArrival from './Components/NewArrival';
import Footer from './Components/Footer';
import Body from './Components/Body';
function App() {
  return (
<ShoppinProvider>

    <Header/>
    <Body/>
    <Store/>
    <Categories/>
    <BestSelling/>
    <Boster/>
    <ExploreProduct/>
    <NewArrival/>
    <Footer/>
    </ShoppinProvider>
  );
}

export default App;
