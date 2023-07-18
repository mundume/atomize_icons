## [Atomize Icons](https://www.npmjs.com/package/atomize_icons)

Icons in your React projects easily with `atomize_icons`, From the most popular open source figma design system [Atomize Design System](<https://www.figma.com/file/3RuiLTOo9hbOoir4Pih85Z/Atomize-3.0-(Community)?type=design&node-id=1033-19838&mode=design&t=5j77olwtcDiaDrBX-0>)

## Installation (for standard react modern project)

```bash
yarn add atomize_icons

# or

npm i atomize_icons
```

example usage

```jsx/tsx
import { About } from "atomize_icons";

function App() {
  return (
    <h1>
      What are you talking  <About /> ?
    </h1>
  );
}
```

# CSS SUPPORT

> All css properties except properties that may lead to increase in Icon size like `font-size` etc
> The reason why we chose not to include sizing is to keep the styles uniform across the whole design system
>
> > we are planning to implement the atomize design system for react next

## ie using the react `style prop`

```
import { About } from "atomize_icons";
function App() {
  return (
   <About  style={{background: 'red', margin:'2px;}}/>
  );
}
```

## Using Vanilla css/sass/scss

```
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

```
import { About } from "atomize_icons";
function App() {
  return (
   <About className='text-yellow-400'/>
  );
}

```

> ## Limitations
>
> There are some icons that are not rendering well due to limitations with SVGO and figma exports
> The icons include

```

 <SelectWalletMetamask />
 <SelectWalletWalletConnect />
<SelectWalletVenly />
<SelectWalletBitski />
<SelectWalletCoinbase />
<SelectNetworkEthereum />
<SelectNetworkOptimism/>
<SelectNetworkGnosis />
<SelectTokenWbtc />
<SelectTokenUsdt />
<SelectTokenUsdc />
<SelectTokenAda />
<SelectTokenMatic />
<SelectTokenArbitrum />
<SelectTokenWeth />
<SelectToken1inch />
<SelectTokenUni />
<SelectTokenTel />
<SelectTokenLink />
<SelectTokenEth />
<SelectTokenDai />
<SelectTokenBusd />
<SelectTokenAave />
<IconSuccess />
<IconFail />

```

> ## Were Working Hard to add the paths manually and we will make the icons available soon
