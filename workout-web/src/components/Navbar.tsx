import React, { FC } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
   return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to={'/'}>
            <h2>Home</h2> 
        </Link>
        <Link to={"/workoutPlan"}>
            <h2>Workout Plan</h2>
        </Link>
        <Link to={"/strengthTracker"}>
            <h2>Strength Tracker</h2>
        </Link>
        <Link to={"/profile"}>
            <h2>Profile</h2>
        </Link>
        <Link to={"/login"}>
            <h2>Login</h2>
        </Link>
      </div>
    </nav>
   );
};

export default Navbar;