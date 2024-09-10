---
id: dialog
title: Dialog
sidebar_label: Dialog
---

import ShowcaseCard from '@site/src/components/ShowcaseCard';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Dialog component is a versatile and customizable popup element used to display content on top of the current page. It can be positioned relative to a target element and configured to have various properties such as a backdrop, custom width and height, and different scroll strategies.

## Import

```typescript
import { DialogComponent } from '@chit-chat/ngx-emoji-picker/lib/components/dialog';
```

## Basic Usage

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/dialog-basic" width="100%" height="450px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">

```html
<div [style.height.px]="450" class="showcase-container row-showcase justify-center">
    <div class="align-bottom">
        <ch-button label="Click me!" (onClick)="handleClick($event)"></ch-button>
    </div>
</div>
<ch-dialog cssClass="emoji-picker-dialog"
            backdropClass="cdk-overlay-transparent-backdrop"
            [(visible)]="visible"
            [target]="buttonElement()?.nativeElement"
            [positions]="dialogPositions"
            (onOpened)="handleOnOpened($event)">
    <ng-container content>
        <ch-emoji-picker [height]="350" [width]="350"></ch-emoji-picker>
    </ng-container>
</ch-dialog>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { ConnectedPosition, OverlayRef } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { ButtonComponent } from '@chit-chat/ngx-emoji-picker/lib/components/button';
import { DialogComponent } from '@chit-chat/ngx-emoji-picker/lib/components/dialog';
import { EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@Component({
    selector: 'ch-dialog-basic',
    standalone: true,
    imports: [CommonModule, DialogComponent, ButtonComponent, EmojiPickerComponent],
    templateUrl: './dialog-basic.component.html',
    styleUrl: './dialog-basic.component.scss'
})
export class DialogBasicComponent {
    buttonElement = viewChild(ButtonComponent, { read: ElementRef });
    emojiPickerComponent = viewChild(EmojiPickerComponent);

    visible = signal<boolean>(false);

    dialogPositions: ConnectedPosition[] = [
        {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: -5
        }
    ];

    handleOnOpened = (_ref: OverlayRef) => {
        setTimeout(() => this.emojiPickerComponent()?.refreshViewport());
    };

    handleClick = (_evt: MouseEvent) => {
        this.visible.set(true);
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

.align-bottom {
    margin-top: auto;
}

::ng-deep .emoji-picker-dialog.ch-dialog .ch-dialog-content {
    padding: 5px 3px 2px;
}
```
  </TabItem>
</Tabs>

## Templates

Dialogs can be customized using `header` and `footer` templates.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/dialog-templates" width="100%" height="400"></ShowcaseCard>

<Tabs>
    <TabItem value="html" label="HTML">
```html
<div [style.height.px]="400" class="showcase-container row-showcase justify-center align-center">
    <ch-button label="Show" (onClick)="handleClick($event)"></ch-button>
</div>
<ch-dialog [(visible)]="visible" [width]="350" [closeOnBackdropClick]="false">
    <ng-container header>
        <div class="header flex-container">
            <div class="header-before title">Personal information</div>
            <div class="flex-end">
                <ch-button 
                    [icon]="closeIconConfig" 
                    [height]="28" 
                    [width]="28" 
                    shape="round" 
                    fill="clear" 
                    type="contrast" 
                    (onClick)="close($event)">
                </ch-button>
            </div>
        </div>
    </ng-container>
    <ng-container content>
        <div class="content-container">
            <div class="form-item">
                <div class="label">Username:</div>
                <ch-text-box></ch-text-box>
            </div>
            <div class="form-item">
                <div class="label">Password:</div>
                <ch-text-box mode="password"></ch-text-box>
            </div>
        </div>
    </ng-container>
    <ng-container footer>
        <div class="footer flex-container flex-end">
            <ch-button 
                label="Cancel" 
                [height]="35" 
                (onClick)="close($event)" 
                fill="clear">
            </ch-button>
            <ch-button 
                label="Submit" 
                [height]="35" 
                (onClick)="close($event)">
            </ch-button>
        </div>
    </ng-container>
</ch-dialog>
```
</TabItem>
  <TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent, ButtonIconProps } from '@chit-chat/ngx-emoji-picker/lib/components/button';
