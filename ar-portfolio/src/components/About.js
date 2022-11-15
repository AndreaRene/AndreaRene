import './About.css';
import avatarthumb from '../assets/avatarthumb.jpg';

const About = () => {
    return (
        <main id='aboutMe' className='mainSection'>
            <h1 className='left'>
                <p>Hi, there.</p>
                <p>I'm <span className='pink'>Andrea</span>.</p>
            </h1>
            <img src={avatarthumb} alt="andrea's face in black and white with colorful glasses" />
            <div className='right'>
                <p>I just really like</p>
                <p>JavaScript... ok?</p>
            </div>
            <div className='left'>
                <p>I produce concise and</p>
                <p><span className='pink'>performant</span> code with an</p>
                <p>emphasis on future-proofing.</p>
            </div>
            <h2 className='right'>
                <p>Let's go build</p>
                <p>something <span className='pink'>together</span>.</p>
            </h2>
            <p id='info'>

            </p>
        </main>
    )
}








export default About;