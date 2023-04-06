export default function Skills() {
    const skillArr = [
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            name: "HTML"
        },
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            name: "CSS"
        },
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            name: "Javascript"
        },
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            name: "Mongo db"
        },
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
            name: "Node js"
        },
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            name: "React"
        },
        {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
            name: "Express js"
        },
        {
            src: "https://img.icons8.com/color/1x/git.png",
            name: "Git"
        },
        {
            src: "https://img.icons8.com/color/1x/npm.png",
            name: "NPM"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFqKBepkWTU0NDn07QiNera1ixJ0GPlEG4jp0t51iPatxolNj7A3F0itsPg38X7285B0&usqp=CAU",
            name: "Redux"
        },
        {
            src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
            name: "Typescript"
        }
    ]
    return <div id="skills">
        <h1>
            <img src="https://cliply.co/wp-content/uploads/2021/02/392102940_MEDAL_3D_400px.gif" alt="" width={'70px'} />
            Skills</h1>

        <div>
            {
                skillArr.map((e) => {

                    return <div className="skills-card">
                        <img className="skills-card-img" src={e.src} alt={e.name} />
                        <p className="skills-card-name">{e.name}</p>
                    </div>
                })
            }
        </div>
    </div>
}