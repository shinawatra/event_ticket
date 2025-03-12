import React from 'react';
import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="not-found-box">
      <h1>Page Not Found</h1>
      <Link to="/">Return home</Link>
    </div>
  );
}

export default NotFound;
