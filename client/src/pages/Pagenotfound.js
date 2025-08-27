import React from 'react';
import { Link } from 'react-router-dom';
//import Layout from '../components/Layout/Layout'; // Removed Layout import
//import './Pagenotfound.css';

function Pagenotfound() {
  return (
    <div className="pagenotfound">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="back-home">Go to Home</Link>
    </div>
  );
}

export default Pagenotfound;