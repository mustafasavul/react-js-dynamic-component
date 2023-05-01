import React from "react";
import cx from "classnames";
import s from './index.scss?inline'

const VerticalList = (props) => {
    const {
        children,
        style,
        data,
        custom,
        ...rest
    } = props;

    const { VerticalAlignment } = custom ?? {};

    const className = cx(s.verticalList, {
        [s.top]: VerticalAlignment === "top",
        [s.center]: VerticalAlignment === "center",
        [s.bottom]: VerticalAlignment === "bottom",
    });

    return <div className={className} style={{...style}} {...rest}>{children}</div>;
};

export default VerticalList;