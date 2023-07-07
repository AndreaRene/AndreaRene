import './Resume.css';
import miro from '../assets/miro.png';
import insomnia from '../assets/insomnia.png';
import resume from '../assets/AndreaReneResume.pdf';

const Resume = () => {
    return (
        <main className='mainSection resumePage'>
            {/* {TODO: Create card component} */}
            <div className='cardDeck'>
                {/* {TODO: create object array for card information} */}
                <section className='card'>
                    <p className='cardHeader'>Languages</p>
                    <div className='icons cardBody'>

                        <i className="devicon-html5-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-javascript-plain"></i>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Frameworks & Libraries</p>
                    <div className='icons cardBody'>

                       <a href='https://getbootstrap.com/' target='_' className='resumeClick'><i className="devicon-bootstrap-plain colored"></i></a>
                        <a href='https://tailwindcss.com/' target='_' className='resumeClick'><i className="devicon-tailwindcss-plain colored"></i></a>
                         <a href='https://jquery.com/' target='_' className='resumeClick'><i className="devicon-jquery-plain colored"></i></a>
                        <a href='https://expressjs.com/' target='_' className='resumeClick'><i className="devicon-express-original colored"></i></a>
                        <a href='https://react.dev/' target='_' className='resumeClick'><i className="devicon-react-original"></i></a>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Technologies</p>
                    <div className='icons cardBody'>

                        <a href='https://handlebarsjs.com/' target='_' className='resumeClick'><i className="devicon-handlebars-plain colored"></i></a>
                        <a href='https://git-scm.com/' target='_' className='resumeClick'><i className="devicon-git-plain colored"></i></a>
                        <a href='https://nodejs.org/en/about' target='_' className='resumeClick'><i className="devicon-nodejs-plain"></i></a>
                        <a href='https://www.mysql.com/' target='_' className='resumeClick'><i className="devicon-mysql-plain colored"></i></a>
                        <a href='https://sequelize.org/' target='_' className='resumeClick'><i className="devicon-sequelize-plain colored"></i></a>
                        <a href='https://www.mongodb.com/' target='_' className='resumeClick'><i className="devicon-mongodb-plain colored"></i></a>
                         <a href='https://graphql.org/' target='_' className='resumeClick'><i className="devicon-graphql-plain colored"></i></a>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Platforms</p>
                    <div className='icons cardBody'>
                        <a href='https://about.gitlab.com/' target='_' className='resumeClick'><i class="devicon-gitlab-plain-wordmark colored"></i></a>
                        <a href='https://github.com/' target='_' className='resumeClick'><i className="devicon-github-original colored"></i></a>
                        <a href='https://www.heroku.com/' target='_' className='resumeClick'><i className="devicon-heroku-plain colored"></i></a>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Tools</p>
                    <div className='icons cardBody'>

                        <i className="devicon-vscode-plain"></i>
                        <img src={miro} alt='miro logo' />
                        <img src={insomnia} alt='insomnia logo' />
                    </div>
                </section>
            </div>
            <a id='downloadResume' download='AndreaReneResume.pdf' href={resume}>Download my resume!</a>
        </main>
    )
}

export default Resume;