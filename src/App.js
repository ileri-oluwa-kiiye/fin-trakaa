import { BrowserRouter ,  Route, Routes } from "react-router-dom"
import Home from "./scenes/home";
import Dashboard from "./scenes/dashboard";
import Signup from "./scenes/signup";
import Stepone from "./components/sections/stepone";
import Login from "./scenes/login";
import Inventory from "./scenes/inventory";
import Donation from "./scenes/donation";
import Thankyou from "./scenes/thanks";
import Confirmation from "./scenes/confirmation";
import Paymentcard from "./scenes/payment";
import Newdashboardd from "./scenes/newdashboard";
import Paymentcrypto from "./scenes/crypto";
import Salesnew from "./scenes/newsales";
import Manualdata from "./scenes/manualdata";
import Scandata from "./scenes/scaninv";
import Purchases from "./scenes/purchase";
import Addsale from "./scenes/addsale";
import Pricing from "./scenes/pricing";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/newdashboard" element={<Newdashboardd />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/stepone" element={<Stepone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/thanks" element={<Thankyou />} />
          <Route path="/pay" element={<Paymentcard />} />
          <Route path="/crypto" element={<Paymentcrypto />} />
          <Route path="/newsales" element={<Salesnew />} />
          <Route path="/addinventory" element={<Manualdata />} />
          <Route path="/scaninventory" element={<Scandata />} />
          <Route path="/purchase" element={<Purchases />} />
          <Route path="/addsale" element={<Addsale />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
