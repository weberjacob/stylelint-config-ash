# stylelint-config-ash
<img src="https://badgen.net/badge/version/1.0-master/cyan?icon=github" alt="Version: 1.0-master"/>

### What is it?

Extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) and generates an opinionated set of rules for Stylelint configuration.

The individual rules can be see in the [config itself](./index.js).

### Why we use it?
The use of this is to keep a consistent set of SCSS/CSS style rules in place and keep code clean and hopefully error free.

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