import './Footer.css';
import email from '../assets/email.png';
import cell from '../assets/cell.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import so from '../assets/so.png';

const Footer = () => {
    return (
        <footer id="pageFooter">
            <section id="contact">
                <a href="https://github.com/AndreaRene" target="_" ><i class="devicon-github-original contactIcon"></i></a>
                <a href="https://www.linkedin.com/in/andrea-presto-a6a6b223a/" target="_" className="contactClick"><i className="devicon-linkedin-plain contactIcon" alt="linkedin icon" /></a>
                <a href="https://stackoverflow.com/users/19103386/andrea" target="_" className="contactClick"><img src={so} className="contactIcon" alt="stackoverflow icon" /></a>
                <a href="mailto:andrea@interhact.net" target="_" ><img src={email} className="contactIcon" alt="email message icon" /></a>
                <a href="tel:5129544257" ><img src={cell} className="contactIcon" alt="cell phone icon" /></a>

            </section>
            <p>You made it to the bottom!</p>
            <p>Some people go back to the <a href="#top" className="footerClick">top</a>.</p>
        </footer>
    )
}

export default Footer;