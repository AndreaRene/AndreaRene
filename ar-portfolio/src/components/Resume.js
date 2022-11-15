import './Resume.css';
import miro from '../assets/miro.png';
import resume from '../assets/AndreaReneResume.pdf';

const Resume = () => {
    return (
        <main className='mainSection resumePage'>
            <p>Technologies:</p>
            <div className='icons'>
                <i className="devicon-handlebars-plain colored"></i>
                <i className="devicon-git-plain colored"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-mysql-plain colored"></i>
                <i className="devicon-sequelize-plain colored"></i>
                <i className="devicon-mongodb-plain colored"></i>
                <i className="devicon-graphql-plain colored"></i>
            </div>
            <p>Frameworks & Libraries:</p>
            <div className='icons'>

                <i className="devicon-bootstrap-plain colored"></i>
                <i className="devicon-jquery-plain colored"></i>
                <i className="devicon-express-original colored"></i>
                <i className="devicon-react-original"></i>
            </div>
            <p>Languages:</p>
            <div className='icons'>

                <i className="devicon-html5-plain colored"></i>
                <i className="devicon-css3-plain colored"></i>
                <i className="devicon-javascript-plain"></i>
            </div>
            <p>Platforms:</p>
            <div className='icons'>

                <i className="devicon-github-original colored"></i>
                <i className="devicon-heroku-plain colored"></i>
            </div>
            <p>Tools:</p>
            <div className='icons'>

                <i class="devicon-vscode-plain"></i>
                <img src={miro} />
            </div>





            <a id='downloadResume' download='AndreaReneResume.pdf' href={resume}>Download my resume!</a>
        </main>
    )
}

export default Resume;