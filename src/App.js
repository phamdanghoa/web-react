import './App.scss';
import ColorBox from './components/ColorBox';
import { useEffect } from 'react';
import productApi from './api/productApi';
import Header from './components/Header';
function App() {
  
  useEffect(()=>{
    const fetchProducts =async ()=>{
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProducts();
  },[]);
  return (
    <div className="App">
     
     <Header/>   
    <ColorBox/>
    </div>
  );
}

export default App;
