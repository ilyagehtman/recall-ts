import React from "react";
import classes from "./Header.module.sass";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";
import classNames from "classnames";

interface HeaderProps {
    white?: boolean;
}

const Header: React.FC<HeaderProps> = ({ white }) => {

    return <div className={ classNames(
        classes.header,
        { [classes.white]: white }
    ) }>
        <NavLink to={ "/" }>
            <Logo alt={ white }/>
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