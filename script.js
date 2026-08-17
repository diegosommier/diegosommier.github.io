/* ==============================
   PROJECTS
============================== */

const projectsContainer =
    document.getElementById("projectsContainer");

function renderProjects(language){

    if(!projectsContainer){
        return;
    }

    projectsContainer.innerHTML = "";

    projects.forEach(project => {

        const article =
            document.createElement("article");

        article.className = "project";

        const title =
            document.createElement("h3");

        title.textContent =
            project.title[language];

        article.appendChild(title);

        if(project.image){

            const image =
                document.createElement("img");

            image.className =
                "project-image";

            image.src =
                project.image;

            image.alt =
                project.imageAlt[language];

            image.loading =
                "lazy";

            article.appendChild(image);
        }

        const description =
            document.createElement("p");

        description.textContent =
            project.description[language];

        article.appendChild(description);

        if(project.tags && project.tags.length){

            const tags =
                document.createElement("div");

            tags.className =
                "tags";

            project.tags.forEach(tag => {

                const tagElement =
                    document.createElement("span");

                tagElement.className =
                    "tag";

                tagElement.textContent =
                    tag;

                tags.appendChild(
                    tagElement
                );
            });

            article.appendChild(tags);
        }

        const link =
            document.createElement("a");

        link.className =
            "project-link";

        link.href =
            project.github;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

        const githubIcon =
            document.createElement("i");

        githubIcon.className =
            "fa-brands fa-github";

        const linkText =
            document.createElement("span");

        linkText.textContent =
            language === "es"
                ? "Ver el proyecto en GitHub"
                : "View the project on GitHub";

        const arrowIcon =
            document.createElement("i");

        arrowIcon.className =
            "fa-solid fa-arrow-up-right-from-square";

        link.appendChild(githubIcon);
        link.appendChild(linkText);
        link.appendChild(arrowIcon);

        article.appendChild(link);

        projectsContainer.appendChild(
            article
        );
    });
}


/* ==============================
   LANGUAGE
============================== */

const languageButtons =
    document.querySelectorAll(
        ".language-button"
    );

const translatableElements =
    document.querySelectorAll(
        "[data-en][data-es]"
    );

const cvDownload =
    document.getElementById(
        "cvDownload"
    );

const floatingCvDownload =
    document.getElementById(
        "floatingCvDownload"
    );

function setLanguage(language){

    document.documentElement.lang =
        language;

    const azureCertification =
        document.getElementById(
            "azureCertification"
        );

    if(azureCertification){

        azureCertification.title =
            language === "es"
                ? azureCertification.dataset.titleEs
                : azureCertification.dataset.titleEn;

        azureCertification.setAttribute(
            "aria-label",
            azureCertification.title
        );

        azureCertification.href =
            language === "es"
                ? azureCertification.dataset.urlEs
                : azureCertification.dataset.urlEn;
    }

    translatableElements.forEach(
        element => {

            const translation =
                element.dataset[language];

            if(!translation){
                return;
            }

            if(
                element.classList.contains(
                    "portrait-credit"
                )
            ){

                element.innerHTML =
                    translation;

            }else{

                element.textContent =
                    translation;
            }
        }
    );

    languageButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === language
            );

        }
    );

    document.title =
        language === "es"
            ? "Diego Sommier | Administrador de Sistemas"
            : "Diego Sommier | Systems Administrator";

    const description =
        document.querySelector(
            'meta[name="description"]'
        );

    if(description){

        description.setAttribute(
            "content",
            language === "es"
                ? "Diego Sommier — Profesional de TI con más de 9 años de experiencia en administración de sistemas e infraestructura, orientado hacia Cloud, automatización y DevOps."
                : "Diego Sommier — IT professional with 9+ years of experience in systems administration and infrastructure, building a path into Cloud, automation and DevOps."
        );
    }

    const cvFile =
        language === "es"
            ? "cv-diego-sommier-es.pdf"
            : "cv-diego-sommier-en.pdf";

    if(cvDownload){

        cvDownload.href =
            cvFile;
    }

    if(floatingCvDownload){

        floatingCvDownload.href =
            cvFile;
    }

    renderProjects(language);

    localStorage.setItem(
        "preferredLanguage",
        language
    );
}

languageButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    }
);

const savedLanguage =
    localStorage.getItem(
        "preferredLanguage"
    );

setLanguage(
    savedLanguage === "en" ||
    savedLanguage === "es"
        ? savedLanguage
        : "en"
);


/* ==============================
   FLOATING ACTIONS
============================== */

const floatingActions =
    document.getElementById(
        "floatingActions"
    );

function updateFloatingActions(){

    if(window.scrollY > 450){

        floatingActions.classList.add(
            "visible"
        );

    }else{

        floatingActions.classList.remove(
            "visible"
        );
    }
}

window.addEventListener(
    "scroll",
    updateFloatingActions,
    {
        passive:true
    }
);

updateFloatingActions();


/* ==============================
   ACTIVE NAVIGATION
============================== */

const links = [
    ...document.querySelectorAll(
        "nav a[href^='#']"
    )
];

const home =
    document.querySelector(
        ".nav-home"
    );

const sections =
    links
        .filter(
            link =>
                !link.classList.contains(
                    "nav-home"
                )
        )
        .map(
            link => ({
                link,
                section:
                    document.getElementById(
                        link.getAttribute(
                            "href"
                        ).slice(1)
                    )
            })
        )
        .filter(
            item =>
                item.section
        );

function updateActiveNav(){

    const top =
        window.scrollY < 120;

    links.forEach(
        link =>
            link.classList.remove(
                "active"
            )
    );

    if(top){

        home?.classList.add(
            "active"
        );

        return;
    }

    let current =
        sections[0];

    for(
        const item of sections
    ){

        if(
            item.section
                .getBoundingClientRect()
                .top <= 180
        ){

            current =
                item;
        }
    }

    current?.link.classList.add(
        "active"
    );
}

window.addEventListener(
    "scroll",
    updateActiveNav,
    {
        passive:true
    }
);

updateActiveNav();
