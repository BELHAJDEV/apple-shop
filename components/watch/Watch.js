import React from 'react'
import classes from './watch.module.css';
import icon1 from '../../public/images/watch-s.jpg';
import icon2 from '../../public/images/icon-2.jpg';
import icon3 from '../../public/images/icon-3.jpg';
import icon4 from '../../public/images/icon-4.jpg';

import watch1 from '../../public/images/watch-1.jpg';
import watch1r from '../../public/images/watch-1-r.jpg';
import watch2 from '../../public/images/watch-2.jpg';
import watch2r from '../../public/images/watch-2-r.jpg';
import watch3 from '../../public/images/watch-3.jpg';
import watch3r from '../../public/images/watch-3-r.jpg';
import Image from 'next/image';

function Watch() {
  return (
    <div className={classes.watch_container}>
        <header>
            <h3>Apple Watch Series 7</h3>
        </header>
        <section>
        <h2>Full screen.Frech styles.</h2>
        <div className={classes.features}>
            <div>
                <span>
                <Image src={icon1} alt='icon 1' />
                </span>
                <span>Largest display</span>
                <p>
                The new Retina display on Apple Watch Series 7 has nearly 20 percent more screen area than Series 6.
                </p>
            </div>

            <div>
                <span>
                    <Image src={icon2} alt='icon 1' />
                </span>
                <span>Improved Durability</span>
                <p>
                Most crack-resistant front crystal. Dust resistant. And swimproof.footnote1
                </p>
            </div>
            <div>
                <span>
                    <Image src={icon3} alt='icon 1' />
                </span>
                <span>Fast Charging</span>
                <p>
                Same all-day battery lifefootnote2 with up to 33 percent faster charging than Series 6.footnote3
                </p>
            </div>

            <div>
                <span>
                    <Image src={icon4} alt='icon 1' />
                </span>
                <span>Health and wellness</span>
                <p>
                The most advanced Apple Watch health and wellness features yet, including the Blood Oxygen app and sensorfootnote4 and the ECG app.footnote5
                </p>
            </div>
        </div>

        <div className={classes.products}>
            <div>
                <span>
                    <Image src={watch3r} alt="img" />
                </span>
                
                <h3>Silver Stainless Steel Case with sport loop</h3>
                <p>
                    From $699
                </p> 
                <span>MORE BAND COLORS</span>
            </div>

            <div>
                
                <span>
                    <Image src={watch2r} alt="img" />
                </span>
                <h3>Silver Stainless Steel Case with sport loop</h3>
                <p>
                    From $699
                </p> 
                <spn>MORE BAND COLORS</spn>
            </div>
            <div>
                <span>
                    <Image src={watch1} alt="img" />
                </span>
                <h3>Silver Stainless Steel Case with sport loop</h3>
                <p>
                    From $699
                </p> 
                <spn>MORE BAND COLORS</spn>
            </div>
        </div>
        </section>
        
    </div>
  )
}

export default Watch