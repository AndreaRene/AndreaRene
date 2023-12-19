import mailIcon from '../assets/email.png';
import phone from '../assets/cell.png';
import github from '../assets/github.png';
import linkedIn from '../assets/linkedin.png'
import './Contact.css';
//TODO: change color of contact link icons
const Contact = () => {
    return (
        <section id="contactMe">
            <h2>Connect with me! <br /> Let's do something <span className="pink">amazing</span>.</h2>
            <ul className='contactList'>
                <li className="contactLink"><a href="mailto:andrea@interhact.net" target="_" className="contactClick"><img
                            src={mailIcon} className="contactIcon"
                            alt="email message icon"/>
                        <span className="hidden">andrea@interhact.net</span></a></li>
                <li className="contactLink"><a href="tel:5129544257" className="contactClick"><img
                    src={phone} className="contactIcon"
                            alt="cell phone icon"/> 
                            <span className="hidden">512.954.4257</span></a></li>
                <li className="contactLink"><a href="https://github.com/AndreaRene" target="_" className="contactClick"><img
                            src={github} className="contactIcon" alt="github icon"/><span
                            className="hidden">
                            github.com/AndreaRene</span></a></li>
                <li className="contactLink">
                    <a href="https://www.linkedin.com/in/andreapresto/" target="_"
                        className="contactClick"><img src={linkedIn} className="contactIcon"
                        alt="linkedin icon" />
                    <span className="hidden"> Find me on LinkedIn</span></a></li>
            </ul>
        </section>
    )
}

export default Contact;