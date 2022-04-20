import React from "react";
import { NavLink } from "react-router-dom";

export const Nav: React.FC = () =>
    <nav className="nav__container">
        <section className="nav__logo">FAKELANDIA JUSTICE DEPARTMENT</section>
        <ul className="nav__container nav__ul">  
            <li>
                <NavLink to ='/' 
                className = {({ isActive }) => (isActive ? "nav__link--active" : "nav__link")}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to ='/misdemeanours' 
                className = {({ isActive }) => (isActive ? "nav__link--active" : "nav__link")}>
                    Misdemeanours
                </NavLink>
            </li>
            <li>
                <NavLink to ='/confession' 
                className = {({ isActive }) => (isActive ? "nav__link--active" : "nav__link")}>
                    Confess To us
                </NavLink>
            </li>
        </ul>
    </nav>