import './Technologies.scss'
import { FormattedMessage } from "react-intl"
import reactImg from '../../img/technologies/react.png'
import angularImg from '../../img/technologies/angular.png'
import vueImg from '../../img/technologies/vue.png'
import nodeImg from '../../img/technologies/node.png'
import nextjsImg from '../../img/technologies/nextjs.png'
import springImg from '../../img/technologies/spring.png'
import hibernateImg from '../../img/technologies/hibernate.png'
import laravelImg from '../../img/technologies/laravel.png'
import djangoImg from '../../img/technologies/django.png'
import pythonImg from '../../img/technologies/python.png'
import csharpImg from '../../img/technologies/csharp.png'
import javaImg from '../../img/technologies/java.png'
import flutterImg from '../../img/technologies/flutter.png'
import dartImg from '../../img/technologies/dart.png'
import kotlinImg from '../../img/technologies/kotlin.png'
import cplusplusImg from '../../img/technologies/cplusplus.png'

export default function Technologies() {
    return (
        <section className='technologies'>
            <div className="technologies__container">
                <h2 className="technologies__title">
                    <FormattedMessage id='technologies_title' />
                </h2>
                <div className="technologies__categories">
                    <div className="technologies__item item-technologies item-technologies_b">
                        <h3 className="item-technologies__title">
                            <FormattedMessage id='technologies_webdev' />
                        </h3>
                        <div className="item-technologies__category category-item">
                            <h3 className="category-item__title">frontend</h3>
                            <div><img src={reactImg} alt="" /></div>
                            <div><img src={angularImg} alt="" /></div>
                            <div><img src={vueImg} alt="" /></div>
                        </div>
                        <div className="item-technologies__category category-item category-item_b">
                            <h3 className="category-item__title">backend</h3>
                            <div><img src={nodeImg} alt="" /></div>
                            <div><img src={nextjsImg} alt="" /></div>
                            <div><img src={springImg} alt="" /></div>
                            <div><img src={hibernateImg} alt="" /></div>
                            <div><img src={laravelImg} alt="" /></div>
                            <div> <img src={djangoImg} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="technologies__categories">
                    <div className="technologies__item item-technologies item-technologies_s">
                        <h3 className="item-technologies__title">
                            <FormattedMessage id='technologies_mobdev' />
                        </h3>
                        <div className="item-technologies__category category-item category-item_mobile">
                            <img src={nodeImg} alt="" />
                            <img src={pythonImg} alt="" />
                            <img src={csharpImg} alt="" />
                            <img src={javaImg} alt="" />
                            <img src={flutterImg} alt="" />
                            <img src={dartImg} alt="" />
                            <img src={kotlinImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="technologies__categories">
                    <div className="technologies__item item-technologies item-technologies_s item-technologies_dekstop">
                        <h3 className="item-technologies__title">
                            <FormattedMessage id='technologies_deskdev' />
                        </h3>
                        <div className="item-technologies__category category-item">
                            <div><img src={cplusplusImg} alt="" /></div>
                            <div><img src={csharpImg} alt="" /></div>
                            <div><img src={javaImg} alt="" /></div>
                            <div><img src={pythonImg} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}