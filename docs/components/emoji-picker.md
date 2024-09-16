---
id: emoji-picker
title: Emoji Picker
sidebar_label: Emoji Picker
---

import ShowcaseCard from '@site/src/components/ShowcaseCard';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Emoji Picker component is a customizable tool that allows users to select emojis, filter them by categories, and adjust skintone preferences. It supports ***Custom Emoji Sizes***, ***Localization***, ***Filtering Based On Localization Settings***, and ***Virtual Scrolling*** for efficient handling of large emoji sets. The component also offers suggestions based on ***Recent or Frequent Emoji Usage***.


## Import

```typescript
import { EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';
```

## Basic Usage

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-basic" width="100%" height="500px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">

```html
<div class="showcase-container flex-column">
    <div class="row-showcase justify-center">
        <div class="emoji-picker-container">
            <ch-emoji-picker [width]="350" [height]="350" [autofocus]="false" (onEmojiSelected)="handleEmojiSelected($event)"></ch-emoji-picker>
        </div>
    </div>
    <div class="row-showcase justify-center">
        <ch-text-box [(value)]="inputValue" [width]="350" placeholder="Pick an emoji"></ch-text-box>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { EmojiPickerComponent, EmojiSelectedEvent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';
import { TextBoxComponent } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';

@Component({
    selector: 'ch-emoji-picker-basic',
    standalone: true,
    imports: [CommonModule, EmojiPickerComponent, TextBoxComponent],
    templateUrl: './emoji-picker-basic.component.html',
    styleUrl: './emoji-picker-basic.component.scss'
})
export class EmojiPickerBasicComponent {
    inputValue = model<string>('');

    handleEmojiSelected = (evt: EmojiSelectedEvent) => {
        this.inputValue.update((previous) => (previous += evt.emoji.value));
    };
}
```
</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.justify-center {
    justify-content: center;
}

.flex-column {
    flex-direction: column;
}

.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

```
  </TabItem>
</Tabs>

## Sizing
The emoji size can be customized using predefined options. The emojisize will be calculated with he specified size option and the width of the viewport.<br/><br/>*Note: Don't modify the emoji size through CSS, because this will cause unexpected behavior.*

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-sizes" width="100%" height="423px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" [emojiSize]="selectedSize()" [autofocus]="false"></ch-emoji-picker>
    </div>

    <div class="form">
        <select [(ngModel)]="selectedSize" class="select-box">
            <option *ngFor="let size of sizes" [value]="size">{{ size | titlecase }}</option>
        </select>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent, EmojiSizeOption } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@Component({
    selector: 'ch-emoji-picker-sizes',
    standalone: true,
    imports: [CommonModule, EmojiPickerComponent, FormsModule],
    templateUrl: './emoji-picker-sizes.component.html',
    styleUrl: './emoji-picker-sizes.component.scss'
})
export class EmojiPickerSizesComponent {
    sizes: EmojiSizeOption[] = ['xs', 'sm', 'default', 'lg', 'xl'];
    selectedSize = signal<EmojiSizeOption>('xl');
}
```
</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.justify-center {
    justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    margin-top: 1em;
}

.select-box {
    height: 30px;
    width: 80px;
}

```
  </TabItem>
</Tabs>

## Categories
The emoji picker supports customizable categories, respecting the order in the provided array, except for suggestions, which will always appear at the top if defined. Categories that are not included in the array will be excluded from both the picker and the search results.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-categories" width="100%" height="423px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" [emojiCategories]="emojiCategories" [autofocus]="false"></ch-emoji-picker>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmojiCategory, EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@Component({
    selector: 'ch-emoji-picker-categories',
    standalone: true,
    imports: [CommonModule, EmojiPickerComponent],
    templateUrl: './emoji-picker-categories.component.html',
    styleUrl: './emoji-picker-categories.component.scss'
})
export class EmojiPickerCategoriesComponent {
    emojiCategories: EmojiCategory[] = ['food-drink', 'animals-nature', 'travel-places', 'objects', 'activities', 'smileys-people'];
}
```
</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
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

