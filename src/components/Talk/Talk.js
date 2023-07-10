import React from 'react'
import './Talk.scss'
import instagramIcon from '../../img/Instagram.png'
import linkedInIcon from '../../img/LinkedIn.png'
import telegramIcon from '../../img/telegram.png'
import { FormattedMessage } from 'react-intl'

export default function Talk() {
    const [formData, setFormData] = React.useState(
        { name: "name", email: "email", message: "message" }
    )
    const [blurData, setBlurData] = React.useState(
        { name: false, email: false, message: false }
    )
    const [isClicked, setIsClicked] = React.useState(
        { name: false, email: false, message: false }
    )
    const [formErrors, setFormErrors] = React.useState({})

    function handleChange(event) {
        setFormData((prevForm) => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormErrors(validate(formData))
    }

    function handleFocus(event) {
        setBlurData((prevBlurData => {
            return {
                ...prevBlurData,
                [event.target.name]: true
            }
        }))
    }

    function handleClick(event) {
        const target = event.target
        if (!isClicked[target.name]) {
            setFormData((prevForm) => {
                return {
                    ...prevForm,
                    [event.target.name]: event.target.value + ": "
                }
            })
            setIsClicked((prevData) => {
                return {
                    ...prevData,
                    [target.name]: true
                }
            })
        }
    }

    function validate(formValues) {
        const errors = {}
        if (!formValues.name || formValues.name === "name") {
            errors.name = "Input your name"
        }
        if (!formValues.email || formValues.email === "email") {
            errors.email = "Input your email"
        }
        if (!formValues.message || formValues.message === "message") {
            errors.message = "Input your message"
        }
        return errors
    }

    return (
        <section id="talk" className='talk'>
            <div className="talk__container">
                <p className="talk__description">
                    <FormattedMessage id='talk_description' />
                </p>
                <div className="talk__wrapper">
                    <form className='talk__form' onSubmit={handleSubmit}>
                        <h1 className='talk__label'>Let`s talk</h1>
                        <input className='talk__input' type="text" value={formData.name} onClick={handleClick} onChange={handleChange} name="name" onBlur={handleFocus} focused={blurData.name.toString()} />
                        {formErrors.name && <p className="error-name error-text">
                            <FormattedMessage id='talk_errname' />
                        </p>}
                        <input className='talk__input' type="text" value={formData.email} onClick={handleClick} onChange={handleChange} name="email" onBlur={handleFocus} focused={blurData.email.toString()} />
                        {formErrors.email && <p className='error-text error-email'>
                            <FormattedMessage id='talk_erremail' />
                        </p>}
                        <textarea className='talk__input talk__area' type="text" value={formData.message} onClick={handleClick} onChange={handleChange} onBlur={handleFocus} name="message" focused={blurData.message.toString()} />
                        {formErrors.message && < p className='error-message error-text'>
                            <FormattedMessage id='talk_errmessage' />
                        </p>}
                        <button type='submit' className='talk__btn'>
                            <FormattedMessage id='talk_send' />
                        </button>
                    </form>
                </div>
                <div className="talk__socials">
                    <a className='talk__social' href='/#'><img src={instagramIcon} alt="" /></a>
                    <a className='talk__social' href='/#'><img src={linkedInIcon} alt="" /></a>
                    <a className='talk__social' href='/#'><img src={telegramIcon} alt="" /></a>
                </div>
            </div>
        </section >
    )
}