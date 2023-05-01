import React from 'react';
import { Components } from './constants';
import { convertStyleDataToInlineStyles } from "./converterStyleDataToInlineStyles";
import { baseParser } from "./baseParser";

type JsonComponent = {
    type: string;
    base?: any;
    custom?: any;
    data?: any;
    items?: JsonComponent[];
};

interface ComponentsMap {
    [key: string]: React.ComponentType<any>;
}

const renderPage = (
    json: JsonComponent | null,
    components: ComponentsMap = Components,
    key: string = ''
): React.ReactElement | null => {
    if (!json) {
        console.log('Component JSON is required');
        return null;
    }

    const { type, base, custom, data, items } = json;

    const inlineStyles = base ? convertStyleDataToInlineStyles(base) : {};

    const baseProps = base ? baseParser(base) : {};

    const componentProps = {
        ...baseProps,
        ...(custom || {}),
        ...(data || {}),
        style: inlineStyles,
    };

    const Component = components[type];

    if (!Component) {
        console.error(`Component ${type} not found`);
        return null;
    }

    if (items && Array.isArray(items)) {
        const children = items.map((item, index) =>
            renderPage(item, components, `${key}-${index}`)
        );

        return React.createElement(
            Component,
            { key: `component-${type}-${componentProps.key || key}`, ...componentProps },
            ...children
        );
    }

    return React.createElement(Component, {
        key: `component-${type}-${componentProps.key || key}`,
        ...componentProps,
    });
};

export default renderPage;

// In short, the createPage function dynamically creates and renders React components based on the input data provided.
// It processes the input data and, for each item, instantiates the corresponding
// React component using the Components mapping. It also applies inline styles and custom properties as needed.
// The output is a hierarchical structure of rendered React components.
