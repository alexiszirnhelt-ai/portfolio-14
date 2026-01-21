import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="navbar navbar-dark bg-dark mt-5">
      <div className="container py-4">
        <div className="row w-100">
          {/* Colonne 1 : informations */}
          <div className="col-12 col-md-4 mb-3">
            <h3 className="h5 fw-bold text-light">John Doe</h3>
            <p className="mb-1 text-light">40 Rue Laure Diebold</p>
            <p className="mb-1 text-light">69009 Lyon</p>
            <p className="mb-1 text-light">10 20 30 40 50</p>
            <p className="text-light">john.doe@gmail.com</p>
          </div>

          {/* Colonne 2 : navigation */}
          <div className="col-12 col-md-4 mb-3">
            <h3 className="h5 fw-bold text-light">Navigation</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="nav-link text-light p-0">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav-link text-light p-0">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="nav-link text-light p-0">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-light p-0">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="nav-link text-light p-0">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : réseaux */}
          <div className="col-12 col-md-4 mb-3">
            <h3 className="h5 fw-bold text-light">Réseaux</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="nav-link text-light p-0"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="nav-link text-light p-0"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="nav-link text-light p-0"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary w-100" />

        <p className="mb-0 text-center text-secondary w-100">
          © {new Date().getFullYear()} John Doe
        </p>
      </div>
    </footer>
  );
}