# stylelint-config-ash

### What it is

Extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) and generates an opinionated set of rules for Stylelint configuration.

The individual rules can be see in the [config itself](./index.js).

## Install
```
npm install --save-dev https://github.com/weberjacob/stylelint-config-ash
```

## Usage
Update your [stylelint configuration](https://stylelint.io/user-guide/configuration) to extend `stylelint-config-ash`.

```
module.exports = {
  extends: "stylelint-config-ash"
}
```