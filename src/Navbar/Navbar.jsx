import React, { useState }  from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const closeNavbar = () => {
    setIsOpen(false);
};

  return (
    <div className='Navbar h-sixty flex justify-between items-center bg-black text-white pr-nineteenrem pl-sixrem
    custom:pl-0 custom:pr-0
    '>
      <span className='logo font-700 text-21px m-19px text-white'>LOGO</span>
      <div className="nav-items custom:hidden">
        <a href="#" className=' text-white no-underline relative opacity-0.9  text-16px m-29px transition duration-0.8s hover:text-aqua'>Home</a>
        <a href="#"  className=' text-white no-underline relative opacity-0.9  text-16px m-29px transition duration-0.8s hover:text-aqua'>About</a>
        <a href="#"  className=' text-white no-underline relative opacity-0.9 text-16px m-29px transition duration-0.8s hover:text-aqua'>Services</a>
        <a href="#"  className=' text-white no-underline relative opacity-0.9  text-16px m-29px transition duration-0.8s hover:text-aqua'>Projects</a>
        <a href="#"  className=' text-white no-underline relative opacity-0.9 text-16px m-29px transition duration-0.8s hover:text-aqua'>ContactUs</a>
      
      </div>

      <div className={`nav-items2 hidden custom:flex absolute top-60px pt-3rem items-center gap-1rem text-1.2rem flex-col left-0 w-full h-full z-100  bg-black bg-opacity-95 transform -translate-x-full transition-all duration-500 ${isOpen ? 'transform translate-x-0' : '-translate-x-full'}`}>
        <a href="#" className=' transition duration-0.4s hover:text-aqua'>Home</a>
        <a href="#"  className=' transition duration-0.4s hover:text-aqua'>About</a>
        <a href="#"  className=' transition duration-0.4s hover:text-aqua'>Services</a>
        <a href="#"  className=' transition duration-0.4s hover:text-aqua'>Projects</a>
        <a href="#"  className=' transition duration-0.4s hover:text-aqua'>Contact Us</a>
      
      </div>
      <div className="md:hidden flex items-center pr-3">
        <div className="w-8 h-8 flex flex-col justify-between cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'transform rotate-45 translate-y-4' : ''}`}></div>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></div>
        </div>
      </div>
    </div> )
}

export default Navbar