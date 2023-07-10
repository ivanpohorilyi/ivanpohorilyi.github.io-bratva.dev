import './Intro.scss'
import { FormattedMessage } from "react-intl"

export default function Intro() {
    return (
        <section className='intro'>
            <div className="intro__container">
                <h1 className='intro__title'>
                    <FormattedMessage id='intro_title' />
                </h1>
            </div>
        </section>
    )
}