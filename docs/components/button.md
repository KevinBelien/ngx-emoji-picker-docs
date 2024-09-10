---
id: button
title: Button
sidebar_label: Button
---

import ShowcaseCard from '@site/src/components/ShowcaseCard';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Button component is a simple button that performs specified commands when a user clicks it. 


## Import
```typescript
import { ButtonComponent } from '@chit-chat/ngx-emoji-picker/lib/components/button';
```

## Basic Usage

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-basic" width="100%" height="105px"></ShowcaseCard>

<Tabs>
  <TabItem value="html" label="HTML">
```html
<ch-button label="Click me!" (onClick)="handleClick($event)"></ch-button>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
handleClick = (_evt: MouseEvent) => {
    alert('Button clicked');
};
```
    </TabItem>
</Tabs>

## Shape
Specifies the shape of the button.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-shape" width="100%" height="105px"></ShowcaseCard>

```html
<ch-button shape="square" label="Square"></ch-button>
<ch-button shape="round" label="Round"></ch-button>
```

## Fill
Specifies the background and border color of the button.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-fill" width="100%" height="105px"></ShowcaseCard>

```html
<ch-button shape="solid" label="Solid"></ch-button>
<ch-button shape="outlined" label="Outlined"></ch-button>
<ch-button shape="clear" label="Clear"></ch-button>
```

## Types
Specifies the button type.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-types" width="100%" height="105px"></ShowcaseCard>

```html
<ch-button type="primary" label="Primary"></ch-button>
<ch-button type="success" label="Success"></ch-button>
<ch-button type="danger" label="Danger"></ch-button>
<ch-button type="warning" label="Warning"></ch-button>
<ch-button type="info" label="Info"></ch-button>
<ch-button type="contrast" label="Contrast"></ch-button>
```

## Icon
Icon of a button is specified with icon property and position is configured using position attribute of the icon.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-icon" width="100%" height="137px"></ShowcaseCard>

```html
<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
    label="Icon Left"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z',
        position: 'right'
    }"
    label="Icon Right"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z',
        position: 'bottom'
    }"
    label="Icon Bottom"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z',
        position: 'top'
    }"
    label="Icon Top"
></ch-button>
```


## Icon Only
Buttons without having any label.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-icon-only" width="100%" height="105px"></ShowcaseCard>

```html
<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
    shape="round"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
    fill="outlined"
    shape="round"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
    shape="round"
    fill="clear"
></ch-button>

<ch-button
    [icon]="{
        path: 'M220-130v-650h323.84l16 80H780v360H536.16l-16-80H280v290h-60Z'
    }"
    [raised]="true"
    shape="round"
></ch-button>
```

## States
The button component provides various configuration options to control how it responds to user interactions. You can disable specific interaction states such as hover, focus, and active, or fully disable the button. This section demonstrates how the button behaves with different state configurations.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-states" width="100%" height="105px"></ShowcaseCard>

```html
<ch-button [disabled]="true" label="Disabled"></ch-button>
<ch-button [hoverStateEnabled]="false" label="Hover state disabled"></ch-button>
<ch-button [focusStateEnabled]="false" label="Focus state disabled"></ch-button>
<ch-button [activeStateEnabled]="false" label="Active state disabled"></ch-button>
```

## Raised
The button component supports a raised style, which gives the button an elevated appearance, creating a shadow effect beneath the button.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-raised" width="100%" height="105px"></ShowcaseCard>

```html
<ch-button [raised]="true" label="Raised"></ch-button>
```

## Custom content
The button component allows for complete customization of its content. You can insert any custom HTML or SVG elements inside the button to create unique visual experiences, such as custom icons or complex layouts.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/button-custom-content" width="100%" height="117px"></ShowcaseCard>

