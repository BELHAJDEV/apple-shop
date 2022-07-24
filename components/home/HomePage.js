import Link from 'next/link';
import classes from './homepage.module.css';
import Image from 'next/image';
import iphone13 from '../../public/images/iphone13-1.png';
import AppleIcon from '../../public/images/apple-icon.png';
import AppleWatch from '../../public/images/apple-watch-1.png';
import MacIpad from '../../public/images/mac-ipad.png';
import { Context} from '../../Context';
import { useContext} from 'react';

function HomePage(props){

    const {value1} = useContext(Context);
    const [state,dispatch] = value1;

    return(
        <div className={classes.homepage_container}>
            <div>
                <h1>iphone 13</h1>
                <h2>Your new superpower</h2>
                <div>
                    <Link href='/'>Learn more &gt;</Link>
                    <Link href='/iphone13'>Buy &gt;</Link>
                </div>
                
                <Image src={iphone13} alt='iphone 13'/>
                
            </div>

            {/* <div>
                <h1>
                <Image src={AppleIcon} alt='Apple icon' />
                Watch
                </h1>
                <h3>Series 7</h3>
                <h2>It&apos;s our latgest display yet.</h2>
                <div>
                    <Link href='/'>Learn more &gt;</Link>
                    <Link href='/watch'>Buy &gt;</Link>
                </div>
                
                <Image src={AppleWatch} alt='apple watch series 7'/>
                
            </div>

            <div>
                <h1>
                Get   
                <span>supercharged</span>
                for college
                </h1>
                <h2>Save on Mac or Ipad. Plus get a gift card up to $150.</h2>
                <div>
                    <Link href='/'>Shop now &gt;</Link>
                    
                </div>
                
                <Image src={MacIpad} alt='Mac & ipad'/>
                
            </div> */}
        </div>
    )
}

export default HomePage;