import './About.css';
import avatarthumb from '../assets/avatarthumb.png';
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
                <p>I strive for concise and</p>
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
                    I am currently a Teaching Assistant for the bootcamp that I went through to earn my certificate. I've been here almost a year now and I've very much enjoyed teaching the materials. Not only is it amazing when you see someone grasp something, it helps me practice and continue learning as well. 
                </p>
                <p className='info'>
                    Most of the work you will currently see in my portfolio and on my Github account are all class assignments and projects. We learned a variety of skills that built upon each other lesson over lesson. My personal project is going to be a chore app with much more customization and targeting various family shapes and sizes. So far I had been writing and rewriting my queries, mutations, and models. I was finding more and more information on code reusability and I like to tinker. 
                    </p>
                    <p className='info'>I have recently put aside my personal project to continue my studies. I have earned a certificate in Python and am now working on C#. You can see my current progress at <a href='https://www.freecodecamp.org/AndreaRene' className='aboutLink'>freecodecamp.org/AndreaRene</a>. At the end of this course, I will have earned a Microsoft Certification in foundational C#. 
                </p>
                <p className='info'>
                </p>
            </aside>
        </main>

    )
}

export default About;