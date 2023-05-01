import React from "react";
import s from "./index.scss?inline";
import cx from "classnames";

const HorizontalList = (props) => {
    const  {children, style, custom = {}, ...rest} = props;

    const { horizontalAlignment } = custom;

    const customStyles = {};

    const className = cx(
        s.horizontalList,
        {
            [s.left]: horizontalAlignment === "left",
            [s.center]: horizontalAlignment === "center",
            [s.right]: horizontalAlignment === "right",
        }
    );

    return (
        <div className={className} style={{ ...style, ...customStyles }} {...rest}>
            {children}
        </div>
    );
};

export default HorizontalList;