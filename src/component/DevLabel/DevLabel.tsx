import React from "react";
import classes from "./DevLabel.module.sass";

type DevLabelProps = {
  label: string
}
const DevLabel: React.FC<DevLabelProps> = ({ label }) => {
  return <div className={ classes.devLabel }>
    <div className={ classes.devMark }>
        <span>
          { "dev" }
        </span>
    </div>
    <span>{ label }</span>
  </div>;
};

export default DevLabel;