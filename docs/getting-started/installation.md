---
id: installation
title: Installation
sidebar_label: Installation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The library is a comprehensive Angular library designed to provide everything you need to implement emoji pickers in your project. It offers fully customizable components that work seamlessly on both mobile and web platforms.


## Before installing
Ensure that your project's Angular versions are compatible with the emoji picker library by checking the[**version compatibility**](/docs/version-compatibility) guidelines.

Since the emoji picker relies on the **Angular CDK**, make sure it's installed in your project. If it's not, you can add it by running the following command:
<Tabs>
<TabItem value="ng" label="NG">
```bash
ng add @angular/cdk
```
</TabItem>
<TabItem value="npm" label="NPM">
```bash
npm i @angular/cdk --save
```
</TabItem>
<TabItem value="yarn" label="YARN">
```bash
yarn add @angular/cdk
```
</TabItem>
</Tabs>


## Download

The emoji picker is available for download on [npm](https://www.npmjs.com/package/@chit-chat/ngx-emoji-picker).

<Tabs>
<TabItem value="npm" label="NPM">
```bash
npm i @chit-chat/ngx-emoji-picker
```
</TabItem>
<TabItem value="yarn" label="YARN">
```bash
yarn add @chit-chat/ngx-emoji-picker
```
</TabItem>
</Tabs>


## Providing the Library in Your Project

Providing the emoji picker library ensures that important classes are added during app initialization, which is particularly necessary for mobile devices to ensure optimal functionality.


### For Standalone Components

In your `app.config.ts` or `main.ts`, add the following:

```typescript
import { provideEmojiPicker } from '@chit-chat/ngx-emoji-picker/lib/providers';

export const providers = [
    ...
    provideEmojiPicker(),
];
```


### For Module-based Projects

In your `app.module.ts`, add the following:
```typescript
import { EmojiPickerModule } from '@chit-chat/ngx-emoji-picker/lib/providers';

@NgModule({
  imports: [
    ...
    EmojiPickerModule,
  ],
  ...
})
export class AppModule {}
```

## Styles

The core styles of the components are provided as necessary CSS files to ensure consistent design. You can include these styles in your Angular project as follows:

### With angular.json
```json
...
"styles": [
    "node_modules/@chit-chat/ngx-emoji-picker/styles/core.css",
    ...
]
```

### With styles.css
```json
@import '@chit-chat/ngx-emoji-picker/styles/core.css';
```

For more information on styling and how to customize SCSS variables like colors and fonts, please refer to the [**Styling section**](/docs/styling).

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.


### Standalone
```typescript
import { EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@Component({
  ...
  standalone: true,
  imports: [EmojiPickerComponent],
})
```

### For Module-based Projects
```typescript
import { EmojiPickerComponent } from '@chit-chat/ngx-emoji-picker/lib/components/emoji-picker';

@NgModule({
  ...
  imports: [EmojiPickerComponent],
})
```

