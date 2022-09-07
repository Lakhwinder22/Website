import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleToLanding =()=>{
    // navigate("/")
    window.location.href="/"
  }

  const handleToPlanet =()=>{
    navigate("/planet")
    // window.location.href="/planet"
  }
  
  const handleToShop =()=>{
    // navigate("/shop.html")
    window.location.href="/shop.html"
  }
  return (
    <>
      <nav className='navigation nav-down'>
        <div className='hamburger'>
          <span className='color-menu'></span>
          <span className='color-menu'></span>
          <span className='color-menu'></span>
        </div>
        <nav className='navigation_menu'>
          <div className='sub-menu'>
            <div onClick={handleToLanding}>
              <a
                className='menu-active cursorPointer animate__delay-1s'
                data-bs-toggle='collapse'>
                Home
              </a>
            </div>
            <div onClick={handleToPlanet}>
              <a
                className='animate__delay-2s cursorPointer'
                data-bs-toggle='collapse'>
                Zippo Planetd
              </a>
            </div>
            <div onClick={handleToShop}>
              <a
                className='animate__delay-2s cursorPointer'
                data-bs-toggle='collapse'>
            Shop
              </a> 
            </div>
            <div>
              <a
                href='story.html'
                className='animate__delay-2s'
                data-bs-toggle='collapse'>
                Our Story
              </a>
            </div>
            <div>
              <a
                href='roadmap.html'
                className='animate__delay-2s'
                data-bs-toggle='collapse'>
                Roadmap
              </a>
            </div>
            <div>
              <a
                href='our-team.html'
                className='animate__delay-2s'
                data-bs-toggle='collapse'>
                Our Team
              </a>
            </div>
            <div>
              <a
                href='roadmap.html'
                className='animate__delay-3s'
                data-bs-toggle='collapse'>
                Portfolio
              </a>
            </div>
            <div>
              <a href='contact.html' className='animate__delay-5s'>
                Contact
              </a>
            </div>
          </div>
          <div className='mobile-menu-bg img-fluid'></div>
        </nav>
        <div className='home-menu-text'>
          <div className='dropdown cursorPointer'  onClick={handleToLanding}>
            <a className='menu-active'>
              Home
            </a>
          </div>
          <div className='dropdown cursorPointer' onClick={handleToPlanet}>
            <a>Zippo Planet</a>
          </div>
          <div className='dropdown cursorPointer' onClick={handleToShop}>
            <a>Shop</a>
          </div>
         
          <div className='dropdown'>
            <a href='story.html'>Story</a>
          </div>
          <div className='dropdown'>
            <a href='roadmap.html'>Roadmap</a>
          </div>
          <div className='dropdown'>
            <a href='our-team.html'>Our Team</a>
          </div>
          <a href='https://discord.com/invite/RwasdYSXXd'>Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
