import classes from './RecallLayout.module.sass'
import { ReactElement } from 'react'

import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'

const RecallLayout = ({ children }: { children?: ReactElement }) => (
    <div className={ classes.layout }>
        <header>
            <div className={ classes.inner }>
                <Header/>
            </div>
        </header>
        <main>
            <div className={ classes.inner }>
                { children }
            </div>
        </main>
        <footer>
            <div className={ classes.inner }>
                <Footer/>
            </div>
        </footer>
    </div>
)

export default RecallLayout