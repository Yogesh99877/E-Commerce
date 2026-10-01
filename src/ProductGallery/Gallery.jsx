import './Gallery.css'
import Deal_ELectronic from '../assets/Deal_ELectronic.jpg'
import Deals_home from '../assets/Deals_home.jpg'
import Rakhi from '../assets/Rakhi.jpg'
import Min_60 from "../assets/Min_60.jpg"
import Mini_70 from "../assets/Mini_70.jpg"
import Budget from '../assets/Budget.jpg'
function Gallery() {
    return(
        <div className='Gallery'>
          <div className='SubGallery'>
           <div className='product'>
             <p className='a'>Rakhi gifting</p>
             <img src={Rakhi} alt="rakhi" />
           </div>
           <div className='product'>
            <p className='b'>Deals on ELectronic</p>
            <img src={Deal_ELectronic} alt="deal" />
           </div>
           <div className='product'>
            <p className='c'>Budget Find Under ₹499</p>
            <img src={Budget} alt="Budget" />
           </div>
          
          
           <div className='product'>
             <p className='d'>Deals on Home & Kichen</p>
             <img src={Deals_home} alt="Deals homes" />
           </div>
           <div className='product'>
             <p className='e'>Min.70% on Rakhi</p>
             <img src={Mini_70} alt="MIn_70" />
           </div>
           <div className='product'>
             <p className='f'>Min.60% off Ethnic Week</p>
             <img src={Min_60} alt="Min_60" />
           </div>
        
        </div>
        </div>
    )
}

export default Gallery