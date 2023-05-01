import React from 'react';

const Label = (props) => {
    const {custom = {}, style, text} = props;
    const {
        htmlFormatted = false,
        textAlignment,
        font = {},
        numberOfLines,
    } = custom;

    const {
        color,
        name,
        size,
        decoration = [],
        weight,
    } = font;

    const customStyles = {
        textAlign: textAlignment,
        color: color,
        fontFamily: name,
        fontSize: size,
        fontStyle: decoration.includes('italic') ? 'italic' : 'normal',
        textDecorationLine: decoration.filter((deco) => deco !== 'italic').join(' '),
        fontWeight: weight,
        display: numberOfLines ? '-webkit-box' : 'initial',
        WebkitLineClamp: numberOfLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    };

    if (htmlFormatted) {
        return (
            <div
                style={{...style, ...customStyles}}
                dangerouslySetInnerHTML={{__html: text}}
            />
        );
    }

    return !text ? null : (
        <div style={{...style, ...customStyles}}>{text}</div>
    );
};

export default Label;