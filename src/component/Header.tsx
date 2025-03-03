import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="home-link">
        <img src="thumb.png" alt="logo" />

        <p>ticz</p>
      </Link>

      <nav className="header__nav">
        <Link to="">Events</Link>
        <Link to="">My Tickets</Link>
        <Link to="">About Project</Link>
      </nav>

      <button className="my-ticket-btn">
        My Tickets <span className="tick-arr">&rarr;</span>
      </button>
    </header>
  );
}

export default Header;
