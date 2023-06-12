import mailIcon from '../assets/email.png';
import phone from '../assets/cell.png';
import github from '../assets/github.png';
import linkedIn from '../assets/linkedin.png'
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Connect with me! Let's do something <span class="pink">amazing</span>.</h2>
            <ul>
                <li class="contactLink"><a href="mailto:andrea@interhact.net" target="_" class="contactClick"><img
                            src={mailIcon} class="contactIcon"
                            alt="email message icon"/>
                        <span class="hidden">andrea@interhact.net</span></a></li>
                <li class="contactLink"><a href="tel:5129544257" class="contactClick"><img
                    src={phone} class="contactIcon"
                            alt="cell phone icon"/> 
                            <span class="hidden"> 512.954.4257</span></a></li>
                <li class="contactLink"><a href="https://github.com/AndreaRene" target="_" class="contactClick"><img
                            src={github} class="contactIcon" alt="github icon"/><span
                            class="hidden">
                            github.com/AndreaRene</span></a></li>
                <li class="contactLink">
                    <a href="https://www.linkedin.com/in/andrea-presto-a6a6b223a/" target="_"
                        class="contactClick"><img src={linkedIn} class="contactIcon"
                        alt="linkedin icon" />
                    <span class="hidden"> Find me on LinkedIn</span></a></li>
            </ul>
        </section>
    )
}

export default Contact;