## Category Bar Position
The category bar in the emoji picker can be positioned either at the top or bottom of the component, providing flexibility in the layout.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-bar-position" width="100%" height="423px"></ShowcaseCard>
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" categoryBarPosition="bottom" [autofocus]="false"></ch-emoji-picker>
    </div>
</div>
```

## Headerless
The emoji picker can be used without a header, which includes hiding the search bar and the global skintone swatch picker. This allows for a more compact display focused purely on emoji selection.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-headerless" width="100%" height="423px"></ShowcaseCard>
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" [searchEnabled]="false" skintoneSetting="individual" [autofocus]="false"></ch-emoji-picker>
    </div>
</div>
```

## Suggestions
The emoji picker can display suggestions based on recent or frequently used emojis. These suggestions are shown at the top of the picker and help users quickly access their most-used emojis.

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-suggestions" width="100%" height="423px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" [suggestionOptions]="suggestionOptions()" [autofocus]="false"></ch-emoji-picker>
    </div>

    <div class="form">
        <div class="form-item">
            <label for="mode">Mode:</label>

            <select id="mode" [(ngModel)]="selectedSuggestionMode">
                <option *ngFor="let mode of suggestionModes" [value]="mode">{{ mode | titlecase }}</option>
            </select>
        </div>
        <div class="form-item">
            <label for="limit-input">Limit:</label>
            <input id="limit-input" type="number" [(ngModel)]="limit" placeholder="Limit" />
        </div>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent, EmojiSuggestionMode, SuggestionConfig } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@Component({
    selector: 'ch-emoji-picker-suggestions',
    standalone: true,
    imports: [CommonModule, EmojiPickerComponent, FormsModule],
    templateUrl: './emoji-picker-suggestions.component.html',
    styleUrl: './emoji-picker-suggestions.component.scss'
})
export class EmojiPickerSuggestionsComponent {
    suggestionModes: EmojiSuggestionMode[] = ['recent', 'frequent'];
    selectedSuggestionMode = signal<EmojiSuggestionMode>('frequent');
    limit = signal<number>(10);

    suggestionOptions = computed((): SuggestionConfig => ({ mode: this.selectedSuggestionMode(), limitToShow: this.limit() }));
}
```
</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.justify-center {
    justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    margin-top: 1em;
}

.form-item {
    display: flex;
    align-items: center;
    gap: 0.5em;

    label {
        min-width: 50px;
    }
    input,
    select {
        width: 100px;
         height: 30px;
    }
}
```
  </TabItem>
</Tabs>

## Skintones
The emoji picker allows customization of skintone settings with the following options: `global`, `individual`, `both`, and `none`. When set to `individual` or `both`, users can select individual skintones by right-clicking on an emoji (desktop) or touch-holding (touch devices).

<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-skintone-settings" width="100%" height="423px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" [skintoneSetting]="selectedSetting()" [autofocus]="false"></ch-emoji-picker>
    </div>

    <div class="form">
        <select [(ngModel)]="selectedSetting" class="select-box">
            <option *ngFor="let setting of skintoneSettings" [value]="setting">{{ setting | titlecase }}</option>
        </select>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent, SkintoneSetting } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@Component({
    selector: 'ch-emoji-picker-skintone-settings',
    standalone: true,
    imports: [CommonModule, EmojiPickerComponent, FormsModule],
    templateUrl: './emoji-picker-skintone-settings.component.html',
    styleUrl: './emoji-picker-skintone-settings.component.scss'
})
export class EmojiPickerSkintoneSettingsComponent {
    skintoneSettings: SkintoneSetting[] = ['global', 'individual', 'both', 'none'];
    selectedSetting = signal<SkintoneSetting>('global');
}
```
</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.justify-center {
    justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    margin-top: 1em;
}

.select-box {
    height: 30px;
    width: 80px;
}

.form-item {
    display: flex;
    align-items: center;
    gap: 0.5em;
}
```
  </TabItem>
