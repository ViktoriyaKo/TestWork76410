/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'color-function-alias-notation': null,
  },
};
