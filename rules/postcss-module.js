// eslint-plugin-postcss-module: https://github.com/atfzl/eslint-plugin-css-modules

'use strict';

module.exports = {
    'rules': {
        // Alerts whenever a CSS class is not being used
        'postcss-modules/no-unused-class': 'warn',
        // Alerts when using a CSS class that is not defined
        'postcss-modules/no-undef-class': 'error',

    },
};
