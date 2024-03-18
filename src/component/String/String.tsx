import classes from "./String.module.sass";

type CommonStringProps = {
    value: string
    center?: boolean
}

type StringProps = {
    alt?: boolean,
    bold?: boolean
}

type HeaderStringProps = {
    color?: "light" | "dark"
}

export const String = ({ value, alt, bold }: CommonStringProps & StringProps) => (
    <span
        className={ classes.string }
        style={ {
            fontWeight: bold ? 600 : 400,
            color: `var(${ alt ? "--alt-color" : "--color" })`
        } }
    >
    { value }
  </span>
);

export const SmallString = ({ value, center, very }: CommonStringProps & { very?: boolean }) => (
    <p style={ {
        textAlign: center ? "center" : "initial",
        fontSize: very ? "12px" : "inherit"
    } } className={ classes.smallString }>
        { value }
    </p>
);


const getColorVariable = (color?: "dark" | "light"): string => {
    switch (color) {
        case "dark":
            return "--color";
        case "light":
            return "--bg-color";
        default:
            return "--accent-color";
    }
};

export const HeaderString = ({ value, color }: CommonStringProps & HeaderStringProps) => (
    <h1
        style={ { color: `var(${ getColorVariable(color) })` } }
        className={ classes.headerString }
    >
        { value }
    </h1>
);