</Tabs>

## Custom Storage
The emoji picker supports custom storage options for recent and frequent emojis, as well as for global and individual skintones. This allows you to store data in a custom solution rather than using `localstorage`, which can be useful in environments like native mobile apps where an alternative storage mechanism is necessary.


<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-custom-storage" width="100%" height="423px"></ShowcaseCard>

<Tabs>
<TabItem value="html" label="HTML">
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker
            [width]="350"
            [height]="350"
            [storageOptions]="storageConfig()"
            [skintoneSetting]="skintoneSetting()"
            [autofocus]="false"
            (onEmojiSelected)="handleEmojiSelected($event)"
            (onGlobalSkintoneChanged)="handleGlobalSkintoneChanged($event)"
        ></ch-emoji-picker>
    </div>

    <div class="form">
        <label>
            <input type="radio" name="settingType" [(ngModel)]="skintoneSetting" value="global" />
            Global skintone
        </label>
        <label>
            <input type="radio" name="settingType" [(ngModel)]="skintoneSetting" value="individual" />
            Individual skintones
        </label>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent, EmojiSelectedEvent, EmojiSelectionSource, IndividualEmojiSkintone, Skintone, SkintoneSetting, StorageConfig } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';
import { CustomStorageService } from './custom-storage.service';

@Component({
    selector: 'ch-emoji-picker-custom-storage',
    standalone: true,
    imports: [CommonModule, EmojiPickerComponent, FormsModule],
    providers: [CustomStorageService],
    templateUrl: './emoji-picker-custom-storage.component.html',
    styleUrl: './emoji-picker-custom-storage.component.scss'
})
export class EmojiPickerCustomStorageComponent {
    private storageService = inject(CustomStorageService);
    suggestionEmojis: WritableSignal<string[]>;
    globalSkintone: WritableSignal<Skintone>;
    individualEmojiSkintones: WritableSignal<IndividualEmojiSkintone[]>;

    skintoneSetting = signal<SkintoneSetting>('individual');

    storageConfig = computed(
        (): StorageConfig => ({
            suggestionEmojis: { storage: 'custom', value: this.suggestionEmojis() },
            globalSkintone: { storage: 'custom', value: this.globalSkintone() },
            individualSkintones: { storage: 'custom', value: this.individualEmojiSkintones() }
        })
    );

    constructor() {
        this.suggestionEmojis = signal<string[]>(this.storageService.getCustomSuggestions());
        this.globalSkintone = signal<Skintone>(this.storageService.getGlobalSkintone());
        this.individualEmojiSkintones = signal<IndividualEmojiSkintone[]>(this.storageService.getIndividualEmojiSkintones());
    }

    handleEmojiSelected = (evt: EmojiSelectedEvent) => {
        this.suggestionEmojis.set(this.storageService.addEmojiToRecents(evt.emoji.id));

        if (evt.source === EmojiSelectionSource.EmojiSkintonePicker) {
            this.individualEmojiSkintones.set(this.storageService.addIndividualEmojiSkintone(evt.emoji));
        }
    };

    handleGlobalSkintoneChanged = (skintone: Skintone) => {
        this.globalSkintone.set(this.storageService.saveGlobalSkintone(skintone));
    };
}
```
</TabItem>
<TabItem value="service" label="SERVICE">
```typescript
import { Injectable } from '@angular/core';
import { Emoji, IndividualEmojiSkintone, Skintone } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

export const suggestionEmojis: string[] = ['heart-hands', 'pile-of-poo', 'clown-face', 'melting-face'];

export const globalSkintone: Skintone = 'light';

