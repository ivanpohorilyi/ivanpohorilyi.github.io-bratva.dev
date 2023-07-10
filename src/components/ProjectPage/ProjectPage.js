import React from "react"
import { FormattedMessage } from "react-intl"
import { useParams } from "react-router-dom"
import "./ProjectPage.scss"

const webDevData = [
    {
        id: 1,
        title: "name of case",
        desktopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 2,
        title: "name of case",
        desktopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 3,
        title: "name of case",
        desktopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    },
    {
        id: 4,
        title: "name of case",
        desktopImg: "https://www.techbuzzonline.com/wp-content/uploads/2018/06/alpha-wallhaven.jpg",
        mobileImg: "https://blog.hubspot.com/hs-fs/hubfs/lean-labs-mobile-website.png?t=1539930716230&width=350&name=lean-labs-mobile-website.png",
        category: "web-development",
        description: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
        link: "https://rt.pornhub.com/gay/categories"
    }
]

function ProjectPage() {
    const { projectId } = useParams()
    console.log(projectId)
    const project = webDevData.find((project) => project.id === Number(projectId))
    console.log(project)
    const [isTablet, setIsTablet] = React.useState(window.innerWidth < 1150 ? true : false)
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1150) {
                setIsTablet(true)
            } else {
                setIsTablet(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    }, [])
    return (
        <div className="project-page">
            <main className="project-page__main">
                <div className="project-page__row">
                    <div className="project-page__column project-page__desctop">
                        {isTablet && <div className="project-page__header">
                            <h2 className="project-page__title">{project.title}</h2>
                            <p className="project-page__subtitle">
                                <FormattedMessage id="project_category" />
                                {project.category}</p>
                        </div>
                        }
                        <h2 className="project-page__title">
                            <FormattedMessage id="project_desktitle" />
                        </h2>
                        <div className="project-page__img">
                            <img src={`${project.desktopImg}`} alt="" />
                        </div>
                    </div>
                    <div className="project-page__column project-page__mobile">
                        <h2 className="project-page__title">
                            <FormattedMessage id="project_mobtitle" />
                        </h2>
                        <div className="project-page__img">
                            <img src={`${project.mobileImg}`} alt="" />
                        </div>
                    </div>
                    <div className="project-page__column project-page__info">
                        {!isTablet && <div className="project-page__header">
                            <h2 className="project-page__title">{project.title}</h2>
                            <p className="project-page__subtitle">
                                <FormattedMessage id="project_category" /> {project.category}
                            </p>
                        </div>
                        }
                        <p className="project-page__desc">
                            {project.description}
                        </p>
                        <p className="project-page__link">link: <a href="/#">{project.link}</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProjectPage