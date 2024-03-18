import React from "react";
import classes from "./Footer.module.sass";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return <div className={ classes.footer }>
        <div className={ classes.contacts }>
            <div>
                <span>{ "пишите" }</span>
                <a href={ "mailto: recall@gmail.com" }>{ "recall@gmail.com" }</a>
            </div>
            <div>
                <a href={ "https://t.me/recall" } target={ "_blank" }>{ "@recall" }</a>
            </div>
        </div>
        <div className={ classes.upTrigger }>

        </div>
        <div className={ classes.authorContacts }>
            <span>{ '2024' }</span>
            <a
                id="blink"
                href={ "https://t.me/manskihh" }
                target={ "_blank" }>{ "Манских" }
            </a>
        </div>
    </div>;
};

export default Footer;