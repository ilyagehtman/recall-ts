import React from "react";
import classes from "./Header.module.sass";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return <div className={ classes.header }>
        <NavLink to={ "/" }>
            <Logo/>
        </NavLink>
        <nav>
            <ul>
                <MenuLink path={ "/editor/keychain" } name={ "магазин" }/>
                <MenuLink path={ "/about" } name={ "о проекте" }/>
                <MenuLink path={ "/archive" } name={ "архив" }/>
            </ul>
        </nav>
    </div>;
};

const MenuLink = ({ path, name }: { path: string, name: string }) => {
    return (
        <li>
            <NavLink to={ path } className={ ({ isActive }) => isActive ? classes.active : "" }>
                { name }
                <div/>
            </NavLink>
        </li>
    );
};

export default Header;