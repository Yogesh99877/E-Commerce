import React from 'react'
import flag from '../assets/flag.png'
import "./Navbar.css"

function Navbar2() {
   return(
    <nav className='Container'>
    <div className='NavbarDown'>
        <select>
  <option>ALL</option>
  <option>Trending</option>
  <option>BestSeller</option>
  <option>Digital Content And Devices</option>
  <option>Echo & Alexa</option>
  <option>Fire TV</option>
  <option>Kindle E-Reader & eBooks</option>
  <option>Audible</option>
  <option>Amazon Prime Video</option>
  <option>Shop by Category</option>
  <option>Mobiles, Computers</option>
  <option>TV, Appliances, Electronic</option>
  <option>Mens Fashion</option>
  <option>Women Fashion</option>
  <option>Help & Setting</option>
  <option>Customer Service</option>
  <option>Your Account</option>
  <option>Sign In</option>
</select>
    </div>
    <div className='NavbarDown2'>
     <ul>
        <li>Fresh</li>
        <li>Prime</li>
        <li>Sell</li>
        <li>Pay</li>
        <li>Gift Card</li>
        <li>Service Card</li>
        <li>Customer Service</li>
        <li>GIft Idea</li>
        <li>Buy Again</li>
        <li>AmazonBasics</li>
        <li>Health</li>
        <li>Subscribe</li>
        <li>Home</li>
     </ul>
    </div>
   </nav> 
   )
}

export default Navbar2