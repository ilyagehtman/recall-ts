import classes from "./RecallContainer.module.sass";
import { ReactElement } from "react";

type RecallContainerProps = {
  children?: ReactElement
}

const RecallContainer = ({ children }: RecallContainerProps) => (
  <div className={ classes.recallContainer }>
    <header>
      <div className={ classes.recallContainerContent }>
        <nav>

        </nav>
      </div>
    </header>
    <main>
      <div className={ classes.recallContainerContent }>
        { children }
      </div>
    </main>
    <footer>
      <div className={ classes.recallContainerContent }>
        <nav>
        </nav>
      </div>
    </footer>
  </div>
);

export default RecallContainer;