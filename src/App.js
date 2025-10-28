import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './components/Login';
 import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Uploadpage from './pages/Uploadpage';
 import Founditems_List from './pages/Founditems_List';
 import PostItems from './pages/PostItems';
 import ProtectedRoute from './components/protectedroutes';
import LearnMore from './components/LearnMore';
import Book_List from './Lists/Book_List';
import Digital_Devices_List from './Lists/Digital_Devices_List';
import Identity_Cards_List from './Lists/Identity_Cards_List';
import Others_Items_List from './Lists/Others_Items_List';
import Wallets_List from './Lists/Wallets_List';
import Toys_List from './Lists/Toys_List';
import Frontpage from './pages/Frontpage';

export default function App() {

  return (
<>
    <Router>
      {/* <div> */}
    
     {/* <div> */}
     {/* <Navbar2/> */}
         {/* </div> */}
         {/* <Navbar /> */}
        
        <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path='/Home' element={<ProtectedRoute><Home/> </ProtectedRoute> } />
        
         {/* <Route path="Home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />  */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} /> 
         <Route path="/reportfditem" element={ <ProtectedRoute> <Uploadpage/> </ProtectedRoute> } /> 
         <Route path="/founditem" element={ <ProtectedRoute> <Founditems_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Books" element={ <ProtectedRoute> <Book_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Documents" element={ <ProtectedRoute> <Identity_Cards_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Wallets" element={ <ProtectedRoute> <Wallets_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Digital-Devices" element={ <ProtectedRoute> <Digital_Devices_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Toys" element={ <ProtectedRoute> <Toys_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Others-Items" element={ <ProtectedRoute> <Others_Items_List/> </ProtectedRoute> }/>  
        <Route path="/postitem" element={ <ProtectedRoute> <PostItems/> </ProtectedRoute> }/>  
        <Route path="/learnmore" element={<LearnMore />} /> 
        


        </Routes>
     </Router>  
     </>
  );
}
