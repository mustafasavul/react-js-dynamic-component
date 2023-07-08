import React from 'react';
import {HorizontalListProps} from "./props";

const HorizontalList: React.FC<HorizontalListProps> = (props) => {
  const { children, style = {}, custom = {}, ...rest } = props;

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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent,
    alignItems: verticalContentAlignment,
    gap: gapValue,
    overflowY: isScrollable ? 'scroll' : 'auto',
    overflowX: isScrollable ? 'auto' : 'auto',
  };

  const combinedStyles = { ...style, ...customStyles };

  const { ...otherProps } = rest;

  return (
      <div style={combinedStyles} {...otherProps} data-compName="HorizontalList">
        {children}
      </div>
  );
};

HorizontalList.defaultProps = {
  children: null,
  style: {},
  custom: {
    verticalAlignment: 'center',
    horizontalAlignment: 'center',
    interItemSpacing: '0px',
    isScrollable: false,
  },
};

export default HorizontalList;
