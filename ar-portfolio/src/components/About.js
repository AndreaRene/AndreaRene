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

            <aside>
                <p className='info'>
                    Hi there!  I'm Andrea, a full-stack developer eager to start my development journey with an awesome company.  As you can see from my resume page, I have a wide-range of skills to help your company do amazing things.  I have a passion for crisp, visually appealing design and performant, modular code on both the front and back-end.  Check out what I've done, see what I'm good at, and get in touch!  Employers, other developers, or people that just want to have a chat about developing... I'd love to hear from you!
                </p>
                <p className='info'>
                    I started out originally with a passion for cooking. I went through a two year Culinary Arts program before I realized that I really don't care for cooking for people I don't know. Don't worry I still do plenty of cool stuff in the kitcen!  Eventually I took a break from the workforce to raise my kids.  Now that they're mostly self-sufficient, I want to get back into something productive and creative.  I've gone through some free and some paid online tutorials on HTML, CSS, and Javascript but I wanted something more tangible.
                </p>
                <p className='info'>
                    I found the Full-stack Developer Bootcamp through UT Austin and that's where I found a true passion for development. I've completed the course with exemplary marks on every asssignment and group project.  During our group projects I took the lead to organize and motivate my team members, as well as manage the division of labor. I have strived throughout the course to go above and beyond the requirements of the assignments and projects often times having to self teach materials we didn't cover in class to make sure I was grasping the material.
                </p>
                <p className='info'>
                    This course has been a wonderful experience, and I can't wait to put what I've learned to use as I start my career as a developer.
                </p>
            </aside>
        </main>

    )
}








export default About;