import React from 'react'
import upworkImg from '../../img/upwork.png'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { FormattedMessage } from "react-intl"
import { motion, useInView } from "framer-motion"
import 'swiper/scss'
import './About.scss'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.3;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 0.7, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

export default function About() {
    const [isTablet, setIsTablet] = React.useState(window.innerWidth <= 991 ? true : false)
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 767 ? true : false)
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 991) {
                setIsTablet(true)
            } else {
                setIsTablet(false)
            }
            if (window.innerWidth <= 767) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    }, [])


    return (
        <section id='about' className='about'>
            <div className="about__container">
                <div className="about__top top-about">
                    <div className={`top-about__left ${isMobile ? "hidden" : ""}`}>
                        <h2 className="top-about__title">
                            <FormattedMessage id='about_title' />
                        </h2>
                        <div className='top-about__carousel'>
                            <Swiper className="top-about__services services-about"
                                spaceBetween={20}
                                slidesPerView={'auto'}
                            >
                                <SwiperSlide className='services-about__slide'>
                                    <a href="/#" className="services-about__item">bratva courses</a>
                                </SwiperSlide>
                                <SwiperSlide className='services-about__slide'>
                                    <a href="/#" className="services-about__item">bratva cloud</a>
                                </SwiperSlide>
                                <SwiperSlide className='services-about__slide'>
                                    <a href="/#" className="services-about__item">bratva design</a>
                                </SwiperSlide>
                                <SwiperSlide className='services-about__slide'>
                                    <a href="/#" className="services-about__item services-about__item_u"><img src={upworkImg} alt="" /></a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    {!isTablet && <div className="top-about__right">
                        <FormattedMessage id='about_p4' />
                    </div>}
                </div>
                <div className="about__company company-about">
                    <h2 className="company-about__title">
                        <FormattedMessage id='about_company' />
                    </h2>
                    <div className="company-about__row">
                        <div className="company-about__advantages advantages-about">
                            <div className="advantages-about__item">
                                <FormattedMessage id='about_p1' />
                            </div>
                            {!isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">
                                    <FormattedMessage id='about_p2' />
                                </div>}
                            {!isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">
                                    <FormattedMessage id='about_p3' />
                                </div>}
                        </div>
                        <div ref={ref} className="company-about__graph graph-about">
                            <h2 className="graph-about__title">
                                <FormattedMessage id='graph_title' />
                            </h2>
                            <div className="graph-about__block">
                                <div className="graph-about__lines">
                                    {isInView && <motion.svg initial="hidden" animate="visible" className='graph-about__svg' viewBox="0 0 598 267" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" y1="267" x2="0.499989" y2="22" stroke="black" />
                                        <line y1="266.5" x2="598" y2="266.5" stroke="black" />
                                        <line x1="597.5" y1="267" x2="597.5" stroke="black" />
                                        <line x1="597.001" y1="0.499999" x2="0.000946348" y2="1.54553" stroke="black" />
                                        <line x1="0.5" y1="1" x2="0.5" y2="26" stroke="black" />
                                        <motion.path variants={draw} custom={1} d="M0.843158 266.525, L112.843 229.525" stroke="black" />
                                        <motion.line variants={draw} custom={2} x1="112.594" y1="229.709" x2="145.594" y2="183.709" stroke="black" />
                                        <motion.path variants={draw} custom={3} d="M145.5 184L258.837 144.527" stroke="black" />
                                        <motion.line variants={draw} custom={4} x1="258.094" y1="144.509" x2="362.094" y2="164.509" stroke="black" />
                                        <motion.line variants={draw} custom={5} x1="361.894" y1="164.511" x2="509.894" y2="132.511" stroke="black" />
                                        <motion.line variants={draw} custom={6} x1="509" y1="132.5" x2="579" y2="132.5" stroke="black" />
                                        <motion.line variants={draw} custom={7} x1="0.669686" y1="266.625" x2="50.6697" y2="222.625" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={8} x1="50.5671" y1="222.75" x2="76.5671" y2="177.75" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={9} x1="75.7495" y1="178.567" x2="151.749" y2="134.567" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={10} x1="150.95" y1="134.502" x2="240.95" y2="125.502" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={11} x1="240.842" y1="125.526" x2="309.842" y2="102.526" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={12} x1="309.034" y1="102.501" x2="396.034" y2="108.501" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={13} x1="394.908" y1="108.508" x2="571.908" y2="75.5085" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={7} x1="51.6034" y1="227.695" x2="94.6034" y2="171.695" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={8} x1="94.7537" y1="171.565" x2="147.754" y2="141.565" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={9} x1="147.924" y1="141.506" x2="258.924" y2="124.506" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={10} x1="259.169" y1="124.47" x2="309.169" y2="106.47" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={11} x1="309" y1="106.5" x2="422" y2="106.5" stroke="#0BFF23" />
                                        <motion.line variants={draw} custom={12} x1="422.095" y1="106.491" x2="510.095" y2="89.4909" stroke="#0BFF23" />
                                        <motion.path variants={draw} custom={10} d="M52.3536 226.646C52.1583 226.451 51.8417 226.451 51.6464 226.646L48.4645 229.828C48.2692 230.024 48.2692 230.34 48.4645 230.536C48.6597 230.731 48.9763 230.731 49.1716 230.536L52 227.707L54.8284 230.536C55.0237 230.731 55.3403 230.731 55.5355 230.536C55.7308 230.34 55.7308 230.024 55.5355 229.828L52.3536 226.646ZM52.5 249L52.5 227H51.5L51.5 249H52.5Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={11} d="M52.3536 226.646C52.1583 226.451 51.8417 226.451 51.6464 226.646L48.4645 229.828C48.2692 230.024 48.2692 230.34 48.4645 230.536C48.6597 230.731 48.9763 230.731 49.1716 230.536L52 227.707L54.8284 230.536C55.0237 230.731 55.3403 230.731 55.5355 230.536C55.7308 230.34 55.7308 230.024 55.5355 229.828L52.3536 226.646ZM52.5 249L52.5 227H51.5L51.5 249H52.5Z" fill="black" fillOpacity="0.2" />
                                        <motion.path variants={draw} custom={12} d="M95.3536 170.646C95.1583 170.451 94.8417 170.451 94.6464 170.646L91.4645 173.828C91.2692 174.024 91.2692 174.34 91.4645 174.536C91.6597 174.731 91.9763 174.731 92.1716 174.536L95 171.707L97.8284 174.536C98.0237 174.731 98.3403 174.731 98.5355 174.536C98.7308 174.34 98.7308 174.024 98.5355 173.828L95.3536 170.646ZM95.5 235L95.5 171H94.5L94.5 235H95.5Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={13} d="M95.3536 170.646C95.1583 170.451 94.8417 170.451 94.6464 170.646L91.4645 173.828C91.2692 174.024 91.2692 174.34 91.4645 174.536C91.6597 174.731 91.9763 174.731 92.1716 174.536L95 171.707L97.8284 174.536C98.0237 174.731 98.3403 174.731 98.5355 174.536C98.7308 174.34 98.7308 174.024 98.5355 173.828L95.3536 170.646ZM95.5 235L95.5 171H94.5L94.5 235H95.5Z" fill="black" fillOpacity="0.2" />
                                        <motion.path variants={draw} custom={14} d="M148.354 140.646C148.158 140.451 147.842 140.451 147.646 140.646L144.464 143.828C144.269 144.024 144.269 144.34 144.464 144.536C144.66 144.731 144.976 144.731 145.172 144.536L148 141.707L150.828 144.536C151.024 144.731 151.34 144.731 151.536 144.536C151.731 144.34 151.731 144.024 151.536 143.828L148.354 140.646ZM148.5 182L148.5 141L147.5 141L147.5 182L148.5 182Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={15} d="M148.354 140.646C148.158 140.451 147.842 140.451 147.646 140.646L144.464 143.828C144.269 144.024 144.269 144.34 144.464 144.536C144.66 144.731 144.976 144.731 145.172 144.536L148 141.707L150.828 144.536C151.024 144.731 151.34 144.731 151.536 144.536C151.731 144.34 151.731 144.024 151.536 143.828L148.354 140.646ZM148.5 182L148.5 141L147.5 141L147.5 182L148.5 182Z" fill="black" fillOpacity="0.2" />
                                        <motion.path variants={draw} custom={16} d="M259.354 122.646C259.158 122.451 258.842 122.451 258.646 122.646L255.464 125.828C255.269 126.024 255.269 126.34 255.464 126.536C255.66 126.731 255.976 126.731 256.172 126.536L259 123.707L261.828 126.536C262.024 126.731 262.34 126.731 262.536 126.536C262.731 126.34 262.731 126.024 262.536 125.828L259.354 122.646ZM259.5 145L259.5 123L258.5 123L258.5 145L259.5 145Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={17} d="M259.354 122.646C259.158 122.451 258.842 122.451 258.646 122.646L255.464 125.828C255.269 126.024 255.269 126.34 255.464 126.536C255.66 126.731 255.976 126.731 256.172 126.536L259 123.707L261.828 126.536C262.024 126.731 262.34 126.731 262.536 126.536C262.731 126.34 262.731 126.024 262.536 125.828L259.354 122.646ZM259.5 145L259.5 123L258.5 123L258.5 145L259.5 145Z" fill="black" fillOpacity="0.2" />
                                        <motion.path variants={draw} custom={18} d="M309.354 105.646C309.158 105.451 308.842 105.451 308.646 105.646L305.464 108.828C305.269 109.024 305.269 109.34 305.464 109.536C305.66 109.731 305.976 109.731 306.172 109.536L309 106.707L311.828 109.536C312.024 109.731 312.34 109.731 312.536 109.536C312.731 109.34 312.731 109.024 312.536 108.828L309.354 105.646ZM309.5 154L309.5 106L308.5 106L308.5 154L309.5 154Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={19} d="M309.354 105.646C309.158 105.451 308.842 105.451 308.646 105.646L305.464 108.828C305.269 109.024 305.269 109.34 305.464 109.536C305.66 109.731 305.976 109.731 306.172 109.536L309 106.707L311.828 109.536C312.024 109.731 312.34 109.731 312.536 109.536C312.731 109.34 312.731 109.024 312.536 108.828L309.354 105.646ZM309.5 154L309.5 106L308.5 106L308.5 154L309.5 154Z" fill="black" fillOpacity="0.2" />
                                        <motion.path variants={draw} custom={20} d="M422.354 105.646C422.158 105.451 421.842 105.451 421.646 105.646L418.464 108.828C418.269 109.024 418.269 109.34 418.464 109.536C418.66 109.731 418.976 109.731 419.172 109.536L422 106.707L424.828 109.536C425.024 109.731 425.34 109.731 425.536 109.536C425.731 109.34 425.731 109.024 425.536 108.828L422.354 105.646ZM422.5 152L422.5 106L421.5 106L421.5 152L422.5 152Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={21} d="M422.354 105.646C422.158 105.451 421.842 105.451 421.646 105.646L418.464 108.828C418.269 109.024 418.269 109.34 418.464 109.536C418.66 109.731 418.976 109.731 419.172 109.536L422 106.707L424.828 109.536C425.024 109.731 425.34 109.731 425.536 109.536C425.731 109.34 425.731 109.024 425.536 108.828L422.354 105.646ZM422.5 152L422.5 106L421.5 106L421.5 152L422.5 152Z" fill="black" fillOpacity="0.2" />
                                        <motion.path variants={draw} custom={22} d="M510.354 88.6464C510.158 88.4512 509.842 88.4512 509.646 88.6464L506.464 91.8284C506.269 92.0237 506.269 92.3403 506.464 92.5355C506.66 92.7308 506.976 92.7308 507.172 92.5355L510 89.7071L512.828 92.5355C513.024 92.7308 513.34 92.7308 513.536 92.5355C513.731 92.3403 513.731 92.0237 513.536 91.8284L510.354 88.6464ZM510.5 133L510.5 89L509.5 89L509.5 133L510.5 133Z" fill="#0BFF23" />
                                        <motion.path variants={draw} custom={23} d="M510.354 88.6464C510.158 88.4512 509.842 88.4512 509.646 88.6464L506.464 91.8284C506.269 92.0237 506.269 92.3403 506.464 92.5355C506.66 92.7308 506.976 92.7308 507.172 92.5355L510 89.7071L512.828 92.5355C513.024 92.7308 513.34 92.7308 513.536 92.5355C513.731 92.3403 513.731 92.0237 513.536 91.8284L510.354 88.6464ZM510.5 133L510.5 89L509.5 89L509.5 133L510.5 133Z" fill="black" fillOpacity="0.2" />
                                    </motion.svg>}

                                </div>
                                <div className="graph-about__chart">
                                    <div className="graph-about__growth graph-about__growth_before">
                                        <FormattedMessage id='graph_before' />
                                    </div>
                                    <div className="graph-about__growth graph-about__growth_after">
                                        <FormattedMessage id='graph_before' />
                                    </div>
                                </div>
                            </div>
                            {isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">
                                    <FormattedMessage id='about_p1' />
                                </div>}
                            {isTablet &&
                                <div className="advantages-about__item advantages-about__item_s">
                                    <FormattedMessage id='about_p2' />
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}