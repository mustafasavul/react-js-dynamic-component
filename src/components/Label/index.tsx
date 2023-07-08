import React from 'react';
import {LabelProps} from "./props";

const Label: React.FC<LabelProps> = (props) => {
    const { custom = {}, style, text } = props;
    const {
        htmlFormatted = false,
        textAlignment,
        font = {},
        numberOfLines,
    } = custom;

    const { color, name, size, decoration = [], weight } = font;

    const customStyles: React.CSSProperties = {
        textAlign: textAlignment || 'initial',
        color: color || 'initial',
        fontFamily: name === 'Inter' ? "'Inter', sans-serif" : 'initial',
        fontSize: size ? `${size}px` : 'initial',
        fontStyle: decoration && decoration.includes('italic') ? 'italic' : 'normal',
        textDecorationLine: decoration
            ? decoration.filter((deco) => deco !== 'italic').join(' ')
            : 'none',
        fontWeight: weight || 'initial',
        display: numberOfLines ? '-webkit-box' : 'initial',
        WebkitLineClamp: numberOfLines || 'initial',
        WebkitBoxOrient: numberOfLines ? 'vertical' : 'initial',
        overflow: numberOfLines && numberOfLines > 0 ? 'hidden' : 'auto',
        textOverflow: numberOfLines === 1 ? 'ellipsis' : 'initial',
    };

    if (htmlFormatted) {
        return (
            <div
                style={{...style, ...customStyles}}
                dangerouslySetInnerHTML={{__html: text || ''}}
            />
        );
    }

    return !text ? null : (
        <div style={{ ...style, ...customStyles }}>
            {text}
        </div>
    );
};

Label.defaultProps = {
    custom: {
        htmlFormatted: false,
        textAlignment: 'left',
        font: {
            color: '#000',
            size: 18,
            decoration: [],
            weight: 'normal',
        },
        numberOfLines: 1,
    },
    style: {},
    text: '',
};

export default Label;
