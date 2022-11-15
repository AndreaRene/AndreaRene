import './Header.css';

const Header = (props) => {
    const clickHandler = (event) => {
        const id = event.target.id;
        props.setContent(id)
    }
    return (
        <header>
            <nav id="topNav">
                <div id="nameLogo">
                    <p>Andrea René</p>
                    <p>Presto</p>
                </div>
                <ul>
                    <li className="navLink" activeClassName='active'><a href="#" className="navClick" id="about" onClick={clickHandler}>Who I Am</a></li>
                    <li className="navLink"><a href="#" className="navClick" id="portfolio" onClick={clickHandler}>What I've Done</a></li>
                    <li className="navLink"><a href="#" className="navClick" id="contact" onClick={clickHandler}>Let's Connect</a></li>
                    <li className="navLink"><a href="#" className="navClick" id="resume" onClick={clickHandler}>Resumé</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;