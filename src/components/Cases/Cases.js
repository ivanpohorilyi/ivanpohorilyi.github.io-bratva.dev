import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { FormattedMessage } from "react-intl"
import SwiperCore from "swiper/core"
import 'swiper/scss';
import 'swiper/css/navigation'
import './Cases.scss'

SwiperCore.use([Navigation])

const webDevData = [
    {
        id: 1,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 2,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 3,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 4,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    }
]
const mobileDevData = [
    {
        id: 1,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 2,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 3,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 4,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    }
]
const botDevData = [
    {
        id: 1,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 2,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 3,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 4,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    }
]
const dekstopDevData = [
    {
        id: 1,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 2,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 3,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 4,
        title: "name of case",
        dekstopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    }
]

export default function Cases() {
    const webDevProjects = webDevData.map((project) => {
        return (
            <SwiperSlide key={project.category + project.id}>
                <Link to={`/${project.id}`} className='category-cases__project project-cases'>
                    <img src={project.dekstopImg} alt="" />
                    <h2 className='project-cases__title'>{project.title}</h2>
                </Link>
            </SwiperSlide>
        )
    })
    const mobileDevProjects = mobileDevData.map((project) => {
        return (
            <SwiperSlide key={project.category + project.id}>
                <Link to={`/${project.id}`} className='category-cases__project project-cases'>
                    <img src={project.dekstopImg} alt="" />
                    <h2 className='project-cases__title'>{project.title}</h2>
                </Link>
            </SwiperSlide>
        )
    })
    const botDevProjects = botDevData.map((project) => {
        return (
            <SwiperSlide key={project.category + project.id}>
                <Link to={`/${project.id}`} className='category-cases__project project-cases'>
                    <img src={project.dekstopImg} alt="" />
                    <h2 className='project-cases__title'>{project.title}</h2>
                </Link>
            </SwiperSlide>
        )
    })
    const desctopDevProjects = dekstopDevData.map((project) => {
        return (
            <SwiperSlide key={project.category + project.id}>
                <Link to={`/${project.id}`} className='category-cases__project project-cases'>
                    <img src={project.dekstopImg} alt="" />
                    <h2 className='project-cases__title'>{project.title}</h2>
                </Link>
            </SwiperSlide>
        )
    })
    return (
        <section id='cases' className='cases'>
            <div className="cases__container">
                <h2 className="cases__title">
                    <FormattedMessage id="cases_title" />
                </h2>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">
                        <FormattedMessage id="cases_category1" />
                    </h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {webDevProjects}
                    </Swiper>
                </div>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">
                        <FormattedMessage id="cases_category2" />
                    </h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {mobileDevProjects}
                    </Swiper>
                </div>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">
                        <FormattedMessage id="cases_category3" />
                    </h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {botDevProjects}
                    </Swiper>
                </div>
                <div className="cases__category category-cases">
                    <h2 className="category-cases__title">
                        <FormattedMessage id="cases_category4" />
                    </h2>
                    <Swiper className='category-cases__slider'
                        modules={Navigation}
                        navigation
                        spaceBetween={47}
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {desctopDevProjects}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}