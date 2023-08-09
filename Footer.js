import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
          <Link to="/">
            <svg className="bi" width="30" height="24">
              <use href="#bootstrap"></use>
            </svg>
          </Link>
        </span>
        <span className="text-muted">© 2023 Company, Inc</span>
      </div>
    </footer>
  );
};

export default Footer;