```html
<ch-button>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="35" preserveAspectRatio="xMidYMid meet" version="1.0">
        <defs>
            <clipPath id="ccca2dffe4"><path d="M 46.773438 30.550781 L 320.5625 30.550781 L 320.5625 343.453125 L 46.773438 343.453125 Z M 46.773438 30.550781 " clip-rule="nonzero" /></clipPath>
        </defs>
        <g clip-path="url(#ccca2dffe4)">
            <path
                fill="#fff"
                d="M 63.8125 178.625 L 47.019531 178.625 C 46.878906 181.394531 46.789062 184.207031 46.789062 187.019531 C 46.789062 189.835938 46.878906 192.609375 47.019531 195.417969 L 84.019531 195.417969 C 85.503906 216.597656 92.511719 236.300781 103.632812 253.054688 L 115.816406 240.871094 C 107.511719 227.441406 102.207031 211.984375 100.863281 195.417969 C 100.632812 192.648438 100.546875 189.835938 100.546875 187.019531 C 100.546875 184.15625 100.632812 181.394531 100.863281 178.625 C 102.207031 162.011719 107.511719 146.554688 115.816406 133.125 L 103.632812 120.941406 C 92.511719 137.695312 85.503906 157.398438 84.019531 178.625 Z M 111.707031 292.507812 L 99.804688 304.414062 C 95.605469 300.671875 91.589844 296.753906 87.808594 292.644531 C 67.691406 270.636719 53.796875 242.949219 48.820312 212.214844 L 65.839844 212.214844 C 70.597656 238.289062 82.59375 261.871094 99.714844 280.742188 L 106.820312 273.636719 L 113.972656 266.433594 L 125.878906 254.578125 C 129.570312 258.773438 133.628906 262.699219 137.921875 266.253906 C 149.453125 275.753906 163.117188 282.820312 178.019531 286.601562 L 178.019531 303.859375 C 158.496094 299.652344 140.734375 290.65625 126.015625 278.199219 Z M 137.507812 187.019531 C 137.507812 189.835938 137.6875 192.648438 138.011719 195.417969 C 142.167969 227.71875 169.757812 252.726562 203.257812 252.726562 C 212.488281 252.726562 221.304688 250.835938 229.28125 247.375 L 241.878906 259.972656 C 230.339844 266.066406 217.199219 269.527344 203.257812 269.527344 C 160.484375 269.527344 125.324219 237.042969 121.121094 195.417969 C 120.84375 192.648438 120.703125 189.835938 120.703125 187.019531 C 120.703125 184.15625 120.84375 181.347656 121.121094 178.625 C 125.324219 136.953125 160.484375 104.464844 203.257812 104.464844 C 217.199219 104.464844 230.339844 107.929688 241.878906 114.023438 L 229.28125 126.621094 C 221.304688 123.160156 212.488281 121.269531 203.257812 121.269531 C 169.757812 121.269531 142.167969 146.277344 138.011719 178.625 C 137.6875 181.347656 137.507812 184.15625 137.507812 187.019531 Z M 256.089844 250.421875 L 244.144531 238.476562 C 248.527344 234.964844 252.449219 230.945312 255.863281 226.421875 L 267.816406 238.425781 L 282.164062 252.726562 L 294.070312 264.632812 L 308.371094 278.941406 L 320.277344 290.84375 C 316.542969 295.042969 312.617188 299.011719 308.46875 302.800781 C 286.550781 322.730469 258.949219 336.476562 228.449219 341.414062 L 228.449219 324.390625 C 254.339844 319.683594 277.734375 307.777344 296.5625 290.894531 L 287.746094 282.078125 L 282.253906 276.632812 L 270.351562 264.730469 Z M 211.65625 289.371094 C 228.035156 288.027344 243.3125 282.859375 256.644531 274.742188 L 268.828125 286.925781 C 252.171875 297.859375 232.65625 304.730469 211.65625 306.214844 L 211.65625 343.214844 C 208.847656 343.402344 206.074219 343.453125 203.257812 343.453125 C 200.445312 343.453125 197.632812 343.402344 194.863281 343.214844 C 164.503906 341.652344 136.445312 331.359375 113.09375 314.882812 L 125.136719 302.800781 C 145.253906 316.40625 169.113281 324.898438 194.863281 326.421875 L 194.863281 289.371094 C 197.632812 289.597656 200.394531 289.6875 203.257812 289.6875 C 206.074219 289.6875 208.886719 289.597656 211.65625 289.371094 Z M 111.707031 81.535156 L 99.804688 69.632812 C 95.605469 73.324219 91.589844 77.242188 87.808594 81.398438 C 67.691406 103.367188 53.796875 131.09375 48.820312 161.78125 L 65.839844 161.78125 C 70.597656 135.707031 82.59375 112.132812 99.714844 93.253906 L 106.820312 100.367188 L 113.972656 107.5625 L 125.878906 119.46875 C 129.570312 115.222656 133.628906 111.300781 137.921875 107.75 C 149.453125 98.242188 163.117188 91.183594 178.019531 87.394531 L 178.019531 70.1875 C 158.496094 74.382812 140.734375 83.335938 126.015625 95.796875 L 119.742188 89.5625 Z M 256.089844 123.574219 L 244.144531 135.527344 C 248.527344 139.03125 252.449219 143.089844 255.863281 147.570312 L 294.070312 109.363281 L 308.371094 95.054688 L 320.277344 83.148438 C 316.542969 78.953125 312.617188 74.984375 308.46875 71.203125 C 286.550781 51.3125 258.949219 37.519531 228.449219 32.582031 L 228.449219 49.601562 C 254.339844 54.363281 277.734375 66.21875 296.5625 83.109375 L 287.746094 91.917969 L 282.253906 97.359375 L 270.351562 109.265625 Z M 211.65625 84.625 C 228.035156 85.96875 243.3125 91.136719 256.644531 99.257812 L 268.828125 87.078125 C 252.171875 76.132812 232.65625 69.265625 211.65625 67.789062 L 211.65625 30.78125 C 208.847656 30.640625 206.074219 30.550781 203.257812 30.550781 C 200.445312 30.550781 197.632812 30.640625 194.863281 30.78125 C 164.503906 32.394531 136.445312 42.636719 113.09375 59.113281 L 125.136719 71.203125 C 145.253906 57.589844 169.113281 49.144531 194.863281 47.574219 L 194.863281 84.625 C 197.632812 84.398438 200.394531 84.308594 203.257812 84.308594 C 206.074219 84.308594 208.886719 84.398438 211.65625 84.625 Z M 211.65625 84.625 "
                fill-opacity="1"
                fill-rule="evenodd"
            />
        </g>
    </svg>
</ch-button>
```

