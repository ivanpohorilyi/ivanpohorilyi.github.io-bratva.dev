import './Footer.scss'
import { FormattedMessage } from "react-intl"
import instagramIcon from '../../img/Instagram.png'
import linkedInIcon from '../../img/LinkedIn.png'
import telegramIcon from '../../img/telegram.png'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__column">
                        <NavLink className='footer__logo' to={"/bratva-website"}>bratva.dev <br /><span>the best way to get result</span></NavLink>
                        <ul className="footer__list">
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">
                                    <FormattedMessage id='about' />
                                </Link>
                            </li>
                            <li>
                                <Link to="solutions" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">
                                    <FormattedMessage id='solutions' />
                                </Link>
                            </li>
                            <li>
                                <Link to="technologies" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">
                                    <FormattedMessage id='technologies' />
                                </Link>
                            </li>
                            <li>
                                <Link to="cases" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">
                                    <FormattedMessage id='cases' />
                                </Link>
                            </li>
                            <li>
                                <Link to="team" spy={true} smooth={true} offset={-70} duration={500} className="footer__link">
                                    <FormattedMessage id='team' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__products products-footer">
                        <h2 className="products-footer__title">
                            <FormattedMessage id='footer_products' />
                        </h2>
                        <ul className="footer__list">
                            <li><a href="/#" className="footer__link">bratva.dev</a></li>
                            <li><a href="/#" className="footer__link">bratva.courses</a></li>
                            <li><a href="/#" className="footer__link">bratva.cloud</a></li>
                            <li><a href="/#" className="footer__link">bratva.design</a></li>
                            <li><a href="/#" className="footer__link">bratva.bike</a></li>
                        </ul>
                    </div>
                    <div className="footer__socials">
                        <a className='footer__social' href='/#'><img src={instagramIcon} alt="" /></a>
                        <a className='footer__social' href='/#'><img src={linkedInIcon} alt="" /></a>
                        <a className='footer__social' href='/#'><img src={telegramIcon} alt="" /></a>
                    </div>
                </div>
                <div className="footer__copyright">
                    © 2022 Bratva.dev Corporation.
                    All rights reserved.
                </div>
            </div>
        </footer>
    )
}