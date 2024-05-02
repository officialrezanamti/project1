import "./Header.css"
function Header(){
    return(
        <>
            <header>
                <div className="navbar-container">
                    <div className="container d-flex justifyu-content-between align-items-center">
                        <h2 className="log">Nerd Studio</h2>
                        <nav className="navbar">
                            <ul className="d-flex">
                                <li><a className="nav-link" href="#hero"></a>Home</li>
                                <li><a className="nav-link" href="#hero"></a>About</li>
                                <li><a className="nav-link" href="#hero"></a>Services</li>
                                <li><a className="nav-link" href="#hero"></a>Blog</li>
                            </ul>

                        </nav>
                    </div>
                </div>
                
                <div className="center">
                    <h1 class="hero-title">I am Reza Nemati</h1>
                    <p class="hero-desc">Hello, world!</p>
                </div>
                
            </header>
        </>
    )
}
export default Header