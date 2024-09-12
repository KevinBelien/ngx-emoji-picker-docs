---
id: text-box
title: Text Box
sidebar_label: Text Box
---

The TextBox component is a flexible and customizable text input field that supports different modes (e.g., text, search, password), visual variants (outlined, filled), and handles value changes with customizable events. It also supports additional features like autofocus and a clear button.

## Properties
| Property           | Type                                                      | Description                                                                                       | Default     |
|--------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------------|
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
