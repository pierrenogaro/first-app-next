export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">Mon Site</div>
                <ul className="nav-links">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
