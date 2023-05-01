import React from "react";

interface StyleData {
    width?: {
        value: number;
        fill?: boolean;
        min?: number;
        max?: number;
    };
    height?: {
        value: number;
        min?: number;
        max?: number;
    };
    ratio?: number;
    weight?: number;
    margin?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    cornerRadius?: {
        topLeft?: number;
        topRight?: number;
        bottomRight?: number;
        bottomLeft?: number;
    };
    backgroundColor?: string;
    border?: {
        width?: number;
        color?: string;
        border?: string;
        style?: string;
    };
    shadow?: {
        offsetX?: number;
        offsetY?: number;
        radius?: number;
        opacity?: number;
        color?: string;
    };
}

export function convertStyleDataToInlineStyles(styleData: StyleData | null): React.CSSProperties {
    const {
        width,
        height,
        ratio,
        weight,
        margin,
        padding,
        cornerRadius,
        backgroundColor,
        border,
        shadow,
    } = styleData ?? {};

    const inlineStyles: React.CSSProperties = {
        aspectRatio: ratio ? ratio : undefined,
        width: width?.value
            ? width?.fill
                ? `${width.value}%`
                : `${width.value}px`
            : undefined,
        height: height ? `${height.value}px` : undefined,
        marginTop: margin?.top ? `${margin.top}px` : undefined,
        marginBottom: margin?.bottom ? `${margin.bottom}px` : undefined,
        marginLeft: margin?.left ? `${margin.left}px` : undefined,
        marginRight: margin?.right ? `${margin.right}px` : undefined,
        paddingTop: padding?.top ? `${padding.top}px` : undefined,
        paddingBottom: padding?.bottom ? `${padding.bottom}px` : undefined,
        paddingLeft: padding?.left ? `${padding.left}px` : undefined,
        paddingRight: padding?.right ? `${padding.right}px` : undefined,
        borderRadius: cornerRadius
            ? `${cornerRadius?.topLeft ?? 0}px ${cornerRadius?.topRight ?? 0}px ${cornerRadius?.bottomRight ?? 0}px ${cornerRadius?.bottomLeft ?? 0}px`
            : undefined,
        backgroundColor: backgroundColor || undefined,
        borderWidth: border?.width ? `${border.width}px` : undefined,
        borderColor: border?.color ? border.color : undefined,
        border: border?.border ? `${border.border}` : undefined,
        boxShadow: shadow
            ? `${shadow?.offsetX ?? 0}px ${shadow?.offsetY ?? 0}px ${shadow?.radius ?? 0}px ${shadow?.opacity ?? 0}px ${shadow?.color ?? ''}`
            : undefined,
    };

    // Handle min and max for width and height
    if (width) {
        inlineStyles.minWidth = width?.min ? `${width.min}px` : undefined;
        inlineStyles.maxWidth = width?.max ? `${width.max}px` : undefined;
    }

    if (height) {
        inlineStyles.minHeight = height?.min ? `${height.min}px` : undefined;
        inlineStyles.maxHeight = height?.max ? `${height.max}px` : undefined;
    }

    // Shorthand for margin
    if (margin) {
        inlineStyles.margin = `${margin?.top ?? 0}px ${margin?.right ?? 0}px ${margin?.bottom ?? 0}px ${margin?.left ?? 0}px`
    }

// Shorthand for padding
    if (padding) {
        inlineStyles.padding = `${padding?.top ?? 0}px ${padding?.right ?? 0}px ${padding?.bottom ?? 0}px ${padding?.left ?? 0}px`;
    }

// Shorthand for border-radius
    if (cornerRadius) {
        inlineStyles.borderRadius = `${cornerRadius?.topLeft ?? 0}px ${cornerRadius?.topRight ?? 0}px ${cornerRadius?.bottomRight ?? 0}px ${cornerRadius?.bottomLeft ?? 0}px`;
    }

// Check if all border properties are defined, then create the shorthand
    if (border?.width && border?.style && border?.color) {
        inlineStyles.border = `${border.width}px ${border.style} ${border.color}`;
    }

    return inlineStyles
}

