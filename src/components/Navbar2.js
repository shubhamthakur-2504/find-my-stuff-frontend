import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Home.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar2() {
  const navigate = useNavigate();
  function Logout(){
    localStorage.clear()
    return navigate('/')
  }
  return (
    <>
     <nav>
        <div className="nav-links" id='navLinks' >
          <ul>
            <li><Link to="/Home"  >Home</Link></li>
            <li><Link to="/founditem"> Objects Found</Link></li>
            <li><Link to="/reportfditem">Report FoundItems</Link></li>
            <li><Link to="/postitem" >Report LostItems</Link></li>
          </ul>
        </div>
        <li style={{ listStyle: "none", display: "inline-block", paddingBottom: "12px", }}>
  <button onClick={Logout} style={{ backgroundColor: "#f44336", padding: "10px 20px", display: "flex", justifyContent: "center", alignItems: "center",borderRadius: "25px",border:"black" , color: "white", textAlign: "center",textDecoration:"none",marginRight:"3vw" }}>
    Logout
  </button>
</li>
      </nav>
      </>
  )
}