export const individualEmojiSkintones: IndividualEmojiSkintone[] = [
    {
        emojiId: 'heart-hands',
        emojiValue: '🫶🏽'
    },
    {
        emojiId: 'pinching-hand',
        emojiValue: '🤏🏽'
    },
    {
        emojiId: 'foot',
        emojiValue: '🦶🏽'
    },
    {
        emojiId: 'rightwards-hand',
        emojiValue: '🫱🏿'
    },
    {
        emojiId: 'raised-fist',
        emojiValue: '✊'
    }
];

@Injectable()
export class CustomStorageService {
    getCustomSuggestions = (): string[] => suggestionEmojis;

    getGlobalSkintone = (): Skintone => globalSkintone;

    getIndividualEmojiSkintones = (): IndividualEmojiSkintone[] => individualEmojiSkintones;

    addEmojiToRecents = (emojiId: string) => {
        const emojis = this.getCustomSuggestions();
        emojis.unshift(emojiId);
        const recents = [...new Set(emojis)];

        //SAVE TO YOUR OWN STORAGE HERE

        return recents;
    };

    addIndividualEmojiSkintone = (data: Emoji): IndividualEmojiSkintone[] => {
        const individualEmojiSkintones = this.getIndividualEmojiSkintones();
        //SAVE TO YOUR OWN STORAGE HERE

        return [...individualEmojiSkintones.filter((emoji) => emoji.emojiId !== data.id), { emojiId: data.id, emojiValue: data.value }];
    };

    saveGlobalSkintone = (skintone: Skintone) =>
        //SAVE TO YOUR OWN STORAGE HERE
        skintone;
}
```
</TabItem>
<TabItem value="css" label="SCSS">
```scss
.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
}

.row-showcase {
    display: flex;
    column-gap: 1em;
}

.justify-center {
    justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
}
```
  </TabItem>
</Tabs>

## Dialog integration

A common use case is to embed the emoji picker inside a dialog. it's important to call the `refreshViewport()` method whenever the dialog opens. This is necessary to prevent issues with the virtual scroller, which can cause incorrect navigation to categories if the dialog is reopened. The method ensures that the picker re-renders correctly.


<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-dialog" width="100%" height="450px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">
```html
<div [style.height.px]="450" class="showcase-container row-showcase justify-center">
    <div class="align-bottom">
        <ch-button label="Click me!" (onClick)="handleClick($event)"></ch-button>
    </div>
</div>

<ch-dialog cssClass="emoji-picker-dialog" [(visible)]="visible" backdropClass="cdk-overlay-transparent-backdrop" [target]="buttonElement()?.nativeElement" [positions]="dialogPositions" (onOpened)="handleOnOpened($event)">
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
    selector: 'ch-emoji-picker-dialog',
    standalone: true,
    imports: [CommonModule, DialogComponent, EmojiPickerComponent, ButtonComponent],
    templateUrl: './emoji-picker-dialog.component.html',
    styleUrl: './emoji-picker-dialog.component.scss'
})
export class EmojiPickerDialogComponent {
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

## Localization
 The emoji picker provides localization support for both **display text** and **filtering emojis**. It comes with built-in localization files, which you can easily use to switch between languages. Additionally, you have the flexibility to provide your own custom localization files or selectively overwrite emojis from the built-in files to better suit your application's needs. For more information on configuring localization and adding your own locale files, see [Localization section](/docs/localization).

*NOTE: By default, emojis are always filtered using both **English** and the **selected language**. If you prefer not to provide English keywords alongside the localized ones, you will need to unload the English locale. This ensures that only the keywords in the selected language are used for filtering.*




<ShowcaseCard  src="https://chitchat-showcase.netlify.app/emoji-picker-localization" width="100%" height="423px"></ShowcaseCard>
<Tabs>
<TabItem value="html" label="HTML">
```html
<div class="showcase-container row-showcase justify-center">
    <div class="emoji-picker-container">
        <ch-emoji-picker [width]="350" [height]="350" [autofocus]="false"></ch-emoji-picker>
    </div>
</div>
```
</TabItem>
<TabItem value="ts" label="TS">
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';
import { nlEmojiKeywordTranslations, nlTranslations, TranslationService } from '@chit-chat/ngx-emoji-picker/lib/localization';

@Component({
    selector: 'ch-emoji-picker-localization',
    standalone: true,
    imports: [EmojiPickerComponent],
    templateUrl: './emoji-picker-localization.component.html',
    styleUrl: './emoji-picker-localization.component.scss'
})
export class EmojiPickerLocalizationComponent implements OnInit {
    private translationService = inject(TranslationService);

