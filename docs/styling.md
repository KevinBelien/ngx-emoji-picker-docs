---
id: styling
title: Styling
sidebar_label: Styling
sidebar_position: 4
---

### Custom CSS Properties

The library comes with extensive support for customizing its appearance using CSS custom properties.<br/><br/>
Below is an example of all the CSS custom properties that you can modify to customize the look and feel.

```css
:root {
    --ch-font-family: Poppins, Roboto, RobotoFallback, 'Noto Kufi Arabic', Helvetica, Arial, sans-serif;

    --ch-color-primary: #138e6b;
    --ch-color-success: #23a55a;
    --ch-color-danger: #fb3640;
    --ch-color-warning: #dea704;
    --ch-color-info: #3b82f6;
    --ch-color-contrast: #1a1a1a;
    --ch-color-contrast-alter: #e9e9e9;

    --ch-background-color: #fff;
    --ch-text-color: #323232;
    --ch-border-color: #d5d5d5a1;
    --ch-hover-color: #e9e9e9;
    --ch-select-color: #c4c4c4;

    --ch-editor-filled-background-color: rgba(0, 0, 0, 0.04);
    --ch-editor-filled-background-color-hover: rgba(0, 0, 0, 0.07);
    --ch-editor-outlined-color: rgba(0, 0, 0, 0.2);
    --ch-editor-outlined-color-hover: rgba(0, 0, 0, 0.4);

    --ch-color-scroll: rgba(204, 204, 215, 0.8);
    --ch-color-scroll-hover: rgb(201, 201, 210);

    --ch-emoji-picker-background: rgba(250, 250, 255, 1);
    --ch-emoji-picker-tab-bar-background: #fff;
    --ch-skintone-picker-background: #fff;
    --ch-emoji-variant-indicator-color: #909090;
    --ch-emoji-variant-indicator-color-hover: #626262;
}

[data-theme='dark'] {
    --ch-background-color: #222;
    --ch-text-color: #fff;
    --ch-border-color: #323232;

    --ch-color-contrast: #e9e9e9;
    --ch-color-contrast-alter: #1a1a1a;

    --ch-color-scroll: hsla(0, 0%, 100%, 0.15);
    --ch-color-scroll-hover: rgba(217, 217, 227, 0.5);

    --ch-emoji-picker-background: #1e1e1e;
    --ch-emoji-variant-indicator-color: #a9a9a9;
    --ch-emoji-variant-indicator-color-hover: #f1f1f1;
    --ch-emoji-picker-tab-bar-background: #1e1e1e;
    --ch-skintone-picker-background: #343434;
    --ch-hover-color: #3d3d3d;
    --ch-select-color: #727272;

    --ch-editor-filled-background-color: rgba(255, 255, 255, 0.04);
    --ch-editor-filled-background-color-hover: rgba(255, 255, 255, 0.07);

    --ch-editor-outlined-color: rgba(255, 255, 255, 0.2);
    --ch-editor-outlined-color-hover: rgba(255, 255, 255, 0.4);
}
```

### Overriding Component Styles
To override the styles of specific components, the best approach is to use ::ng-deep. This allows you to target styles within components' encapsulated CSS.<br/><br/>Here's an example of how to override the padding of the dialog content within the emoji picker:

```scss
::ng-deep .ch-dialog .ch-dialog-content {
    padding: 5px 3px 2px;
}
```