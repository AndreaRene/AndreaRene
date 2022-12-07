import './Resume.css';
import miro from '../assets/miro.png';
import insomnia from '../assets/insomnia.png'
import resume from '../assets/AndreaReneResume.pdf';

const Resume = () => {
    return (
        <main className='mainSection resumePage'>
            <div className='cardDeck'>

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

                        <i className="devicon-bootstrap-plain colored"></i>
                        <i className="devicon-jquery-plain colored"></i>
                        <i className="devicon-express-original colored"></i>
                        <i className="devicon-react-original"></i>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Technologies</p>
                    <div className='icons cardBody'>

                        <i className="devicon-handlebars-plain colored"></i>
                        <i className="devicon-git-plain colored"></i>
                        <i className="devicon-nodejs-plain"></i>
                        <i className="devicon-mysql-plain colored"></i>
                        <i className="devicon-sequelize-plain colored"></i>
                        <i className="devicon-mongodb-plain colored"></i>
                        <i className="devicon-graphql-plain colored"></i>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Platforms</p>
                    <div className='icons cardBody'>

                        <i className="devicon-github-original colored"></i>
                        <i className="devicon-heroku-plain colored"></i>
                    </div>
                </section>

                <section className='card'>
                    <p className='cardHeader'>Tools</p>
                    <div className='icons cardBody'>

                        <i class="devicon-vscode-plain"></i>
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