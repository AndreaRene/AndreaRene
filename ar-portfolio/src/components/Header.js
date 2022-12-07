import './Header.css';
import { useState } from 'react';

const Header = (props) => {
    const [activePage, setActivePage] = useState('about')
    const clickHandler = (event) => {
        event.preventDefault();
        const id = event.target.id;
        props.setContent(id)
        setActivePage(id);
    }
    return (
        <header>
            <nav id="topNav">
                <div id="nameLogo">
                    <p>Andrea René</p>
                    <p>Presto</p>
                </div>
                <ul>
                    <li className="navLink"><a href="#about" className={`navClick ${activePage === 'about' ? 'active' : ''}`} id="about" onClick={clickHandler}>Who I Am</a></li>

                    <li className="navLink"><a href="#portfolio" className={`navClick ${activePage === 'portfolio' ? 'active' : ''}`} id="portfolio" onClick={clickHandler}>What I've Done</a></li>

                    <li className="navLink"><a href="#contact" className={`navClick ${activePage === 'contact' ? 'active' : ''}`} id="contact" onClick={clickHandler}>Let's Connect</a></li>

                    <li className="navLink"><a href="#resume" className={`navClick ${activePage === 'resume' ? 'active' : ''}`} id="resume" onClick={clickHandler}>Resumé</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;