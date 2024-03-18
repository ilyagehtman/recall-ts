import classes from "./RecallContainer.module.sass";
import { ReactElement } from "react";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";

type RecallContainerProps = {
    children?: ReactElement
}

const RecallContainer = ({ children }: RecallContainerProps) => (
    <div className={ classes.recallContainer }>
        <header>
            <div className={ classes.recallContainerContent }>
                <Header/>
            </div>
        </header>
        <main>
            <div className={ classes.recallContainerContent }>
                { children }
            </div>
        </main>
        <footer>
            <div className={ classes.recallContainerContent }>
                <Footer/>
            </div>
        </footer>
    </div>
);

export default RecallContainer;