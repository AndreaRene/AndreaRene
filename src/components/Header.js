import './Header.css';
import { useState } from 'react';
import { ReactComponent as CloseMenu} from "../assets/closeBtn.svg"
import { ReactComponent as OpenMenu} from "../assets/menuBtn.svg"

const Header = (props) => {
    const [activePage, setActivePage] = useState('about')
    const clickHandler = (event) => {
        event.preventDefault();
        const id = event.target.id;
        props.setContent(id)
        setActivePage(id);
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <header id="pageHeader">
            <nav id="topNav">
                <div id="nameLogo">
                    <p>Andrea René</p>
                    <p>Presto</p>
                </div>
                <ul className={click ? "navOptions isActive" : "navOptions"}>
                    <li className="navLink" onClick={closeMobileMenu}><a href="#about" className={`navClick ${activePage === 'about' ? 'active' : ''}`} id="about" onClick={clickHandler}>Who I Am</a></li>

                    <li className="navLink" onClick={closeMobileMenu}><a href="#portfolio" className={`navClick ${activePage === 'portfolio' ? 'active' : ''}`} id="portfolio" onClick={clickHandler}>What I've Done</a></li>

                    <li className="navLink" onClick={closeMobileMenu}><a href="#contact" className={`navClick ${activePage === 'contact' ? 'active' : ''}`} id="contact" onClick={clickHandler}>Let's Connect</a></li>

                     <li className="navLink"onClick={closeMobileMenu}><a href="#resume" className={`navClick ${activePage === 'resume' ? 'active' : ''}`} id="resume" onClick={clickHandler}>Resumé</a></li>
                </ul>
                <div className="mobileMenu" onClick={handleClick}>
                        {click ? (<CloseMenu className="menuIcon" />) : (<OpenMenu className="menuIcon" />)}
                </div>
            </nav>
        </header>
    )
};

export default Header;