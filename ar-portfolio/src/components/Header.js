import './Header.css';

const Header = () => {
    return (
        <header id="topNav">
            <div id="nameLogo">
                <p>Andrea René</p>
                <p>Presto</p>
            </div>
            <nav>
                <ul>
                    <li className="navLink"><a href="#top" className="navClick">Who I Am</a></li>
                    <li className="navLink"><a href="#myWork" className="navClick">What I've Done</a></li>
                    <li className="navLink"><a href="#contact" className="navClick">Let's Connect</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;