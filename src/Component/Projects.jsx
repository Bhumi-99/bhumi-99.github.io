import GitHubCalendar from 'react-github-calendar';
import s from '../images/cosmo.jpg';
import d from '../images/desk.jpg';
import b from '../images/bigBite.jpg';
import koovs from '../images/KOOVS.jpg';
import {Box, Stack, Tooltip} from '@chakra-ui/react';
export default function Projects (){
    return <div id="projects">
        <h1>
            <img src="https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif" alt="robo" width="100px"  />
            Projects</h1>

            <div className="project-card">
                    <h2 className="project-title">1. Koovs</h2>
                    <img src={koovs} alt="koovs" />
                    <p className="project-description">
                    Koovs is an e-commerce fashion brand which fulfills all fashion needs in one platform. E-Commerce, Clothing & Apparel
                    </p>
                    <div className="project-tech-stack">
                        <p>Tech Stack :-  </p>
                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />

                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" />

                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" />

                        <img src="https://camo.githubusercontent.com/f841126f02933a3586da04264a80d7eaf7654edf48e5e927599e02e01ddff112/68747470733a2f2f696d672e69636f6e73382e636f6d2f6f66666963656c2f31782f72656163742e706e67" alt="React" />

                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo" />

                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={'100%'} />
                    </div>
                    <div className='deployed'>
                        <a href="https://github.com/shaifali-99/assorted-desk-4504" className='project-github-link' target='_blank'>
                        <Tooltip label='Github link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'}>
                        <img src="https://img.icons8.com/ios-glyphs/1x/github.png" alt="gitcosmo"/>
                        </Tooltip>
                        </a>
                        <a href="https://ephemeral-platypus-7df5f7.netlify.app/" className='project-deployed-link'target="_blank">
                        <Tooltip label="Deployed link" placement='auto' hasArrow arrowSize={10} borderRadius={'5px'} bg={'rgb(49, 130, 206)'}>
                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/1x/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="cosmo" className='project-deployed-link"'/>
                        </Tooltip>
                        </a>
                    </div>
            </div>


            <div className="project-card">
                    <h2 className="project-title">2. Desktime</h2>
                    <img src={d} alt="desk" />
                    <p className="project-description">
                    DeskTime is a time tracking tool with additional features for workforce management. These features can help you build a successful team that consistently achieves its goals.
                    </p>
                    <div className="project-tech-stack">
                        <p>Tech Stack :-  </p>
                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />

                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" />

                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" />
                    </div>
                    <div className='deployed'>
                        <a href="https://github.com/palabhi017/terrific-language-9890" className='project-github-link' target="_blank">
                        <Tooltip label='Github link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'}>
                        <img src="https://img.icons8.com/ios-glyphs/1x/github.png" alt="gitcosmo"/>
                        </Tooltip>
                        </a>
                        <a href="https://time-always.netlify.app/" className="project-deployed-link" target="_blank">
                        <Tooltip label='Deployed link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'} bg={'rgb(49, 130, 206)'}>
                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/1x/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="cosmo" className='project-deployed-link"'/>
                        </Tooltip>
                        </a>
                    </div>
            </div>


            <div className="project-card">
                    <h2 className="project-title">3. Blue Apron</h2>
                    <img src={b} alt="bigBite" />
                    <p className="project-description">
                        Blue Apron.com is meal kit service that delivers 2–4 recipes to your door each week, along with all the proportioned ingredients you need to make the meals.
                    </p>
                    <div className="project-tech-stack">
                        <p>Tech Stack :-  </p>
                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />

                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" />

                        <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" />

                        <img src="https://camo.githubusercontent.com/f841126f02933a3586da04264a80d7eaf7654edf48e5e927599e02e01ddff112/68747470733a2f2f696d672e69636f6e73382e636f6d2f6f66666963656c2f31782f72656163742e706e67" alt="React" />
                    </div>
                    <div className='deployed'>
                        <a href="https://github.com/shaifali-99/satisfying-scale-7625" className='project-github-link'target="_blank">
                        <Tooltip label='Github link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'}>
                        <img src="https://img.icons8.com/ios-glyphs/1x/github.png" alt="gitcosmo"/>
                        </Tooltip>
                        </a>
                        <a href="https://newbigbite.netlify.app/" className='project-deployed-link' target="_blank">
                        <Tooltip label='Deployed link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'} bg={'rgb(49, 130, 206)'}>
                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/1x/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="cosmo"/>
                        </Tooltip>
                        </a>
                    </div>
            </div>


            <div className="project-card">
                <h2 className="project-title">4. Sephora</h2>
                <img src={s} alt="cosmo" />
                <p className="project-description">
                Sephora is an e-commerce global beauty chain user friendly website which offers a wide range of classic cosmetic products which include every kind of skincare ,makeup ,fragrance ,body and hair care and many more you can find for yourself.
                </p>
                <div className="project-tech-stack">
                    <p>Tech Stack :-  </p>
                    <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />

                    <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" />

                    <img className="skills-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" />
                </div>
                <div className='deployed'>
                    <a href="https://github.com/shaifali-99/zesty-whistle-6002" className='project-github-link' target="_blank">
                    <Tooltip label='Github link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'}>
                    <img src="https://img.icons8.com/ios-glyphs/1x/github.png" alt="gitcosmo"/>
                    </Tooltip>
                    </a>
                    <a href="https://dapper-cheesecake-326981.netlify.app/" class="project-deployed-link" target="_blank">
                    <Tooltip label='Deployed link'placement='auto' hasArrow arrowSize={10} borderRadius={'5px'} bg={'rgb(49, 130, 206)'}>
                     <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/1x/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="cosmo"/>
                     </Tooltip>
                    </a>
                </div>
            </div>

        
            <h1>
            <img src="https://cliply.co/wp-content/uploads/2020/04/422004440_CHECKMARK_3D_ICON_400px.gif" alt="" width="70px"/>
            Github Stats</h1>
            <div className='github'>
            <GitHubCalendar username="shaifali-99" className="react-activity-calendar"/>
            <Stack>
            <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=shaifali-99" alt="state2"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shaifali-99&layout=compact" id="github-top-langs" alt="s3"/>
            <img src="https://github-readme-streak-stats.herokuapp.com?user=shaifali-99&border_radius=10.6" alt="state1" id="github-streak-stats"/>
            </Stack>
            </div>
    </div>
}