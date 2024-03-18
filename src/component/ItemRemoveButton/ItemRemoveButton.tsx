import React from "react";
import classes from "./ItemRemoveButton.module.sass";

interface ItemRemoveButtonProps {
    onClick: () => void;
}

const ItemRemoveButton: React.FC<ItemRemoveButtonProps> = ({ onClick }) => {
    return <svg
        onClick={ onClick }
        className={ classes.itemRemoveButton }
        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
        viewBox="0 0 25 25"
        fill="none"
    >
        <circle cx="12.5" cy="12.5" r="11.5" strokeWidth="2"/>
        <path d="M3.95996 4L20.9998 21.0398" strokeWidth="2"/>
        <path d="M3.95996 21.04L20.9998 4.00019" strokeWidth="2"/>
    </svg>;
};

export default ItemRemoveButton;