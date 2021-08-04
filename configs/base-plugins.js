'use strict';

module.exports = {
    plugins: ['unicorn', 'promise', 'import', 'eslint-comments', 'no-secrets', 'optimize-regex', 'array-func'],
    rules: {
        'no-secrets/no-secrets': ['error', { tolerance: 5 }],

        'optimize-regex/optimize-regex': 'warn',

        'promise/avoid-new': 'off',
        'promise/no-nesting': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': 'error',
        'promise/no-native': 'off',
        'promise/prefer-await-to-callbacks': 'off',
        'promise/catch-or-return': 'error',
        'promise/always-return': 'off',
        'promise/param-names': 'error',
        'promise/no-return-wrap': [
            'error',
            {
                allowReject: true
            }
        ],
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',
        'promise/prefer-await-to-then': 'error',

        'eslint-comments/disable-enable-pair': [
            'error',
            {
                allowWholeFile: true
            }
        ],
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/no-restricted-disable': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'eslint-comments/no-use': 'off',
        'eslint-comments/require-description': 'off',

        'import/imports-first': 'off',
        'import/no-deprecated': 'off',
        'import/exports-last': 'off',
        'import/dynamic-import-chunkname': 'off',
        'import/unambiguous': 'off',
        'import/no-dynamic-require': 'warn',
        'import/no-named-export': 'off',
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': 'off',
        'import/no-nodejs-modules': 'off',
        'import/max-dependencies': ['warn', { max: 15 }],
        'import/first': 'off',
        'import/no-unused-modules': 'off',
        'import/no-anonymous-default-export': 'error',
        'import/no-named-default': 'off',
        'import/no-cycle': 'off',
        'import/no-relative-parent-imports': 'off',
        'import/group-exports': 'off',
        'import/no-internal-modules': 'off',
        'import/no-restricted-paths': 'off',
        'import/named': 'off',
        'import/no-namespace': 'off',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                json: 'always'
            }
        ],
        'import/namespace': [
            'error',
            {
                allowComputed: true
            }
        ],
        'import/no-absolute-path': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true
            }
        ],
        'import/no-amd': 'error',
        'import/no-commonjs': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/order': 'error',
        'import/no-unassigned-import': [
            'error',
            {
                allow: ['@babel/polyfill', '@babel/register', 'mocha']
            }
        ],
        'import/no-unresolved': [
            'error',
            {
                ignore: ['mocha', 'aws-lambda']
            }
        ],
        'import/no-relative-packages': 'off',
        'import/no-import-module-exports': 'off',

        'unicorn/string-content': 'off',
        'unicorn/regex-shorthand': 'off',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-set-has': 'error',
        'unicorn/prefer-string-replace-all': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-modern-dom-apis': 'off',
        'unicorn/no-null': 'off',
        'unicorn/catch-error-name': 'error',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/custom-error-definition': 'off',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/expiring-todo-comments': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-keyword-prefix': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unsafe-regex': 'off',
        'unicorn/no-unused-properties': 'off',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-dom-node-dataset': 'error',
        'unicorn/prefer-keyboard-event-key': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-dom-node-append': 'error',
        'unicorn/prefer-dom-node-remove': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-reflect-apply': 'error',
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/better-regex': 'off',
        'unicorn/throw-new-error': 'error',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/prefer-array-find': 'error',
        'unicorn/import-style': 'off',
        'unicorn/numeric-separators-style': 'error',
        'unicorn/prefer-math-trunc': 'error',
        'unicorn/prefer-ternary': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-default-parameters': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/empty-brace-spaces': 'off',
        'unicorn/prefer-date-now': 'error',
        'unicorn/consistent-destructuring': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-regexp-test': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-switch': 'off',
        'unicorn/no-document-cookie': 'off',
        'unicorn/require-array-join-separator': 'off',
        'unicorn/require-number-to-fixed-digits-argument': 'off',
        'unicorn/prefer-prototype-methods': 'off',
        'unicorn/prefer-object-has-own': 'off',
        'unicorn/no-array-method-this-argument': 'off',
        'unicorn/require-post-message-target-origin': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/prefer-object-from-entries': 'error',

        // enable in the future
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prefer-at': 'off',

        'array-func/from-map': 'error',
        'array-func/no-unnecessary-this-arg': 'error',
        'array-func/prefer-array-from': 'error',
        'array-func/avoid-reverse': 'error',
        'array-func/prefer-flat-map': 'error',
        'array-func/prefer-flat': 'error'
    }
};
