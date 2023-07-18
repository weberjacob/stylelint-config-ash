"use strict"

module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-order",
    "stylelint-scss",
  ],
  "rules": {
    "at-rule-disallowed-list": [
      "debug",
    ],
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "extends",
        "ignores",
        "mixin",
        "function",
        "include",
        "if",
        "each",
        "else",
        "warn",
        "return",
        "error",
        "extend",
        "for",
        "use",
        "forward",
      ]
    }],
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested",
        ],
        "ignore": [
          "after-comment",
          "blockless-after-blockless"
        ],
        "ignoreAtRules": [
          "extends",
          "ignores",
          "mixin",
          "function",
          "include",
          "if",
          "each",
          "else",
          "warn",
          "return",
          "error",
          "extend",
        ]
      }
    ],
    "block-no-empty": true,
    "color-no-hex": true,
    "color-named": ["never", {
      "message": "Avoid using color literals."
    }],
    "declaration-block-trailing-semicolon": "always",
    "declaration-empty-line-before": [
      "never",
    ],
    "declaration-no-important": [true, {
      "message": "There's an !important tag. Is that supposed to be there?"
    }],
    "declaration-property-value-disallowed-list": [{
      '/^border/': ['none']
    }, { severity: 'warning' }],
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": ["always",
      {
        "message": "URLs should be wrapped in quotes",
        "severity": 'warning',
      }
    ],
    "indentation": [2,
      {
        "severity": 'warning',
      }
    ],
    "length-zero-no-unit": [true, {
      "message": "A length set to 0 does not need a unit."
    }],
    "max-nesting-depth": 8,
    "no-descending-specificity": null,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "property-no-vendor-prefix": [true,
      {
        "severity": 'warning',
      }
    ],
    "rule-empty-line-before": [
      "always",
      {
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "selector-class-pattern": /^([a-zA-Z0-9_-]+-?)+$/,
    "selector-id-pattern": /^([a-zA-Z0-9_]+-?)+$/,
    "selector-max-id": [0, {
      "message": "There's an ID being used. Is that supposed to be there?"
    }],
    "selector-no-qualifying-type": [true,
      {
        "ignore": [
          "attribute",
          "class",
        ]
      }
    ],
    "shorthand-property-no-redundant-values": [true,
      {
        "severity": 'warning',
      }
    ],
    "selector-pseudo-element-colon-notation": "single",
    "string-quotes": ["single", {
      "message": "Single quotes should be used."
    }],
    "value-keyword-case": ["lower",
      {
        "ignoreKeywords": [
          "Arial",
          "Helvetica",
          "Times",
          "Times New Roman",
          "Roboto"
        ]
      },
      {
        "message": "Keywords should be lowercase."
      }],
    "unit-allowed-list": [
      "px",
      "%",
      "em",
      "fr",
      "rem",
      "s",
      "ms",
      "deg",
      "vw",
      "vh",
    ],
    "order/order": [
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
        parameter: 'breakpoint',
      },
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/dollar-variable-pattern": /^[a-z\-]+$/,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-function-pattern": /^[a-z\-]+$/,
    "scss/at-mixin-pattern": /^[a-z\-]+$/,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/percent-placeholder-pattern": /^([a-z0-9]+-?)+$/,
  }
}