    ngOnInit(): void {
        this.translationService.loadTranslations('nl', nlTranslations);
        this.translationService.loadEmojiKeywordTranslations('nl', nlEmojiKeywordTranslations);
        this.translationService.setLanguage('nl');
    }
}
```
</TabItem>
  <TabItem value="css" label="SCSS">
```scss
.emoji-picker-container {
    padding: 5px 3px 4px;
    background-color: var(--ch-emoji-picker-background);
}

.showcase-container {
    padding-block: 2em;
    display: flex;
    row-gap: 1.5em;
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

## Properties

| Property                 | Type                                                               | Description                                                                                             | Default            |
|--------------------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------------|
| `autofocus`              | `boolean`                        | Determines whether the search bar should automatically receive focus upon rendering.             | `true`        |
| `height`                 | `number`                                                          | Specifies the height of the emoji picker.                                                               | `450`              |
| `width`                  | `number`                                                          | Specifies the width of the emoji picker.                                                                | `400`              |
| `emojiSize`              | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl'`                        | Specifies the display size of the emojis.<br/>*Note: Avoid modifying the emoji size through CSS, as this can lead to unexpected behavior.*                                                               | `'default'`        |
| `searchEnabled`              | `boolean`                        | Specifies if the searchbar is visible.                                                               | `true`        |
| `suggestionOptions`      | [`SuggestionConfig`](#suggestionconfig)                            | Specifies the options for the emoji suggestions (e.g., recent or frequent emojis).                      | `{ mode: 'recent', limitToShow: 50 }` |
| `storageOptions`         | [`StorageConfig`](#storageconfig) \| `undefined`                                  | Specifies options for storing recent emojis and skintone preferences.                                   | `undefined`<br/>*This will automatically utilize local storage for all storage operations*       |
| `categoryBarPosition`    | `'top' \| 'bottom'`                                                | Specifies the location of the category bar in the emoji picker.                                         | `'top'`            |
| `scrollbarVisible`       | `boolean`                                                          | Determines whether the scrollbar should be visible.                                                     | `true`             |
| `emojiCategories`        | `Array<EmojiCategory>`                                             | Specifies the categories of emojis included in the picker. The order will be respected, except for suggestion. Suggestions will always be shown as first category when specified.                 | `['suggestions', 'smileys-people', 'animals-nature', 'food-drink', 'travel-places', 'objects', 'activities', 'symbols', 'flags']`|
| `skintoneSetting`        | `'global' \| 'individual' \| 'both' \| 'none'`                     | Specifies how skintone variations are handled in the emoji picker. Users can select an `individual` skintone by right-clicking on an emoji (desktop) or long-pressing it (touch devices), allowing for personalized skintone choices.                                      | `'both'`           |

### `SuggestionConfig`

| Property        | Type                                              | Description                                                    |
|-----------------|---------------------------------------------------|----------------------------------------------------------------|
| `mode`          | `'recent' \| 'frequent'`                          | Mode for displaying emoji suggestions.                         |
| `limitToShow`   | `number` \| `undefined`                                         | The number of suggestion emojis to show. Defaults to `50`                    |

### `StorageConfig`

| Property              | Type                                                                                           | Description                                                     |
|-----------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| `suggestionEmojis`    | [`StorageOptions<string[]>`](#storageoptionst)                                                   | Configuration for storing suggestion emojis where `string[]` is the array of unique identifiers of emojis.                    |
| `globalSkintone`      | [`StorageOptions<Skintone>`](#storageoptionst)  | Configuration for storing global skintone preference. `Skintone` can be one of these values `'default'` \| `'light'` \| `'medium-light'` \| `'medium'` \| `'medium-dark'` \| `'dark'`.           |
| `individualSkintones` | [`StorageOptions`](#storageoptionst)\<[`IndividualEmojiSkintone[]`](#individualemojiskintone)>     | Configuration for storing individual emoji skintones.           |
         

### `StorageOptions<T>`

| Property          | Type                  | Description                                                    |
|-------------------|-----------------------|----------------------------------------------------------------|
| `storage`         | `'localstorage' \| 'custom'` | Storage mechanism, either local or custom.                     |
| `allowAutoSave`   | `boolean`             | Indicates if the auto-save feature is enabled. This only applies when `storage` is set to `localstorage`.                  |
| `value`           | `T`                   | The stored value. This only applies  if `storage` is set to `custom`.               |

### `IndividualEmojiSkintone`

| Property   | Type      | Description                                          |
|------------|-----------|------------------------------------------------------|
| `emojiId`  | `string`  | The unique identifier of the emoji.                  |
| `emojiValue` | `string`  | The value representing the emoji with applied skintone. |

## Events

| Event                    | Type                                   | Description                                                                 |
|--------------------------|----------------------------------------|-----------------------------------------------------------------------------|
| `onEmojiSelected`         | `EmojiSelectedEvent`                   | Callback fired when an emoji is selected. The emoji object is passed.       |
| `onGlobalSkintoneChanged` | `Skintone`                             | Callback fired when the global skintone is changed.                         |

## Methods

| Method                                  | Description                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| `getNativeElement()`                    | Returns the native `HTMLElement` of the emoji picker component.             |
| `navigateToStart()`                     | Navigates to the first emoji in the first category.                         |
| `navigateToCategory(category)`          | Navigates to the first emoji in a specific emoji category in the viewport.                     |
| `reset()`                               | Resets the emoji picker, clearing the search and navigating to the start.     |
| `refreshViewport()`                     | Updates the emoji viewport dimensions and forces re-rendering. <br/>*Note: This method should be invoked when displaying the emoji picker inside a dialog, especially when the dialog becomes visible.*             |
| `selectEmoji(emoji: Emoji)`             | Selects a specific emoji and updates the storage if `allowUpdate` is set to true in [StorageOptions](#storageoptionst).                |
| `saveSuggestionEmojiInStorage(emojiId)` | Saves an emoji to the `recent` and `frequent` suggestion list in local storage.  |



## CSS Custom Properties

| Property                                      | Description                                                                 |
|-----------------------------------------------|-----------------------------------------------------------------------------|
| `--ch-primary-color`                          | Primary color of the emoji picker.                                        |
| `--ch-text-color`                          | Text color of the emoji picker.                                        |
| `--ch-font-family`                          | Font family used in the emoji picker.                                        |
| `--ch-hover-color`                          | Color used when elements are hovered in emoji picker.                                        |
| `--ch-emoji-font-family`                          | Font family used for emojis in the emoji picker.                                        |
| `--ch-emoji-picker-background`                | Background color of the emoji picker picker.                                        |
| `--ch-emoji-picker-tab-bar-background`        | Background color of the emoji picker's tab bar.                              |
| `--ch-skintone-picker-background`             | Background color of the emoji skintone dialog.                                     |
| `--ch-emoji-variant-indicator-color`          | Color of the emoji variant indicator.                                        |
| `--ch-emoji-variant-indicator-color-hover`    | Color of the emoji variant indicator when hovered.                           |
| `--ch-color-scroll`                           | Color of the scrollbar                           |
| `--ch-color-scroll-hover`                     | Color of the scrollbar when hovering over the scrollbar                   |

