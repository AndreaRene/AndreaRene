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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab soluta officiis enim quibusdam? Tempore consequuntur accusamus quam quia aliquam! Consectetur asperiores quam distinctio ducimus perspiciatis architecto odit minus quos culpa.
                    Sunt doloremque praesentium ratione dolorem asperiores tempora culpa cupiditate libero est labore nisi dolorum iste omnis quidem eaque consequatur quibusdam, qui, molestias sed ea, fugit amet? Quidem vel ab blanditiis?
                    Dolorem unde explicabo in nulla incidunt aliquam quo. Quas, dignissimos sit. Fugit neque, minus beatae non est, numquam, reprehenderit repellat soluta nostrum fuga unde id consequuntur incidunt aliquam voluptate facilis?
                </p>
            </aside>
        </main>

    )
}








export default About;