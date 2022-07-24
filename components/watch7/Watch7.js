import React,{ useState} from 'react';
import classes from './watch7.module.css';
import Link from 'next/link';
import Image from 'next/image';
import blue1 from '../../public/images/blue-1.jpg';
import blue2 from '../../public/images/blue-2.jpg';
import blue3 from '../../public/images/blue-3.jpg';

import min1 from '../../public/images/min1.jpg';
import min2 from '../../public/images/min2.jpg';
import min3 from '../../public/images/min3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Controller } from 'swiper';


import 'swiper/css';
// import Slider from "@madzadev/image-slider";
// import "@madzadev/image-slider/dist/index.css";

function Watch7() {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [isBlue, setIsBlue] = useState();
    const [isGreen, setIsGreen] = useState();
    const [isSmall, setIsSmall] = useState();
    const [isLarge, setIsLarge] = useState();

    const [productPrice, setProductPrice] = useState(0);

    const [blueImages, setBlueImages] = useState([
        {url : blue1},
        {url : blue2},
        {url : blue3},
    ])
    const [images, setImages] = useState(blueImages);

    const [minImages, setMinImages] = useState([
        {url : min1},
        {url : min2},
        {url : min3},
    ])

    function AddToBag(){}
    
  return (
    <div className={classes.watch_container}>
        <header>
            <h3>Apple Watch Series 7</h3>
        </header>
        <section>
        
            <div className={classes.slider}>
                
                <div>
                {/* <Image src={blue1} alt='image' />
                <Image src={blue2} alt='image' />
                <Image src={blue3} alt='image' /> */}

                {images && images.map((img,i)=> (
                    <Image src={img.url} alt='image' key={i} />

                ))}

                
                </div>
                
             
            </div>

            {/* <Slider imageList={images} width={1000} height={300} /> */}
            <div className={classes.product_option}>
                <span>Apple watch</span>
                <h2>Midnight Aluminum Case with Solo Loop</h2>
                <h3>From $399 or $16.62/mo. for 24 mo*</h3>
                <p>The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.</p>
                <p>The Solo Loop is made from soft, stretchable silicone and designed for ultracomfort with no clasps or buckles.</p>

                <div className={classes.band_colors}>
                    <span>Band colors</span>
                    <div>
                    <div onClick={()=> {
                        
                        setImages(blueImages);
                        setIsBlue(true)
                        setIsGreen(false)
                    }} className={isBlue ? classes.blue : ''}></div>
                    <div onClick={()=> {
                        setImages(minImages);
                        setIsBlue(false)
                        setIsGreen(true);
                    }} className={isGreen ? classes.min : ''}></div>
                    {/* <div></div> */}
                    </div>
                    
                </div>
                <div className={classes.case_size}>
                    <span>Case size</span>

                    <div className={isSmall ? classes.small_case : ''}
                    
                    onClick={()=> {
                        setIsLarge(false);
                        setIsSmall(true);
                    }}>
                        <div>
                            <span>41mm</span>
                            <span>Fits 130-200mm wrists.</span>
                        </div>
                        <p>From $399</p>
                    </div>
                    <div 
                    className={isLarge ? classes.large_case : ''}
                    onClick={()=> {
                        setIsSmall(false);
                        setIsLarge(true);
                    }}
                    >

                        <div>
                            <span>45mm</span>
                            <span>Fits 140-220mm wrists.</span>
                        </div>
                        <p>From $429</p>

                    </div>
                </div>
                

            </div>

        </section>
    </div>
  )
}

export default Watch7