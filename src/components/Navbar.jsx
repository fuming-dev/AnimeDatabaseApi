import React, {useState} from 'react'
import logo from '../assets/mylogo.png'
import './navbar.css'
const Navbar = ({search, handleSearch, setSearch}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
        
        <div className="nav-container">
          <div className="navbar-links"> 
            <a href="/browse">Home</a> 
            <a href="/shows">Show</a>
            <a href="/contact">Contact Us</a>
            </div>
        </div>

     
        <div className="mobile-search-container">
          <div className="search">
              <form onSubmit={handleSearch}
  >
              <input            
                value={search}
                type="search"
                required
                placeholder="search.."
                onChange={e=> setSearch(e.target.value)} />

            <button type="submit" required><i class="fas fa-search"></i></button>
            </form>
            </div>
        </div>
        
        <nav>

          {
          toggleMenu ? (
          <i class="fas fa-times" onClick={()=> setToggleMenu(false)}></i>

          ):

          (<i class="fas fa-bars" onClick={()=> setToggleMenu(true)}></i>)}

        {toggleMenu && (
          
          <div className="menu-container">
            <div className="menu-navbar-links"> 
            <a href="/browse">Home</a> 
            <a href="/shows">Show</a>
            <a href="/contact">Contact Us</a>
            <a href="/signin">Sign in</a>
            <a href="/register">Register</a>
            </div>
          </div> 
        )}

        </nav>  

          
        <div className="login-container">

          <div className="search">
            <form onSubmit={handleSearch}
>
            <input            
              value={search}
              type="search"
              required
              placeholder="search.."
              onChange={e=> setSearch(e.target.value)} />

          <button type="submit" required><i class="fas fa-search"></i></button>
          </form>
          </div>
          <button className="login">
            <i class="fas fa-user"></i>Login
          </button>
          <button className="signup">
            <i class="fas fa-user"></i>Signup
          </button>
        </div>
      </div>
    );
}   

export default Navbar
