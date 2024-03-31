import "./Arrow.scss";
import classNames from "classnames";

const Arrow = ({ invert }: { invert?: boolean }) => {
    return <svg
        className={
            classNames(
                "arrow", invert && "invert"
            )
        }
        width="10" height="43"
        viewBox="0 0 10 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.27632 32.9318L5.82032 42.1798H3.50032L0.0283203 32.9318H2.73232L4.65232 38.7718L6.57232 32.9318H9.27632Z"/>
        <path d="M6.10835 32.0002H3.38835L3.38835 26.9922H6.10835V32.0002Z"/>
        <path d="M6.10835 25.4846H3.38835L3.38835 20.4766H6.10835V25.4846Z"/>
        <path d="M6.10835 18.9689H3.38835L3.38835 13.9609H6.10835V18.9689Z"/>
        <path d="M6.10835 12.4533H3.38835L3.38835 7.44531H6.10835V12.4533Z"/>
        <path d="M6.10835 5.93769H3.38835L3.38835 0.929688L6.10835 0.929688V5.93769Z"/>
    </svg>;
};

export default Arrow;