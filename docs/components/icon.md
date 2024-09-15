---
id: icon
title: Icon
sidebar_label: Icon
---
import ShowcaseCard from '@site/src/components/ShowcaseCard';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Icon component is a versatile and customizable component for rendering SVG icons. It supports custom path data, height, width, and viewBox settings, enabling full control over the appearance of the SVG element.

## Import

```typescript
import { IconComponent } from '@chit-chat/ngx-emoji-picker/lib/components/icon';
```

## Basic
<ShowcaseCard  src="https://chitchat-showcase.netlify.app/icon" width="100%" height="120"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">

```html
<div class="showcase-container row-showcase justify-center">
    <ch-icon
        cssClass="icon-demo"
        iconPath="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"
        [height]="56"
        [width]="56"
        viewBox="0 -960 960 960"
    ></ch-icon>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '@chit-chat/ngx-emoji-picker/lib/components/icon';

@Component({
    selector: 'ch-icon-basic',
    standalone: true,
    imports: [CommonModule, IconComponent],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss'
})
export class IconBasicComponent {}
```

</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.showcase-container {
    padding-block: 2em;
    display: flex;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.justify-center {
    justify-content: center;
}


::ng-deep ch-icon .ch-icon.icon-demo {
    fill: var(--ch-color-primary);
}
```
  </TabItem>
</Tabs>

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