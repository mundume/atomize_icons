## [Atomize Icons](https://www.npmjs.com/package/atomize_icons)

> `atomize_icons` is only available for react right now.We'll be bringing `atomize_icons` to `vanilla js` and other frameworks soon

Icons in your React projects easily with `atomize_icons`, From the most popular open source figma design system [Atomize Design System](<https://www.figma.com/file/3RuiLTOo9hbOoir4Pih85Z/Atomize-3.0-(Community)?type=design&node-id=1033-19838&mode=design&t=5j77olwtcDiaDrBX-0>)

## Installation (for standard react modern project)

```bash
yarn add atomize_icons

# or

npm i atomize_icons
```

example usage

```jsx
import { About } from "atomize_icons";

function App() {
  return (
    <h1>
      What are you talking <About /> ?
    </h1>
  );
}
```

# CSS SUPPORT

> All css properties are supported by default except properties that may lead to increase in Icon size like `font-size` etc but you can use `scale` to resize the icons
> The reason why we chose not to include sizing is to keep the styles uniform across the whole design system
>
> > we are planning to implement the atomize design system for react next

## ie using the react `style prop`

```jsx
import { About } from "atomize_icons";

function App() {
  return (
    <h1>
      <About style={{ color: "red" }} />
    </h1>
  );
}
```

## Using Vanilla css/sass/scss

```jsx
src/index.css
.style: {
color:red;
}

import { About } from "atomize_icons";
function App() {
  return (
   <About className='style'/>
  );
}

```

## Using Tailwind CSS

> To use tailwind-css you must configure tailwindcss with react [here](https://tailwindcss.com/docs/guides/create-react-app)

```jsx
import { About } from "atomize_icons";
function App() {
  return <About className="text-yellow-400" />;
}
```
