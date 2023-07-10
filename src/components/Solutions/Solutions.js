import React from 'react'
import { Swiper } from 'swiper/react'
import { FormattedMessage } from "react-intl"
import { SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/scss'
import './Solutions.scss'

export default function Solutions() {
    const [isLoop, setIsLoop] = React.useState(window.innerWidth < 1550 ? true : false)
    function handleResize() {
        if (window.innerWidth <= 1550) {
            setIsLoop(true)
        } else {
            setIsLoop(false)
        }
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <section id="solutions" className='solutions'>
            <div className="solutions__container">
                <h2 className="solutions__title">
                    <FormattedMessage id='solutions_title' />
                </h2>
                <div className="solutions__intro">
                    <FormattedMessage id='solutions_intro' />
                </div>
                <div className="solutions__row">
                    <div className="solutions__item item-solutions item-solutions_purple">
                        <div className="item-solutions__category">
                            <h3>
                                <FormattedMessage id='solutions_category1' />
                            </h3>
                            <div className='item-solutions__carousel'>
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_discussions' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_market' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_docs' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_design' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_frontend' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_host' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>
                                <FormattedMessage id='solutions_stores' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_corporate' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_landing' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_out' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_startups' />
                            </li>
                        </ul>
                    </div>
                    <div className="solutions__item item-solutions item-solutions_blue">
                        <div className="item-solutions__category">
                            <h3>
                                <FormattedMessage id='solutions_category2' />
                            </h3>
                            <div className='item-solutions__carousel'>
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_discussions' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_analysis' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_docs' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_design' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_testing' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_host' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>
                                <FormattedMessage id='solutions_IOS' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_UI' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_startups' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_out' />
                            </li>
                        </ul>
                    </div>
                    <div className="solutions__item item-solutions item-solutions_green">
                        <div className="item-solutions__category">
                            <h3>
                                <FormattedMessage id='solutions_category3' />
                            </h3>
                            <div className='item-solutions__carousel' >
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_discussions' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_analysis' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_docs' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_design' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_integrationDev' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_host' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>
                                <FormattedMessage id='solutions_telegram' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_whatsup' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_facebook' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_integration' />
                            </li>
                        </ul>
                    </div>
                    <div className="solutions__item item-solutions item-solutions_gray">
                        <div className="item-solutions__category">
                            <h3>
                                <FormattedMessage id='solutions_category4' />
                            </h3>
                            <div className='item-solutions__carousel' >
                                <Swiper className='item-solutions__services'
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    modules={[Autoplay]}
                                    grabCursor={true}
                                    loop={isLoop ? true : false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_discussions' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_analysis' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_docs' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_design' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_testing' />
                                    </SwiperSlide>
                                    <SwiperSlide className='item-solutions__slide'>
                                        <FormattedMessage id='solutions_host' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <ul className='item-solutions__list'>
                            <li>
                                <FormattedMessage id='solutions_emergency' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_automation' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_fsoftware' />
                            </li>
                            <li>
                                <FormattedMessage id='solutions_esoftware' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}