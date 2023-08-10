

const KEY = "fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N";
const URL =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N&base_currency=USD&currencies=CNY";


  const currencies = [
  { code: "AU AUD - Australian Dollar" },
  { code: "🇧🇬 BGN - Bulgarian Lev" },
  { code: "🇧🇷 BRL - Brazilian Real" },
  { code: "🇨🇦 CAD - Canadian Dollar" },
  { code: "🇨🇭 CHF - Swiss Franc" },
  { code: "🇨🇳 CNY - Chinese Yuan Renminbi" },
  { code: "🇨🇿 CZK - Czech Koruna" },
  { code: "🇩🇰 DKK - Danish Krone" },
  { code: "🇪🇺 EUR - Euro" },
  { code: "🇬🇧 GBP - Great British Pound" },
  { code: "🇭🇰 HKD - Hong Kong Dollar" },
  { code: "🇭🇷 HRK - Croatian Kuna" },
  { code: "🇭🇺 HUF - Hungarian Forint" },
  { code: "🇮🇩 IDR - Indonesian Rupiah" },
  { code: "🇮🇱 ILS - Israeli Shekel" },
  { code: "🇮🇳 INR - Indian Rupee" },
  { code: "🇮🇸 ISK - Icelandic Krona" },
  { code: "🇯🇵 JPY - Japanese Yen" },
  { code: "🇰🇷 KRW - South Korean Won" },
  { code: "🇲🇽 MXN - Mexican Peso" },
  { code: "🇲🇾 MYR - Malaysian Ringgit" },
  { code: "🇳🇴 NOK - Norwegian Krone" },
  { code: "🇳🇿 NZD - New Zealand Dollar" },
  { code: "🇵🇭 PHP - Philippine Peso" },
  { code: "🇵🇱 PLN - Polish Zloty" },
  { code: "🇷🇴 RON - Romanian Leu" },
  { code: "🇷🇺 RUB - Russian Ruble" },
  { code: "🇸🇪 SEK - Swedish Krona" },
  { code: "🇸🇬 SGD - Singapore Dollar" },
  { code: "🇹🇭 THB - Thai Baht" },
  { code: "🇹🇷 TRY - Turkish Lira" },
  { code: "🇺🇸 USD - United States Dollar" },
  { code: "🇿🇦 ZAR - South African Rand" },

]

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
