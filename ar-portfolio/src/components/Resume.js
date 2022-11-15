import './Resume.css';
import resume from '../assets/AndreaReneResume.pdf';

const Resume = () => {
    return (
        <main className='mainSection resumePage'>
            <p>Platforms:</p>
            <div className='icons'>

                <i class="devicon-github-original colored"></i>
                <i class="devicon-heroku-plain colored"></i>
            </div>
            <p>Languages:</p>
            <div className='icons'>

                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain colored"></i>
                <i class="devicon-javascript-plain"></i>
            </div>
            <p>Frameworks & Libraries:</p>
            <div className='icons'>

                <i class="devicon-bootstrap-plain colored"></i>
                <i class="devicon-jquery-plain colored"></i>
                <i class="devicon-express-original colored"></i>
                <i class="devicon-react-original"></i>
            </div>

            <p>Technologies:</p>
            <div className='icons'>
                <i class="devicon-handlebars-plain colored"></i>
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-mysql-plain colored"></i>
                <i class="devicon-sequelize-plain colored"></i>
                <i class="devicon-mongodb-plain colored"></i>
                <i class="devicon-graphql-plain colored"></i>
            </div>

            <a id='downloadResume' download='AndreaReneResume.pdf' href={resume}>Download my resume!</a>
        </main>
    )
}

export default Resume;