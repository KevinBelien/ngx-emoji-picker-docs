---
id: text-box
title: Text Box
sidebar_label: Text Box
---
import ShowcaseCard from '@site/src/components/ShowcaseCard';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The TextBox component is a flexible and customizable text input field that supports different modes (e.g., text, search, password), visual variants (outlined, filled), and handles value changes with customizable events. It also supports additional features like autofocus and a clear button.

## Import

```typescript
import { TextBoxComponent } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';
```

## Basic

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/text-box-basic" width="100%" height="104"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">

```html
<div class="showcase-container row-showcase justify-center">
    <ch-text-box [(value)]="value" [width]="250" valueChangeEvent="input" [height]="40" [showClearButton]="true" placeholder="Type here"></ch-text-box>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TextBoxComponent } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';

@Component({
    selector: 'ch-text-box-basic',
    standalone: true,
    imports: [CommonModule, TextBoxComponent],
    templateUrl: './text-box-basic.component.html',
    styleUrl: './text-box-basic.component.scss'
})
export class TextBoxBasicComponent {
    value = signal<string>('');
}
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
```
  </TabItem>
</Tabs>

## Modes
The TextBox component offers multiple modes to accommodate different types of user input. By setting the `mode` property, you can customize the behavior and appearance of the text box to suit your needs.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/text-box-modes" width="100%" height="216"></ShowcaseCard>

```html
    <ch-text-box [width]="250" [height]="40" mode="text" placeholder="Text"></ch-text-box>
    <ch-text-box [width]="250" [height]="40" mode="search" placeholder="Search"></ch-text-box>
    <ch-text-box [width]="250" [height]="40" mode="password" placeholder="Password"></ch-text-box>
```

## Variants
The textBox component provides different visual variants to match your application's design aesthetics. By setting the `variant` property, you can customize the appearance of the text box to be either `filled` or `outlined`.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/text-box-variants" width="100%" height="160"></ShowcaseCard>

```html
    <ch-text-box [width]="250" [height]="40" variant="filled" placeholder="Filled"></ch-text-box>
    <ch-text-box [width]="250" [height]="40" variant="outlined" placeholder="Outlined"></ch-text-box>
```

## Custom content
The TextBox component allows you to enrich input fields by adding custom content before or after the text input. This feature is particularly useful for incorporating icons, buttons, or any interactive elements that enhance the functionality of the input field.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/text-box-custom-content" width="100%" height="104"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">

```html
<div class="showcase-container row-showcase justify-center">
    <ch-text-box [(value)]="value" [width]="280" placeholder="Password" [mode]="mode()" [autofocus]="false">
        <ng-container addon-before>
            <ch-icon
                iconPath="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"
            ></ch-icon>
        </ng-container>
        <ng-container addon-after>
            <ch-button
                cssClass="password-show-btn"
                type="contrast"
                fill="clear"
                shape="round"
                [height]="26"
                [width]="26"
                [icon]="{
                    width: 20,
                    height: 20,
                    path: 'M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z'
                }"
                (onClick)="handleTogglePassword($event)"
            ></ch-button>
        </ng-container>
    </ch-text-box>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@chit-chat/ngx-emoji-picker/lib/components/button';
import { IconComponent } from '@chit-chat/ngx-emoji-picker/lib/components/icon';
import { TextBoxComponent, TextBoxMode } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';

@Component({
    selector: 'ch-text-box-custom-content',
    standalone: true,
    imports: [CommonModule, TextBoxComponent, ButtonComponent, IconComponent],
    templateUrl: './text-box-custom-content.component.html',
    styleUrl: './text-box-custom-content.component.scss'
})
export class TextBoxCustomContentComponent {
    value = signal<string>('');
    mode = signal<TextBoxMode>('password');

    handleTogglePassword = (evt: MouseEvent) => {
        evt.stopPropagation();
        this.mode.update((previousMode) => (previousMode === 'password' ? 'text' : 'password'));
    };
}
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

::ng-deep .password-show-btn {
    margin-right: 0.2em;
}

```
  </TabItem>
</Tabs>

## Properties
| Property           | Type                                                      | Description                                                                                       | Default     |
|--------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------------|
| `height`                 | `number` \| `string`                                                          | Specifies the height of the text box.                                                               | `'auto'`              |
| `width`                  | `number` \| `string`                                                          | Specifies the width of the text box.                                                                | `'auto'`     
| `value`            | `string`                                                  | The input's current value. This is a two-way binding property.                                     | `''`        |
| `autofocus`        | `boolean`                                                 | Specifies whether the textbox should automatically receive focus when the page loads.              | `false`     |
| `mode`             | `'text' \| 'search' \| 'password'`                        | Specifies the mode of the textbox, determining its type and behavior.                              | `'text'`    |
| `valueChangeEvent` | `string`                                                  | Specifies the event that triggers the value change in the textbox (e.g., 'change', 'input').       | `'change'`  |
| `placeholder`      | `string`                                                  | Specifies the placeholder text to be displayed inside the textbox when it is empty.                | `''`        |
| `disabled`         | `boolean`                                                 | Specifies whether the textbox is disabled.                                                        | `false`     |
| `variant`          | `'outlined' \| 'filled'`                                  | Specifies the visual variant of the textbox, affecting its appearance.                             | `'filled'`  |
| `showClearButton`  | `boolean`                                                 | Specifies whether a clear button should be displayed inside the textbox.                           | `false`     |

## Events
| Event             | Type                     | Description                                                                                 |
|-------------------|--------------------------|---------------------------------------------------------------------------------------------|
| `valueChange`      | `string`                 | Emits the current value of the text box when it changes. This is a two-way binding property. |
| `onValueChanged`   | `ValueChangeEvent`       | Emits when the value of the text box changes. Includes the new value, original event, and action. |

## Methods
| Method              | Description                                                                                         |
|---------------------|-----------------------------------------------------------------------------------------------------|
| `clear()`           | clear the text input                                                                                |

## CSS Custom Properties

| Property                                       | Description                                                                                               |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `--ch-editor-filled-background-color`          | Background color for the text box when using the "filled" variant.                                         |
| `--ch-editor-filled-background-color-hover`    | Background color for the "filled" variant when hovered.                                                    |
| `--ch-color-primary`                           | Primary color used for borders and focus states.                                                           |
| `--ch-editor-outlined-color`                   | Border color for the text box when using the "outlined" variant.                                            |
| `--ch-editor-outlined-color-hover`             | Border color for the "outlined" variant when hovered.                                                      |
| `--ch-font-family`                             | Font family for the text input within the text box.                                                        |
| `--ch-text-color`                              | Text color of the input field. Defaults to black (`#000`).                                                 |
