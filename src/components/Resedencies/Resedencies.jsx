import './Resedencies.css'
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';


const Resedencies = () => {
    const swiperRef = useRef(null);

    return (
        <section className="r-wrapper">
            <div className="r-container innerWidth paddings">
                <div className="r-head flexColStart">
                    <h3 className='orangeText'>Best Choices</h3>
                    <h2 className='primaryText'>Popular Residencies</h2>
 
                    {/* <SliderButtons /> */}
                    <SliderButtons swiperRef={swiperRef} />
                </div>


                {/* <div className="slider-wrap"> */}
                <Swiper {...sliderSettings}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {/* <SliderButtons /> */}
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card  flexColStart">
                                    <img src={card.image} alt="home" />

                                    <h4 className="r-price secondaryText">
                                        <span style={{ color: 'var(--orange)' }}>$ </span>
                                        <span>{card.price}</span>
                                    </h4>

                                    <div className="r-desc">
                                        <h2 className="primaryText">{card.name}</h2>
                                        <p className="secondaryText">{card.detail}</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Resedencies

const SliderButtons = ({ swiperRef }) => {
    // const swiper = useSwiper();

    return (
        <div className="r-buttons flexCenter">
            {/* <button onClick={() => swiper.slidePrev()}> */}
            <button onClick={() => swiperRef.current?.slidePrev()}>
                &lt;
            </button>
            {/* <button onClick={() => swiper.slideNext()}> */}
            <button onClick={() => swiperRef.current?.slideNext()}>
                &gt;
            </button>
        </div>
    )
}
