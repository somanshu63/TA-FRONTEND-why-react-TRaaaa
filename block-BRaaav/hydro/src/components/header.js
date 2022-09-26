function Header(props) {
    return (
        <header className="navbar">
            <div className="container flex">
                <div className="flex">
                <a className="brand" href="/">
                    <strong>Hydro</strong>
                </a>
                <nav>
                    <ul className="flex nav-menu nav-menu-primary">
                    <li id="1">
                        <a href="/">Home</a>
                    </li>
                    <li id="2">
                        <a href="/">About</a>
                    </li>
                    <li id="3">
                        <a href="/">Blog</a>
                    </li>
                    <li id="4">
                        <a href="/">Our Work</a>
                    </li>
                    <li id="5">
                        <a href="/">Contacts</a>
                    </li>
                    </ul>
                </nav>
                </div>
                <nav>
                <ul className="flex nav-menu nav-menu-secondary">
                    <li id="9" className="social-media-item">
                    <a href="/"><i className="fab fa-facebook-square"></i></a>
                    </li>
                    <li id="8" className="social-media-item">
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li id="7" className="social-media-item">
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li id="6">
                    <a className="btn btn-primary" href="/"> Sign in / Join </a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    )
}
    

    export default Header;