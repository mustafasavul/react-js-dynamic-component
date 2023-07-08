import React from 'react';
import {VerticalListProps} from "./props";

const VerticalList: React.FC<VerticalListProps> = (props) => {
    const { children, style = {}, data = {}, custom = {}, ...rest } = props;
    const { verticalAlignment = 'center', horizontalAlignment = 'center', interItemSpacing, isScrollable = false } = custom;

    const { aspectRatio, weight, width, height } = style;

    const justifyContent = horizontalAlignment === 'left'
        ? 'flex-start'
        : horizontalAlignment === 'center'
            ? 'center'
            : horizontalAlignment === 'right'
                ? 'flex-end'
                : undefined;

    const verticalContentAlignment = verticalAlignment === 'top'
        ? 'flex-start'
        : horizontalAlignment === 'center'
            ? 'center'
            : horizontalAlignment === 'bottom'
                ? 'flex-end'
                : undefined;

    const gapValue = typeof interItemSpacing === 'number' ? `${interItemSpacing}px` : interItemSpacing;

    const customStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: verticalContentAlignment,
        alignItems: justifyContent,
        gap: gapValue,
        overflowY: isScrollable ? 'scroll' : 'auto',
        overflowX: isScrollable ? 'auto' : 'auto',
    };

    const combinedStyles = { ...style, ...customStyles };

    const { ...otherProps } = rest;

    return (
        <div style={combinedStyles} {...otherProps} data-compName="VerticalList">
            {children}
        </div>
    );
};

VerticalList.defaultProps = {
    children: null,
    style: {},
    data: {},
    custom: {
        verticalAlignment: 'center',
        horizontalAlignment: 'center',
        interItemSpacing: '0px',
        isScrollable: false,
    },
};

export default VerticalList;
