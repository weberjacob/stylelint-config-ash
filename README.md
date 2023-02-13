# stylelint-config-ash
<img src="https://badgen.net/badge/version/3.0.0/cyan?icon=github" alt="Version: 3.0.0"/>

### What is it?

Extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) and generates an opinionated set of rules for Stylelint configuration.

The individual rules can be seen in the [config itself](./index.js).

## Install
```
npm install --save-dev stylelint-config-ash
```

## Usage
Update your [stylelint configuration](https://stylelint.io/user-guide/configuration) to extend `stylelint-config-ash`.

```
module.exports = {
  extends: "stylelint-config-ash"
}
```