import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                    John Doe
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Menu">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-uppercase">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link">
                                Accueil
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" end className="nav-link">
                                Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" end className="nav-link">
                                Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" end className="nav-link">
                                Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mentions-legales" end className="nav-link">
                                Mentions légales
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}