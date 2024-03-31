import React, { useEffect, useRef, useState } from "react";
import classes from "./Landing.module.sass";
import Footer from "../../component/Footer/Footer.tsx";
import Header from "../../component/Header/Header.tsx";
import { HeaderString, SmallString, String } from "../../component/String/String.tsx";

import stepImg1 from "../../assets/steps-images/step-img-1.jpg";
import stepImg2 from "../../assets/steps-images/step-img-2.jpg";
import stepImg3 from "../../assets/steps-images/step-img-3.jpg";
import stepImg4 from "../../assets/steps-images/step-img-4.jpg";

import banner from "../../assets/an-bannerl2.gif";

import earring from "../../assets/choice/earring.jpg";
import earringF from "../../assets/choice/earring_f.jpg";
import { Link } from "react-router-dom";
import Arrow from "../../component/Arrow/Arrow.tsx";

interface Landing2Props {

}

const Landing: React.FC<Landing2Props> = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const landingRef = useRef<HTMLDivElement>(null);
    const secondSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = landingRef?.current?.scrollTop;
            const secondSectionPosition = secondSectionRef.current?.offsetTop;
            setScrolled(scrollPosition! >= secondSectionPosition!);
        };

        landingRef?.current?.addEventListener("scroll", handleScroll); // Removed unnecessary arrow function
        return () => {
            landingRef?.current?.removeEventListener("scroll", handleScroll); // Removed unnecessary arrow function
        };
    }, []); // Empty dependency array to run the effect only once

    return <div className={ classes.landing } ref={ landingRef }>
        <header>
            <div className={ classes.landingContent }>
                <Header white={ !scrolled }/>
            </div>
        </header>
        <section className={ classes.bannerContainer }>
            <div className={ classes.landingContent }>
                <HeaderString
                    center
                    color={ "light" }
                    value={
                        "recall — бренд\n" +
                        "украшений из пластика,\n" +
                        "помогающих ощутить связь\n" +
                        "со своими воспоминаниями\n" +
                        "инструмент для перемещения\n" +
                        "электронных фото\n" +
                        "в физический\n" +
                        "мир"
                    }
                />
                <div className={ classes.img }>
                    <img alt={ "banner" } src={ banner }/>
                </div>
                <div className={ classes.glass }>
                    <img alt={ "banner" } src={ banner }/>
                </div>
                <div className={ classes.arrow }>
                    <Arrow invert/>
                </div>
            </div>
        </section>
        <section ref={ secondSectionRef } className={ classes.aboutContainer }>
            <div className={ classes.landingContent }>
                <div className={ classes.aboutTitle }>
                    <HeaderString
                        value={
                            "сохраняйте свои воспоминания\n" +
                            "и помещайте их в реальный мир\n" +
                            "в виде украшений"
                        }
                    />
                    <div className={ classes.aboutDetails }>
                        <div className={ classes.ph }>
                            <String alt value={ "*" }/>
                        </div>
                        <div>
                            <SmallString
                                value={
                                    "из любого цифрового фото на телефоне можно сделать \n" +
                                    "украшение, которые будет напоминать вам о любимом\n" +
                                    "моменте, месте, человеке, событии...\n\n" +
                                    "создать украшение\n" +
                                    "из фото просто!"
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={ classes.aboutContent }>
                    <div className={ classes.topArrows }>
                        <svg width="375" height="104" viewBox="0 0 375 104" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M247.5 2L248.423 0.817749L248.016 0.5H247.5V2ZM373.183 101.489C374.005 101.388 374.59 100.639 374.489 99.8168L372.84 86.4179C372.739 85.5956 371.99 85.0111 371.168 85.1123C370.346 85.2134 369.761 85.962 369.863 86.7842L371.328 98.6944L359.418 100.16C358.596 100.261 358.011 101.01 358.112 101.832C358.213 102.654 358.962 103.239 359.784 103.137L373.183 101.489ZM3.5 100C3.5 79.2971 13.1837 62.9467 29.2085 49.9947C45.2761 37.0082 67.6762 27.4839 92.8965 20.5716C143.326 6.75016 204.542 3.5 247.5 3.5V0.5C204.458 0.5 142.924 3.74983 92.1035 17.6783C66.6988 24.6411 43.8489 34.3043 27.3227 47.6615C10.7538 61.0532 0.5 78.2029 0.5 100H3.5ZM246.577 3.18225L372.077 101.182L373.923 98.8177L248.423 0.817749L246.577 3.18225Z"
                                fill="#E0E2E5"/>
                        </svg>
                        <svg width="375" height="104" viewBox="0 0 375 104" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M247.5 2L248.423 0.817749L248.016 0.5H247.5V2ZM373.183 101.489C374.005 101.388 374.59 100.639 374.489 99.8168L372.84 86.4179C372.739 85.5956 371.99 85.0111 371.168 85.1123C370.346 85.2134 369.761 85.962 369.863 86.7842L371.328 98.6944L359.418 100.16C358.596 100.261 358.011 101.01 358.112 101.832C358.213 102.654 358.962 103.239 359.784 103.137L373.183 101.489ZM3.5 100C3.5 79.2971 13.1837 62.9467 29.2085 49.9947C45.2761 37.0082 67.6762 27.4839 92.8965 20.5716C143.326 6.75016 204.542 3.5 247.5 3.5V0.5C204.458 0.5 142.924 3.74983 92.1035 17.6783C66.6988 24.6411 43.8489 34.3043 27.3227 47.6615C10.7538 61.0532 0.5 78.2029 0.5 100H3.5ZM246.577 3.18225L372.077 101.182L373.923 98.8177L248.423 0.817749L246.577 3.18225Z"
                                fill="#E0E2E5"/>
                        </svg>
                    </div>
                    <div className={ classes.stepsContent }>
                        <div className={ classes.step }>
                            <div>
                                <img alt={ "stepImg1" } src={ stepImg1 }/>
                            </div>
                            <div>
                                <String alt value={ "(1)" }/>
                            </div>
                            <div>
                                <String
                                    alt
                                    value={
                                        "выберите фото\n" +
                                        "из своей галереи"
                                    }
                                />
                            </div>
                        </div>
                        <div className={ classes.step }>
                            <div>
                                <img alt={ "stepImg2" } src={ stepImg2 }/>
                            </div>
                            <div>
                                <String alt value={ "(2)" }/>
                            </div>
                            <div>
                                <String
                                    alt
                                    value={
                                        "загрузите\n" +
                                        "его на сайт"
                                    }
                                />
                            </div>
                        </div>
                        <div className={ classes.step }>
                            <div>
                                <img alt={ "stepImg3" } src={ stepImg3 }/>
                            </div>
                            <div>
                                <String alt value={ "(3)" }/>
                            </div>
                            <div>
                                <String
                                    alt
                                    value={
                                        "отредактируйте\n" +
                                        "изделие по желанию"
                                    }
                                />
                            </div>
                        </div>
                        <div className={ classes.step }>
                            <div>
                                <img alt={ "stepImg4" } src={ stepImg4 }/>
                            </div>
                            <div>
                                <String alt value={ "(4)" }/>
                            </div>
                            <div>
                                <String
                                    alt
                                    value={
                                        "ожидайте!\n" +
                                        "изготовление занимает\n" +
                                        "3 рабочих дня"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={ classes.bottomArrows }>
                        <svg width="288" height="76" viewBox="0 0 288 76" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M62.5 74V75.5H61.8012L61.3516 74.965L62.5 74ZM274.939 0.939339C275.525 0.353554 276.475 0.353554 277.061 0.939339L286.607 10.4853C287.192 11.0711 287.192 12.0208 286.607 12.6066C286.021 13.1924 285.071 13.1924 284.485 12.6066L276 4.12132L267.515 12.6066C266.929 13.1924 265.979 13.1924 265.393 12.6066C264.808 12.0208 264.808 11.0711 265.393 10.4853L274.939 0.939339ZM3.1484 1.03503L63.6484 73.035L61.3516 74.965L0.8516 2.96497L3.1484 1.03503ZM62.5 72.5C100.169 72.5 153.4 64.4675 197.197 51.4736C219.099 44.9756 238.553 37.2624 252.499 28.7455C259.472 24.4867 265.004 20.0652 268.779 15.5487C272.548 11.0375 274.5 6.51342 274.5 2H277.5C277.5 7.4277 275.144 12.6094 271.081 17.4724C267.021 22.3299 261.194 26.9507 254.063 31.3058C239.799 40.0168 220.065 47.8183 198.05 54.3497C154.013 67.4148 100.494 75.5 62.5 75.5V72.5Z"
                                fill="#E0E2E5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section className={ classes.selectionContainer }>
            <div className={ classes.landingContent }>
                <Link className={ classes.choice } to={ "/editor/keychain" }>
                    <div className={ classes.title }>
                        <HeaderString value={ "брелок" } color={ "light" }/>
                    </div>
                    <img className={ classes.img } alt={ "choice" } src={ earring }/>
                    <img className={ classes.imgF } alt={ "choice-f" } src={ earringF }/>
                    <div className={ classes.radar }/>
                    <div className={ classes.ellipse }/>
                </Link>
                <div className={ classes.arrow }>
                    <Arrow />
                </div>
                <Link className={ classes.choice } to={ "/editor/earrings" }>
                    <div className={ classes.title }>
                        <HeaderString value={ "серьги" } color={ "light" }/>
                    </div>
                    <img className={ classes.img } alt={ "choice" } src={ earring }/>
                    <img className={ classes.imgF } alt={ "choice-f" } src={ earringF }/>
                    <div className={ classes.radar }/>
                    <div className={ classes.ellipse }/>
                </Link>
            </div>
            <div className={ classes.footerContainer }>
                <div className={ classes.landingContent }>
                    <Footer/>
                </div>
            </div>
        </section>
    </div>;
};

export default Landing;