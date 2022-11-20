import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-20">
      <Link to={'/'}>
        <div className="container mx-auto py-4">
          <h1 className="font-semibold text-2xl">GithubJobs</h1>
        </div>
      </Link>
    </nav>
  );
}
