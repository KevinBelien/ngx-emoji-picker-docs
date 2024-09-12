---
id: icon
title: Icon
sidebar_label: Icon
---
import ShowcaseCard from '@site/src/components/ShowcaseCard';

The Icon component is a versatile and customizable component for rendering SVG icons. It supports custom path data, height, width, and viewBox settings, enabling full control over the appearance of the SVG element.


## Properties
| Property    | Type                   | Description                                                                                                             | Default           |
|-------------|------------------------|-------------------------------------------------------------------------------------------------------------------------|-------------------|
| `cssClass`  | `string`               | Specifies the CSS class or classes to be applied to the SVG element.                                                     | `''`              |
| `iconPath`  | `string`               | Specifies the path data for the SVG icon, used to render the icon's shape.                                               | `''`              |
| `height`    | `number` \| `string`   | Specifies the height of the SVG icon. This can be a number (in pixels) or a string (e.g., `'24px'`, `'1em'`).            | `24`              |
| `width`     | `number` \| `string`   | Specifies the width of the SVG icon. This can be a number (in pixels) or a string (e.g., `'24px'`, `'1em'`).             | `24`              |
| `viewBox`   | `string`               | Specifies the `viewBox` attribute for the SVG, defining the position and dimensions of the canvas for proper scaling.     | `'0 -960 960 960'`|

## Events
No events available for this component.

## Methods
No public methods available for this component.

## CSS Custom Properties
| Property                                      | Description                                                                 |
|-----------------------------------------------|-----------------------------------------------------------------------------|
| `--ch-text-color`                          | Fill color of the icon. 