import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../style/mySwiper.css'

const imgUrl = ['https://itc.ua/wp-content/uploads/2019/03/SmartPhones-2017.jpg',
    'https://s1.1zoom.ru/b5050/15/MWC_2017_ZTE_Gigabit_ZTE_Smartphone_Telephone_524519_1920x1080.jpg',
    'https://s1.1zoom.ru/b5050/734/Holidays_Men_People_Blonde_girl_Stemware_Smile_Joy_559486_1920x1080.jpg',
    'https://cdnn21.img.ria.ru/images/07e5/02/08/1596506217_0:57:3008:1749_1920x0_80_0_0_40995d3675c1af4e1398b2c549aea57f.jpg']

const Slider = React.memo(function Slider() {
    // console.log('render Slider')
    return (
        <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className='swiper'
            effect="fade"
            autoplay={{ deley: 5000 }}
        >
            {imgUrl.map((el, i) => {
                return (<SwiperSlide key={i}>
                    <img className='swiper_img' src={el} alt="some slide" />
                    <a className='swiper__info' href="#homepage-more">Подробнее</a>
                </SwiperSlide>)
            })}
        </Swiper>
    );
});

export default Slider;