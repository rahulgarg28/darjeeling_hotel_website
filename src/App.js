import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import  {Home} from "./components/Home";
import {Header} from "./components/Header";
import {Cart} from "./components/Cart";
import {Toaster} from "react-hot-toast";

import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/cart.scss"
import "./style/Top.scss"
import "./style/Help.scss"
import "./style/mediaq.scss"


function App() {
  return (
  <Router>
    <Header />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/car" element={<Cart />}/>
   </Routes>
   <Toaster />
  </Router>
  );
}

export default App;
