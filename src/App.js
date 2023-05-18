import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="">
      <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/product"} element={<Product/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
            <Route path={"/favorite"} element={<Favorite/>}/>
        </Routes>
    </div>
  );
}

export default App;
