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
                    My journey through web development began with a fascination for coding, and I've been joyfully navigating the realms of full stack technologies ever since. By day, I lead and mentor aspiring tech wizards in a full stack development bootcamp, turning complex coding puzzles into fun, approachable challenges. Every day is a celebration of new discoveries and 'Eureka!' moments, both for my students and myself.
                </p>
                <p className='info'>
                    When the code rests, my adventurous spirit takes over. You might catch me traversing the galaxies of Star Trek, waving a wand in the world of Harry Potter, or diving deep into the realms of sci-fi and fantasy. I'm also a proud gamer, Disney buff, and a connoisseur of all things anime, manga, and graphic novels. 
                </p>
                <p className='info'>
                    But the adventure doesn't stop there! I'm on an exciting mission to transition into a developer role at a company where innovation and creativity are not just encouraged but celebrated. My goal? To weave my passion for coding into impactful projects, to grow and thrive in a dynamic environment, and ultimately, to chart a course towards a bright and fulfilling future.
                </p>
                <p className='info'>
                    Eager to collaborate on a project that needs a sprinkle of creativity and a solid dose of technical skill? Or maybe you're in search of a teammate who brings enthusiasm and a unique perspective? Let's connect! You can find me on LinkedIn, GitHub, or reach out directly for a chat – I'm all about making connections and embarking on new tech adventures!
                </p>
                <p className='info'>
                </p>
            </aside>
        </main>

    )
}

export default About;
