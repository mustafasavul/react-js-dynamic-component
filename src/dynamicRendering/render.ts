import React, { ReactNode } from "react";
import { Components } from "./constants";
import { convertStyleDataToInlineStyles } from "./converterStyleDataToInlineStyles";
import { baseParser } from "./baseParser"

interface JSONData {
    type: string;
    base?: any;
    custom?: any;
    data?: any;
    items?: JSONData[];
}

interface ComponentProps {
    [key: string]: any;
}

type ComponentType = React.ComponentType<ComponentProps>;

const renderPage = (
    json: JSONData,
    components = Components,
    key = "",
    parentType: string | null = null
): React.ReactNode => {
    if (!json) {
        console.log("Component JSON is required");
        return null;
    }

    const { type, base, custom, data, items } = json;

    const inlineStyles = base ? convertStyleDataToInlineStyles(base) : {};

    const baseProps = base ? baseParser(base) : {};

    let componentProps: ComponentProps = {
        ...baseProps,
        ...(data || {}),
        custom: custom,
        style: inlineStyles
    };

    const Component: ComponentType = components[type];

    if (!Component) {
        console.error(`Component ${type} not found.`);
        return null;
    }

    if (items && Array.isArray(items)) {
        const children: ReactNode[] = items.map((item, index) =>
            renderPage(item, components, `${key}-${index}`, type)
        );

        componentProps = {
            ...componentProps,
            parentItem: parentType
        };

        return React.createElement(
            Component,
            {
                key: `component-${type}-${componentProps.key || key}`,
                ...componentProps
            },
            ...children
        );
    }

    componentProps = {
        ...componentProps,
        parentItem: parentType
    };

    return React.createElement(Component, {
        key: `component-${type}-${componentProps.key || key}`,
        ...componentProps
    });
};

export default renderPage;