import { DialogComponent } from '@chit-chat/ngx-emoji-picker/lib/components/dialog';
import { TextBoxComponent } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';

@Component({
    selector: 'ch-dialog-templates',
    standalone: true,
    imports: [CommonModule, DialogComponent, ButtonComponent, TextBoxComponent],
    templateUrl: './dialog-templates.component.html',
    styleUrl: './dialog-templates.component.scss'
})
export class DialogTemplatesComponent {
    visible = signal<boolean>(false);

    closeIconConfig: Partial<ButtonIconProps> = { path: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z', height: 19, width: 19 };

    handleClick = (_evt: MouseEvent) => {
        this.visible.set(true);
    };

    close = (evt: MouseEvent) => {
        evt.stopPropagation();
        this.visible.set(false);
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

    .flex-container {
        display: flex;
        align-items: center;
    }

    .header {
        width: 100%;
        padding: 0.4em 0.2em 0.2em;
    }

    .title {
        font-weight: 500;
        font-size: 1.1rem;
    }

    .flex-end {
        margin-left: auto;
    }

    .justify-center {
        justify-content: center;
    }

    .content-container {
        margin-block: 0.5em;
        padding-inline: 0.4em;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
    }

    .form-item {
        display: flex;
    }

    .label {
        font-weight: 500;
        min-width: 90px;
    }

    .footer {
        padding: 0.2em 0.4em;
        column-gap: 0.6em;
    }
```
</TabItem>
</Tabs>

## Properties

| Property               | Type                                                       | Description                                                                                               | Default                       |
|------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------|
| `visible`              | `boolean`                                                  | Specifies whether the popup is visible. This is a two-way binding property.                                | `false`                       |
| `height`               | `number` \| `string`                                       | Specifies the height of the popup.                                                                         | `'auto'`                      |
| `width`                | `number` \| `string`                                       | Specifies the width of the popup.                                                                          | `'auto'`                      |
| `target`               | `HTMLElement`                                              | Specifies the target element relative to which the popup should be positioned.                             | `undefined`                   |
| `hasBackdrop`          | `boolean`                                                  | Specifies whether the popup should display a backdrop behind it.                                            | `true`                        |
| `backdropClass`        | `string` \| `string[]`                                     | Specifies the CSS class or classes to be applied to the backdrop element.                                   | `'cdk-overlay-dark-backdrop'` |
| `closeOnBackdropClick` | `boolean`                                                  | Specifies whether the popup should close when the backdrop is clicked (only relevant if `hasBackdrop` is `true`). | `true`                        |
| `positions`            | `ConnectedPosition[]`                                      | Specifies an array of possible positions for the popup relative to the target element.                     | `[{originX: 'center', originY: 'center', overlayX: 'center', overlayY: 'center'}]` |
| `cssClass`             | `string` \| `string[]`                                     | Specifies the CSS class or classes to be applied to the popup container element.                           | `''`                          |
| `scrollStrategy`       | `'block' \| 'noop' \| 'close' \| 'reposition'`             | Specifies the scroll strategy to be used for the popup.                                                    | `'block'`                     |


## Events

| Event      | Type          | Description                                                                 |
|------------|---------------|-----------------------------------------------------------------------------|
| `visibleChange` | `boolean`   | Emits when the visibility of the dialog changes. `true` when the popup becomes visible, `false` when it is hidden. |
| `onOpened` | `OverlayRef`   | Emits after the dialog has opened |


## Methods

| Method  | Description                                                           |
|---------|-----------------------------------------------------------------------|
| `close` | Closes the dialog by disposing of the dialog reference and setting the visibility to `false`. |

## CSS Custom Properties
| Property                     | Description                                                            |
|------------------------------|------------------------------------------------------------------------|
| `--ch-background-color`      | Background of the dialog content.                                      |
| `--ch-border-color`          | Border color of the dialog content.                                    |
| `--ch-text-color`            | Text color of the dialog.                                              |