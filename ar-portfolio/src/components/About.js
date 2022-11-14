import './About.css';
import avatarthumb from '../assets/avatarthumb.jpg'

const About = () => {
    return (
        <section id="aboutMe" class="mainSection">
            <h1>
                <p>Hi, there.</p>
                <p>I'm <span class="pink">Andrea</span>.</p>
            </h1>
            {/* <img src="assets/imgs/avatarthumb.jpg" alt="stylized image of andrea's face"> */}
            {avatarthumb}
            <div><p>I just really love</p>
                <p>JavaScript, ok?</p></div>
            <div><p>I produce concise and</p>
                <p><span class="pink">performant</span> code with an</p>
                <p>emphasis on future-proofing.</p></div>
            <h2>
                <p>Let's go build</p>
                <p>something <span class="pink">together</span>.</p>
            </h2>
        </section>
    )
}








export default About;