## Properties

| Property             | Type                                             | Description                                                                                         | Default       |
|----------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------|
| `label`              | `string`                                         | The text displayed in the button.                                                                    | `undefined`   |
| `icon`               | [`Partial<ButtonIconProps>`](#buttoniconprops)    | Configuration object for the icon inside the button. See the [ButtonIconProps](#buttoniconprops) below. | `undefined`   |
| `cssClass`           | `string` \| `undefined`                          | Specifies a CSS class to be applied to the button.                                                   | `undefined`   |
| `width`              | `number` \| `undefined`                          | Specifies the width of the button.                                                                   | `undefined`   |
| `height`             | `number` \| `undefined`                          | Specifies the height of the button.                                                                  | `undefined`   |
| `disabled`           | `boolean`                                        | Specifies whether the button responds to user interaction.                                           | `false`       |
| `activeStateEnabled` | `boolean`                                        | Specifies whether the button changes its visual state as a result of user interaction.               | `true`        |
| `focusStateEnabled`  | `boolean`                                        | Specifies whether the button can be focused.                                                         | `true`        |
| `hoverStateEnabled`  | `boolean`                                        | Specifies whether the button changes its state when a user pauses on it.                             | `true`        |
| `type`               | `'primary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'contrast'` | Specifies the button type.                                                  | `'primary'`   |
| `fill`               | `'solid' \| 'outline' \| 'clear'`                | Specifies how the button is styled.                                                                  | `'solid'`     |
| `raised`             | `boolean`                                        | Indicates whether the button should have an elevated appearance.                                     | `false`       |
| `shape`              | `'square' \| 'round'`                            | Indicates the shape of the button.                                                                   | `'square'`    |
| `tabIndex`           | `number` \| `null`                               | Specifies a tabindex to the button.                                                                  | `null`        |
| `ariaLabel`          | `string` \| `undefined`                                        | Provides an accessible label for the button, enhancing screen reader support.                        | `undefined`   |
| `autofocus`          | `boolean`                                        | Specifies whether the button should automatically receive focus when the page loads.                 | `false`       |



### `ButtonIconProps`
| Property   | Type                                      | Description                                                                                  | 
|------------|-------------------------------------------|----------------------------------------------------------------------------------------------|
| `cssClass` | `string`                                  | The CSS class or classes to be applied to the icon for styling purposes.                     
| `path`     | `string`                                  | The SVG path data for the icon.                                                              
| `height`   | `number` \| `string`                      | The height of the icon (in pixels or as a string with units like `24px` or `1em`).            
| `width`    | `number` \| `string`                      | The width of the icon (in pixels or as a string with units like `24px` or `1em`).             
| `viewBox`  | `string`                                  | The viewBox attribute of the SVG element, defining the icon's position and dimension.          
| `position` | `IconPosition`                            | The position of the icon relative to the button text (e.g., `left`, `right`, `top`, `bottom`).|

## Events
| Event      | Type          | Description                             |
|------------|---------------|-----------------------------------------|
| `onClick`  | `MouseEvent`   | Callback to execute when the button is clicked. The event object is passed as a parameter. |

## Methods
No public methods available for this component.

## CSS Custom Properties

| Property                         | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| `--ch-color-primary`      | Primary button color.                                                        |
| `--ch-color-success`      | Success button color.                                                        |
| `--ch-color-danger`       | Danger button color.                                                         |
| `--ch-color-warning`      | Warning button color.                                                        |
| `--ch-color-info`         | Info button color.                                                           |
| `--ch-color-contrast`             | The contrast color, which adapts to light/dark modes.                        |
| `--ch-color-contrast-alter`       | The alternative contrast color, which adapts to light/dark modes.            |
