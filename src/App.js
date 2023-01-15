import Footer from "./components/organisms/footer";
import Hero from "./components/molecules/hero";
import NavBar from "./components/organisms/navBar";
import Product from "./components/molecules/product";
import About from "./components/pages/about";
import Home from "./components/pages/Home";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
       <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/about' element={<About />} />
        <Route path='/product' element={< Product />} />
        <Route path='/hero' element={<Hero />} />
        {/* <Route path='/about' element={<About />} /> */}
        </Routes>
        {/* <Hero/> 
         <Product/>  */}
         <Footer/>

    </div>
  );
}

export default App;
