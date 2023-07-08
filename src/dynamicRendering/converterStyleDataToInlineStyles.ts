interface StyleData {
    size?: {
        aspect?: number;
        width?: string;
        height?: string;
        weight?: number;
    };
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
    backgroundColor?: string;
    border?: {
        cornerRadius?: {
            topLeft?: number;
            topRight?: number;
            bottomRight?: number;
            bottomLeft?: number;
        };
        width?: number;
        color?: string;
    };
    shadow?: {
        offsetX?: number;
        offsetY?: number;
        radius?: number;
        opacity?: number;
        color?: string;
    };
}

interface InlineStyles {
    [key: string]: string | number | undefined;
}

export function convertStyleDataToInlineStyles(styleData?: StyleData): InlineStyles {
    const {
        size,
        margin,
        padding,
        backgroundColor,
        border,
        shadow
    } = styleData ?? {};

    const inlineStyles: InlineStyles = {
        aspectRatio: size?.aspect ?? undefined,
        width: /^100%$/.test(size?.width ?? "") ? size?.width : (size?.width ? `${size.width}px` : undefined),
        height: /^100%$/.test(size?.height ?? "") ? size?.height : (size?.height ? `${size.height}px` : undefined),
        marginTop: margin?.top ? `${margin.top}px` : undefined,
        marginBottom: margin?.bottom ? `${margin.bottom}px` : undefined,
        marginLeft: margin?.left ? `${margin.left}px` : undefined,
        marginRight: margin?.right ? `${margin.right}px` : undefined,
        paddingTop: padding?.top ? `${padding.top}px` : undefined,
        paddingBottom: padding?.bottom ? `${padding.bottom}px` : undefined,
        paddingLeft: padding?.left ? `${padding.left}px` : undefined,
        paddingRight: padding?.right ? `${padding.right}px` : undefined,
        borderRadius: border?.cornerRadius
            ? `${border.cornerRadius.topLeft ?? 0}px ${border.cornerRadius.topRight ?? 0}px ${border.cornerRadius.bottomRight ?? 0}px ${border.cornerRadius.bottomLeft ?? 0}px`
            : undefined,
        backgroundColor: backgroundColor ?? undefined,
        borderWidth: border?.width ? `${border.width}px` : undefined,
        borderColor: border?.color ?? undefined,
        borderStyle: border && (border.width !== null && border.width !== 0) ? 'solid' : undefined,
        borderRadiusTopRight: (border?.cornerRadius?.topRight || border?.cornerRadius?.topRight === 0) ? `${border.cornerRadius.topRight}px` : undefined,
        borderRadiusTopLeft: (border?.cornerRadius?.topLeft || border?.cornerRadius?.topLeft === 0) ? `${border.cornerRadius.topLeft}px` : undefined,
        borderRadiusBottomRight: (border?.cornerRadius?.bottomRight || border?.cornerRadius?.bottomRight === 0) ? `${border.cornerRadius.bottomRight}px` : undefined,
        borderRadiusBottomLeft: (border?.cornerRadius?.bottomLeft || border?.cornerRadius?.bottomLeft === 0) ? `${border.cornerRadius.bottomLeft}px` : undefined,
        boxShadow: shadow && (shadow.offsetX || shadow.offsetY || shadow.radius || shadow.opacity || shadow.color)
            ? `${shadow.offsetX ?? 0}px ${shadow.offsetY ?? 0}px ${shadow.radius ?? 0}px ${shadow.opacity ?? 0}px ${shadow.color ?? ''}`
            : undefined,
        weight: size?.weight ?? undefined,
    };

    // Define width and height according to the provided logic
    if (size?.width && size?.height) {
        inlineStyles.width = /^100%$/.test(size.width) ? size.width : (size.width ? `${size.width}px` : undefined);
        inlineStyles.height = /^100%$/.test(size.height) ? size.height : (size.height ? `${size.height}px` : undefined);
    } else if (size?.width && size?.aspect) {
        inlineStyles.width = /^100%$/.test(size.width) ? size.width : (size.width ? `${size.width}px` : undefined);
        inlineStyles.height = /^100%$/.test(size.width / size.aspect) ? `${size.width / size.aspect}` : (size.width / size.aspect ? `${size.width / size.aspect}px` : undefined);
    } else if (size?.height && size?.aspect) {
        inlineStyles.width = /^100%$/.test(size.height * size.aspect) ? `${size.height * size.aspect}` : (size.height * size.aspect ? `${size.height * size.aspect}px` : undefined);
        inlineStyles.height = /^100%$/.test(size.height) ? `${size.height}` : (size.height ? `${size.height}px` : undefined);
    }

    // Handle min and max for width and height
    if (styleData?.width) {
        inlineStyles.minWidth = styleData.width.min ? `${styleData.width.min}px` : undefined;
        inlineStyles.maxWidth = styleData.width.max ? `${styleData.width.max}px` : undefined;
    }

    if (styleData?.height) {
        inlineStyles.minHeight = styleData.height.min ? `${styleData.height.min}px` : undefined;
        inlineStyles.maxHeight = styleData.height.max ? `${styleData.height.max}px` : undefined;
    }

    // Shorthand for margin
    if (margin) {
        inlineStyles.margin = `${margin.top ?? 0}px ${margin.right ?? 0}px ${margin.bottom ?? 0}px ${margin.left ?? 0}px`;
    }

    // Shorthand for padding
    if (padding) {
        inlineStyles.padding = `${padding.top ?? 0}px ${padding.right ?? 0}px ${padding.bottom ?? 0}px ${padding.left ?? 0}px`;
    }

    if (border) {
        if (border.cornerRadius?.topLeft || border.cornerRadius?.topRight || border.cornerRadius?.bottomRight || border.cornerRadius?.bottomLeft) {
            inlineStyles.borderRadius = `${border.cornerRadius.topLeft ?? 0}px ${border.cornerRadius.topRight ?? 0}px ${border.cornerRadius.bottomRight ?? 0}px ${border.cornerRadius.bottomLeft ?? 0}px`;
        } else {
            inlineStyles.borderRadius = undefined;
        }

        if (border.width && border.style && border.color) {
            inlineStyles.border = `${border.width}px ${border.style} ${border.color}`;
        } else {
            inlineStyles.border = undefined;
        }
    }

    return inlineStyles;
}
