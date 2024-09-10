---
id: emoji-picker
title: Emoji Picker
sidebar_label: Emoji Picker
---

import ShowcaseCard from '@site/src/components/ShowcaseCard';

The EmojiPicker component is a highly customizable tool that allows users to select emojis, filter them, and adjust settings like skintone. This component supports multiple categories, custom emoji sizes, and skintone selection. It also provides features for emoji suggestions based on recent or frequent usage.

## Properties
| Property               | Type                                                        | Description                                                                                                    | Default         |
|------------------------|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|-----------------|
| `height`               | `number` \| `string`                                        | Specifies the height of the emoji picker.                                                                      | `450`           |
| `width`                | `number` \| `string`                                        | Specifies the width of the emoji picker.                                                                       | `400`           |
| `emojiSize`            | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl'`                 | Specifies the display size of the emojis.                                                                      | `'default'`     |
| `suggestionMode`       | `'recent' \| 'frequent'`                                    | Specifies the mode for displaying emoji suggestions.                                                           | `'recent'`      |
| `categoryBarPosition`  | `'top' \| 'bottom'`                                         | Specifies the location of the category bar in the picker.                                                      | `'top'`         |
| `scrollbarVisible`     | `boolean`                                                   | Specifies if the scrollbar is visible in the picker.                                                           | `true`          |
| `emojiCategories`      | `['suggestions', 'smileys-people', 'animals-nature', 'food-drink', 'travel-places', 'objects', 'activities', 'symbols', 'flags']` | Specifies the categories to be included in the emoji picker.                                                   | `[...]`         |
| `suggestionLimit`      | `number`                                                    | Specifies the maximum number of suggestion emojis shown.                                                       | `50`            |
| `autoUpdateSuggestions`| `boolean`                                                   | Specifies if emoji suggestions will be automatically updated in storage.                                       | `true`          |
| `skintoneSetting`      | `'global' \| 'individual' \| 'both' \| 'none'`              | Specifies how skintones are handled within the picker.                                                         | `'both'`        |

## Events
| Event               | Type              | Description                                                                    |
|---------------------|-------------------|--------------------------------------------------------------------------------|
| `onEmojiSelected`    | `Emoji`           | Emits the selected emoji when a user clicks on it.                             |

## Methods
| Method              | Description                                                                                         |
|---------------------|-----------------------------------------------------------------------------------------------------|
| `addEmojiToSuggestions(emojiId: string)`  | Adds an emoji to the suggestions list and increases its usage frequency.         |
| `selectEmoji(emoji: Emoji)`               | Selects an emoji manually and updates the suggestions list if `autoUpdateSuggestions` is enabled.  |
| `navigateToStart()`               | Navigate to the first emoji of the first category of the emoji picker.  |
| `navigateToCategory(category: EmojiCategory)`               | Navigate to the first emoji of the desired category of the emoji picker.  |
| `refreshViewport()`               | Update the viewport dimensions and re-render.  |
| `reset()`               |      Reset the emoji picker by clearing the filter and navigating to first category|

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
| `--ch-color-scroll`                           | color of the scrollbar                           |
| `--ch-color-scroll-hover`                     | Color of the scrollbar when hovering over the scrollbar                   |

