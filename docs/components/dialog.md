---
id: dialog
title: Dialog
sidebar_label: Dialog
---

import ShowcaseCard from '@site/src/components/ShowcaseCard';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Dialog component is a versatile and customizable dialog element used to display content on top of the current page. It can be positioned relative to a target element and configured to have various properties such as a backdrop, custom width and height, and different scroll strategies. Uses [Angular's CDK Overlay](https://material.angular.io/cdk/overlay/overview)

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

## Positions

Positions allows you to control where the dialog appears relative to a target element on the page.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/dialog-positions" width="100%" height="400"></ShowcaseCard>

<Tabs>
    <TabItem value="html" label="HTML">
```html
<div [style.height.px]="400" class="showcase-container row-showcase justify-center align-center">
    <div class="grid-container">
        @for (position of positions; track $index) {
            <ch-button #button [label]="position" [width]="150" (onClick)="handleClick(position, button)"></ch-button>
        }
    </div>
</div>

<ch-dialog [(visible)]="visible" [target]="target()" [positions]="dialogPositions()">
    <ng-container content><p>Lorem ipsum dolor ipsam</p> </ng-container>
</ch-dialog>
```
    </TabItem>
    <TabItem value="ts" label="TS">
```typescript
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from '@chit-chat/ngx-emoji-picker/lib/components/button';
import { DialogComponent } from '@chit-chat/ngx-emoji-picker/lib/components/dialog';

@Component({
    selector: 'ch-dialog-position',
    standalone: true,
    imports: [CommonModule, DialogComponent, ButtonComponent],
    templateUrl: './dialog-position.component.html',
    styleUrls: ['./dialog-position.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogPositionComponent {
    positions: string[] = ['Top Left', 'Top', 'Top Right', 'Left', 'Center', 'Right', 'Bottom Left', 'Bottom', 'Bottom Right', 'Offset'];
    target = signal<HTMLElement | undefined>(undefined);
    visible = signal<boolean>(false);
    dialogPositions = signal<ConnectedPosition[]>([]);

    handleClick = (position: string, target: ButtonComponent) => {
        this.target.set(target.getNativeElement());

        const dialogPosition = this.calculateDialogPositionConfig(position);
        this.dialogPositions.set(dialogPosition);

        this.visible.set(true);
    };

    private calculateDialogPositionConfig = (position: string): ConnectedPosition[] => {
        switch (position) {
            case 'Top Left':
                return [
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom'
                    }
                ];
            case 'Top':
                return [
                    {
                        originX: 'center',
                        originY: 'top',
                        overlayX: 'center',
                        overlayY: 'bottom'
                    }
                ];
            case 'Top Right':
                return [
                    {
                        originX: 'end',
                        originY: 'top',
                        overlayX: 'end',
                        overlayY: 'bottom'
                    }
                ];
            case 'Bottom Left':
                return [
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top'
                    }
                ];
            case 'Bottom':
                return [
                    {
                        originX: 'center',
                        originY: 'bottom',
                        overlayX: 'center',
                        overlayY: 'top'
                    }
                ];
            case 'Bottom Right':
                return [
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top'
                    }
                ];
            case 'Left':
                return [
                    {
                        originX: 'start',
                        originY: 'center',
                        overlayX: 'end',
                        overlayY: 'center'
                    }
                ];

            case 'Right':
                return [
                    {
                        originX: 'end',
                        originY: 'center',
                        overlayX: 'start',
                        overlayY: 'center'
                    }
                ];
            case 'Offset':
                return [
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom',
                        offsetX: 150,
                        offsetY: -5
                    }
                ];
            default:
                return [
                    {
                        originX: 'center',
                        originY: 'center',
                        overlayX: 'center',
                        overlayY: 'center'
                    }
                ];
        }
    };
}
```
    </TabItem>
    <TabItem value="scss" label="SCSS">
```scss
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    row-gap: 1em;
    column-gap: 2em;
    justify-content: center;
    align-items: center;
}

.grid-container ch-button:last-child {
    grid-column: 2;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.showcase-container {
    padding-block: 2em;
    display: flex;
}

.justify-center {
    justify-content: center;
}

.align-center {
    align-items: center;
}

.flex-column {
    flex-direction: column;
}

.align-bottom {
    margin-top: auto;
}
```
    </TabItem>
</Tabs>

## Drag
Dialog can be dragged around the screen.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/dialog-draggable" width="100%" height="400"></ShowcaseCard>

<Tabs>
<TabItem value="html" label="HTML">
```html
<div [style.height.px]="400" class="showcase-container row-showcase justify-center align-center">
    <ch-button label="Click & Drag!" [height]="40" (onClick)="handleClick($event)"></ch-button>
</div>

<ch-dialog [(visible)]="visible" [dragEnabled]="true" [width]="500">
    <ng-container header><div>Lorem Ipsum</div></ng-container>
    <ng-container content
        ><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </ng-container>
</ch-dialog>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@chit-chat/ngx-emoji-picker/lib/components/button';
import { DialogComponent } from '@chit-chat/ngx-emoji-picker/lib/components/dialog';

@Component({
    selector: 'ch-dialog-draggable',
    standalone: true,
    imports: [CommonModule, DialogComponent, ButtonComponent],
    templateUrl: './dialog-draggable.component.html',
    styleUrl: './dialog-draggable.component.scss'
})
export class DialogDraggableComponent {
    visible = signal<boolean>(false);

    handleClick = (_evt: MouseEvent) => {
        this.visible.set(true);
    };
}
```
</TabItem>
<TabItem value="scss" label="SCSS">
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

.align-center {
    align-items: center;
}

.flex-column {
    flex-direction: column;
}
```
</TabItem>
</Tabs>


## Scroll
Dialog automatically displays a scrollbar when content overflows the viewport.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/dialog-scroll" width="100%" height="400"></ShowcaseCard>

<Tabs>
<TabItem value="html" label="HTML">
```html
<div [style.height.px]="400" class="showcase-container row-showcase justify-center align-center">
    <ch-button label="Click me!" [height]="40" (onClick)="handleClick($event)"></ch-button>
</div>

<ch-dialog [(visible)]="visible" [height]="300" [width]="500">
    <ng-container header><div>Lorem Ipsum</div></ng-container>
    <ng-container content
        ><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
            Phasellus vestibulum lorem sed risus ultricies tristique. Velit dignissim sodales ut eu sem. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Sed vulputate mi
            sit amet mauris commodo quis imperdiet massa. Nunc sed velit dignissim sodales ut eu sem integer vitae justo.
        </p>

        <p>
            Amet est placerat in egestas erat imperdiet sed euismod nisi. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Quam adipiscing vitae proin sagittis nisl rhoncus
            mattis rhoncus urna. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
            Phasellus vestibulum lorem sed risus ultricies tristique. Velit dignissim sodales ut eu sem. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Sed vulputate mi
            sit amet mauris commodo quis imperdiet massa. Nunc sed velit dignissim sodales ut eu sem integer vitae justo.
        </p>

        <p>
            Amet est placerat in egestas erat imperdiet sed euismod nisi. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Quam adipiscing vitae proin sagittis nisl rhoncus
            mattis rhoncus urna. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.
        </p>
    </ng-container>
</ch-dialog>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@chit-chat/ngx-emoji-picker/lib/components/button';
import { DialogComponent } from '@chit-chat/ngx-emoji-picker/lib/components/dialog';

@Component({
    selector: 'ch-dialog-scroll',
    standalone: true,
    imports: [CommonModule, DialogComponent, ButtonComponent],
    templateUrl: './dialog-scroll.component.html',
    styleUrl: './dialog-scroll.component.scss'
})
export class DialogScrollComponent {
    visible = signal<boolean>(false);

    handleClick = (_evt: MouseEvent) => {
        this.visible.set(true);
    };
}
```
</TabItem>
<TabItem value="scss" label="SCSS">
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

.align-center {
    align-items: center;
}

.flex-column {
    flex-direction: column;
}
```
</TabItem>
</Tabs>

## Properties

| Property               | Type                                                       | Description                                                                                               | Default                       |
|------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------|
| `visible`              | `boolean`                                                  | Specifies whether the dialog is visible. This is a two-way binding property.                                | `false`                       |
| `height`               | `number` \| `string`                                       | Specifies the height of the dialog.                                                                         | `'auto'`                      |
| `width`                | `number` \| `string`                                       | Specifies the width of the dialog.                                                                          | `'auto'`                      |
| `dragEnabled`          | `boolean`                                                  | Specifies wheter the dialog can be draggable. Only applies when the header is specified.                    | `true`                        |
| `target`               | `HTMLElement`                                              | Specifies the target element relative to which the dialog should be positioned.                             | `undefined`                   |
| `hasBackdrop`          | `boolean`                                                  | Specifies whether the dialog should display a backdrop behind it.                                            | `true`                       |
| `backdropClass`        | `string` \| `string[]`                                     | Specifies the CSS class or classes to be applied to the backdrop element.                                   | `'cdk-overlay-dark-backdrop'` |
| `closeOnBackdropClick` | `boolean`                                                  | Specifies whether the dialog should close when the backdrop is clicked (only relevant if `hasBackdrop` is `true`). | `true`                 |
| `positions`            | `ConnectedPosition[]`                                      | Specifies an array of possible positions for the dialog relative to the target element.                     | `[{originX: 'center', originY: 'center', overlayX: 'center', overlayY: 'center'}]` |
| `cssClass`             | `string` \| `string[]`                                     | Specifies the CSS class or classes to be applied to the dialog container element.                           | `''`                          |
| `scrollStrategy`       | `'block' \| 'noop' \| 'close' \| 'reposition'`             |  Defines how overlay elements behave when the user scrolls the page. Since overlays are positioned relative to the viewport or a specific element, controlling their behavior during scrolling is crucial to ensure they remain properly aligned, visible, or hidden as needed.                                              | `'block'`                     |


## Events

| Event      | Type          | Description                                                                 |
|------------|---------------|-----------------------------------------------------------------------------|
| `visibleChange` | `boolean`   | Emits when the visibility of the dialog changes. `true` when the dialog becomes visible, `false` when it is hidden. |
| `onOpened` | `OverlayRef`   | Emits after the dialog has opened |


## Methods

| Method  | Description                                                           |
|---------|-----------------------------------------------------------------------|
| `close()` | Closes the dialog by disposing of the dialog reference and setting the visibility to `false`. |

## CSS Custom Properties
| Property                     | Description                                                            |
|------------------------------|------------------------------------------------------------------------|
| `--ch-background-color`      | Background of the dialog content.                                      |
| `--ch-border-color`          | Border color of the dialog content.                                    |
| `--ch-text-color`            | Text color of the dialog.                                              |
| `--ch-color-scroll`                           | Color of the scrollbar                           |
| `--ch-color-scroll-hover`                     | Color of the scrollbar when hovering over the scrollbar                   |