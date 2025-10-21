import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">Mon Site</div>
                <ul className="nav-links">
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">À propos</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
