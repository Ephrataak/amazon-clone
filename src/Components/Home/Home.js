import React from 'react'
import Banner from './Banner/Banner'
import './Home.css'
import './Products/Products.css'
import Products from './Products/Products';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Banner />
        <div className="home__row">
          
          <Products
            id="366"
            image="https://m.media-amazon.com/images/I/81lor0Hbx6L._AC_UL320_.jpg"
            title="20-Piece Nonstick Kitchen Cookware Set"
            price={249.99}
            rating={4}
          />
          <Products
            id="000"
            image="https://m.media-amazon.com/images/I/61d+PdEPidL._AC_UL320_.jpg"
            title="VavoPaw Dog Vehicle Safety Vest Harness"
            price={99.99}
            rating={5}
          />
          <div className='commercial'>

            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg' alt='' />
          
          <div className='bottom'>
            <div className='sign'><h2>Sign in for the best <br />experience</h2></div>
            <Link to='/login' className='clearLink'><div className='signin'><h2>Sign in </h2></div></Link>
          </div>
        </div>
        </div>
        <div className="home__row">
          <Products
            id="852"
            image="https://m.media-amazon.com/images/I/814IxylFV2L._AC_UY218_.jpg"
            title="venflo Pivot Modular Travel System With SafeMax Car Seat"
            price={172.29}
            rating={2}
          />
          <Products
            id="963"
            image="https://m.media-amazon.com/images/I/91skXZXmBNS._AC_UL320_.jpg"
            title="Urban Decay Naked Wild West Eyeshadow Palette, 12 Desert-Inspired Neutral Shades"
            price={35.99}
            rating={4}
          />
          <Products
            id="741"
            image="https://m.media-amazon.com/images/I/51ScLNRwclL._AC_UY218_.jpg"
            title="PlayStation VR Marvel's Iron Man VR Bundle"
            price={349.0}
            rating={5}
          />
          <Products
            id="263"
            image="https://m.media-amazon.com/images/I/91t1k9U4otL._AC_UL320_.jpg"
            title="Samsonite Winfield 3 DLX Hardside Expandable Luggage"
            price={238.49}
            rating={5}
          />
        </div>
        <div className="home__row">
        
          <Products
            id="654"
            image="https://m.media-amazon.com/images/I/819F1MjJJ8L._AC_UY218_.jpg"
            title="LG 34WK650-W 34 UltraWide 21:9 IPS Monitor with HDR10 and FreeSync"
            price={346.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Products
            id="987"
            image="https://m.media-amazon.com/images/I/91L2YGHhXfL._AC_UL320_.jpg"
            title="Mellow Adair Mid-Century Modern Loveseat/Sofa/Couch with Armrest Pockets, Tufted Linen Fabric, Light Grey"
            price={258.64}
            rating={1}
          />
          <Products
            id="321"
            image="https://m.media-amazon.com/images/I/71HuyKCcs4L._AC_UL320_.jpg"
            title="The Seven Husbands of Evelyn Hugo: A Novel"
            price={9.42}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home