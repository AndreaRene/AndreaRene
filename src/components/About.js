import './About.css';
import avatarthumb from '../assets/avatarthumb.jpg';
//TODO: rewrite paragraphs
const About = () => {
    window.scrollTo({ top: 0 });
    return (
        <main id='aboutMe' className='mainSection'>
            <h1 className='left'>
                Hi, there.<br />
                I'm <span className='pink'>Andrea</span>.
            </h1>
            <img src={avatarthumb} alt="andrea's face in black and white with colorful glasses" />
            <div className='right hiddenAbout'>
                <p>I just really like</p>
                <p>JavaScript... ok?</p>
            </div>
            <div className='left hiddenAbout'>
                <p>I produce concise and</p>
                <p><span className='pink'>performant</span> code with an</p>
                <p>emphasis on future-proofing.</p>
            </div>
            <h2 className='right'>
                Let's go build<br />
                something <span className='pink'>together</span>.
            </h2>

            <aside>
                <p className='info'>
                    Hi there!  I'm Andrea, a full-stack developer eager to start my development journey with an awesome company. I have a passion for crisp, visually appealing design and performant, modular code on both the front and back-end. Check out what I've done, see what I'm good at, and get in touch! I'd love to hear from you!
                </p>
                <p className='info'>
                    I've recenly completed the Full-stack development bootcamp through UT Austin with exemplary marks on every asssignment and group project. During our group projects I took the lead to organize and motivate my team members, as well as manage the division of labor. I strived throughout the course to go above and beyond the requirements of the assignments and projects often times having to self teach materials we didn't cover in class to make sure I was grasping the material. Now I am a teaching assistant for the same bootcamp.
                </p>
                <p className='info'>
                    The work you will currently see in my portfolio and on my Github account are all class assignments and projects. We learned a variety of skills that built upon each other lesson over lesson. I am in the process of developing my very own application using React Native which I am teaching myself as I go along. 
                </p>
                <p className='info'>
                </p>
            </aside>
        </main>

    )
}

export default About;