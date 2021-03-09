# stylelint-config-ash
<img src="https://badgen.net/badge/version/2.0.0-/cyan?icon=github" alt="Version: 2.0.0"/>

### What is it?

Extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) and generates an opinionated set of rules for Stylelint configuration.

The individual rules can be seen in the [config itself](./index.js).

## Install
```
npm install --save-dev https://github.com/weberjacob/stylelint-config-ash#2.0.0
```

## Usage
Update your [stylelint configuration](https://stylelint.io/user-guide/configuration) to extend `stylelint-config-ash`.

```
module.exports = {
  extends: "stylelint-config-ash"
}
```