
module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines"
  ],
  "plugins":  [
    "@primer/stylelint-config/plugins/no-undefined-vars",
    "@primer/stylelint-config/plugins/no-unused-vars"
  ],
  "rules": {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "max-nesting-depth": null,
    "media-feature-name-no-unknown": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": null,
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "primer/no-undefined-vars": true,
    "primer/no-unused-vars": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": null,
    "scss/at-rule-no-unknown": true,
    "selector-attribute-quotes": null,
    "selector-max-compound-selectors": null,
    "selector-max-id": null,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
  }
};
