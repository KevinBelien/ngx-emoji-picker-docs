---
id: localization
title: Localization
sidebar_label: Localization
sidebar_position: 5
---

Localization in the library allows you to translate the picker interface and filter emojis by different languages. This guide will walk you through how to load and manage localization files, including built-in and custom translations.

*NOTE: By default, emojis are always filtered using both **English** and the **selected language**. If you prefer not to provide English keywords alongside the localized ones, you will need to [unload](/docs/localization#unloading-translations) the English locale. This ensures that only the keywords in the selected language are used for filtering.*

## Supported languages
The library supports a wide range of languages for both general translations and emoji keyword filtering. The currently supported languages are: 

- `AR` - Arabic
- `CA` - Catalan
- `CS` - Czech
- `DE` - German
- `EL` - Greek
- `EN` - English
- `ES` - Spanish
- `FA` - Persian
- `FI` - Finnish
- `FR` - French
- `HU` - Hungarian
- `IT` - Italian
- `JA` - Japanese
- `LT` - Lithuanian
- `LV` - Latvian
- `NB` - Norwegian Bokmål
- `NL` - Dutch
- `PL` - Polish
- `PT` - Portuguese
- `RO` - Romanian
- `RU` - Russian
- `SL` - Slovenian
- `SV` - Swedish
- `TR` - Turkish
- `VI` - Vietnamese
- `ZH-TW` - Traditional Chinese
- `ZH` - Simplified Chinese


English is the default language and is loaded automatically when the library initializes.

## Loading Translations
To display localized text and filter emojis, you need to load the appropriate translation files into the app using the `TranslationService`. This service allows you to load both built-in translations and custom translation files.<br/><br/>*NOTE: It's recommended to load the messages as soon as you can.*

### Loading Built In Translations
Here's an example of how to load the built-in Dutch (nl) translations and emoji keyword translations:

```ts
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';
import { nlEmojiKeywordTranslations, nlTranslations, TranslationService } from '@chit-chat/ngx-emoji-picker/lib/localization';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmojiPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private translationService = inject(TranslationService);

  constructor() {
    // Load translations for Dutch
    this.translationService.loadTranslations('nl', nlTranslations);

    // Load emoji keyword translations for Dutch
    this.translationService.loadEmojiKeywordTranslations('nl', nlEmojiKeywordTranslations);

    // Set the language to Dutch
    this.translationService.setLanguage('nl');
  }
}
```
In this example, we load both the regular nlTranslations and the emoji keyword translations nlEmojiKeywordTranslations. After loading, we switch the language to Dutch.

### Loading Custom Translations
If you want to load custom translations (for example, from a JSON file you created), you can do so using the same service. **Only the matching keys in the custom translations will overwrite the built-in translations**—the rest of the built-in translations will remain unchanged.<br/><br/>
The structure of the json files are available on [**`GitHub`**](https://github.com/KevinBelien/ngx-emoji-picker/tree/master/projects/emoji-picker-lib/lib/localization/locales)

```typescript
import { TranslationService } from '@chit-chat/ngx-emoji-picker/lib/localization';
import customTranslations from './path-to-custom-translations.json';
import customEmojiKeywordTranslations from './path-to-custom-emoji-keyword-translations.json';

constructor(private translationService: TranslationService) {
  // Load custom translations
  this.translationService.loadTranslations('nl', customTranslations);

  // Load custom emoji keyword translations
  this.translationService.loadEmojiKeywordTranslations('nl', customEmojiKeywordTranslations);

  // Set the language to Dutch
  this.translationService.setLanguage('nl');
}
```

### Loading Built-in and Custom Translations
You can also load the built-in translations first and then load custom translations to overwrite specific values:

```typescript
import { TranslationService, nlTranslations } from '@chit-chat/ngx-emoji-picker/lib/localization';
import customTranslations from './path-to-custom-translations.json';

constructor(private translationService: TranslationService) {
  // Load built-in translations
  this.translationService.loadTranslations('nl', nlTranslations);

  // Load custom translations to overwrite certain keys
  this.translationService.loadTranslations('nl', customTranslations);

  // Set the language
  this.translationService.setLanguage('nl');
}
```
In this case, any keys from the custom translations will overwrite the corresponding values from the built-in files.

## Unloading Translations
For better memory efficiency, you may want to unload specific translation files, especially the large emoji keyword files. By default, English is always loaded and used for filtering alongside the selected language. However, if you don't need English after switching to another language, you can easily unload it to free up memory.

### Unloading General Translations
```typescript
this.translationService.unloadTranslations('en');
```

### Unloading Emoji Keyword Translations
```typescript
this.translationService.unloadEmojiKeywordTranslations('en');
```
## Links to Built-in Locale Files
Here are some links to the built-in locale files if you want to see how they are structured:

- [General Localization File (English)](https://github.com/KevinBelien/ngx-emoji-picker/blob/master/projects/emoji-picker-lib/lib/localization/locales/en.json).
- [Emoji Keyword Files (English)](https://github.com/KevinBelien/ngx-emoji-picker/blob/master/projects/emoji-picker-lib/lib/localization/locales/en-emoji-keywords.json)
