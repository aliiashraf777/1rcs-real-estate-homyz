import './hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CounUp from 'react-countup';

const home = () => {
    return (
        <section className="hero-wrapper">
            <div className="hero-container innerWidth flexCenter paddings"> 

                {/* hero content */}
                <div className="hero-content flexColStart">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br />Most Suitable <br /> Property</h1>
                    </div>

                    <div className="hero-desc flexColStart">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="search-bar flexCenter">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className="btn">Search</button>
                    </div>

                    <div className="stats flexCenter">
                        <div className="stat flexColCenter">
                            <span>
                                <CounUp start={8800} end={9000} delay={0} duration={4} prefix='' suffix='' />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium Products
                            </span>
                        </div>
                        {/* stat2 */}
                        <div className="stat flexColCenter">
                            <span>
                                <CounUp start={1950} end={2000} delay={0} duration={4} prefix='' suffix='' />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Happy Customer
                            </span>
                        </div>
                        {/* stat3 */}
                        <div className="stat flexColCenter">
                            <span>
                                <CounUp start={0} end={28} delay={0} duration={4} prefix='' suffix='' />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Awards Winning
                            </span>
                        </div>
                    </div>
                </div>

                {/* hero image */}
                <div className="hero-img flexStart">
                    <figure className="domImg-container">
                        <img src="/assets/hero-image.png" alt="" />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default home
