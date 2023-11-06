'use strict';

module.exports = {
    reportUnusedDisableDirectives: true,
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'script',
        ecmaFeatures: {
            jsx: false,
            globalReturn: false,
            impliedStrict: false
        }
    },
    env: {
        builtin: true,
        es2021: true
    },
    plugins: ['@stylistic/js'],
    rules: {
        'array-callback-return': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-continue': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': [
            'error',
            {
                allowElseIf: false
            }
        ],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-character-class': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-empty-static-block': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-multi-str': 'error',
        'no-global-assign': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-object-constructor': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                props: true
            }
        ],
        'no-plusplus': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': [
            'error',
            {
                builtinGlobals: true
            }
        ],
        'no-regex-spaces': 'error',
        'no-restricted-syntax': 'off',
        'no-return-assign': ['error', 'always'],
        'no-self-assign': [
            'error',
            {
                props: true
            }
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                builtinGlobals: true
            }
        ],
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-undef': [
            'error',
            {
                typeof: true
            }
        ],
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-unexpected-multiline': 'error',
        'no-underscore-dangle': 'off',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_$',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_$'
            }
        ],
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-void': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'all'
            }
        ],
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'no-var': 'error',
        'no-warning-comments': [
            'warn',
            {
                terms: ['todo', 'fixme', 'wtf', 'falls through', 'istanbul'],
                location: 'anywhere'
            }
        ],
        'no-with': 'error',
        'no-magic-numbers': 'off',
        'arrow-body-style': 'off',
        'accessor-pairs': [
            'error',
            {
                enforceForClassMembers: true
            }
        ],
        'block-scoped-var': 'off',
        camelcase: 'off',
        complexity: ['warn', { max: 6 }],
        'consistent-return': 'error',
        'consistent-this': ['error', 'self'],
        'constructor-super': 'error',
        curly: ['error', 'all'],
        'default-case': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'func-names': 'off',
        'func-style': 'off',
        'guard-for-in': 'error',
        'id-length': 'off',
        'init-declarations': 'off',
        'max-depth': ['warn', { max: 5 }],
        'max-lines': 'off',
        'max-nested-callbacks': ['warn', { max: 6 }],
        'max-params': ['warn', { max: 4 }],
        'max-statements': ['warn', 13],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true
            }
        ],
        'object-shorthand': ['error', 'always'],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true
            }
        ],
        'prefer-rest-params': 'error',
        radix: 'error',
        'id-match': 'off',
        'require-yield': 'error',
        'sort-vars': 'off',
        'sort-imports': 'off',
        strict: ['error', 'safe'],
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'vars-on-top': 'error',
        yoda: ['error', 'never'],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'func-name-matching': 'off',
        'line-comment-position': 'off',
        'no-await-in-loop': 'off',
        'no-compare-neg-zero': 'error',
        'no-multi-assign': 'error',
        'no-restricted-properties': 'off',
        'no-template-curly-in-string': 'error',
        'no-unsafe-negation': 'error',
        'no-useless-return': 'error',
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true
                },
                AssignmentExpression: {
                    array: false,
                    object: false
                }
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: false
            }
        ],
        'require-await': 'off',
        'sort-keys': 'off',
        'symbol-description': 'error',
        'for-direction': 'off',
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        'multiline-comment-style': 'off',
        'max-classes-per-file': 'off',
        'max-lines-per-function': 'off',
        'prefer-object-spread': 'error',
        'no-async-promise-executor': 'error',
        'no-misleading-character-class': 'error',
        'default-param-last': 'error',
        'prefer-regex-literals': 'error',
        'require-unicode-regexp': 'off',
        'no-useless-catch': 'error',
        'prefer-named-capture-group': 'error',
        'no-import-assign': 'error',
        'require-atomic-updates': 'off',

        'no-restricted-imports': 'off',

        'no-alert': 'off',
        'no-script-url': 'off',
        'no-restricted-globals': 'off',

        'grouped-accessor-pairs': 'off',
        'no-constructor-return': 'error',
        'no-dupe-else-if': 'error',
        'no-setter-return': 'error',
        'prefer-exponentiation-operator': 'error',

        'default-case-last': 'error',
        'no-restricted-exports': 'off',
        'no-useless-backreference': 'error',
        'id-denylist': 'off',
        'no-loss-of-precision': 'off',
        'no-promise-executor-return': 'error',
        'no-unreachable-loop': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-unused-private-class-members': 'error',
        'no-constant-binary-expression': 'error',
        'logical-assignment-operators': ['error', 'never'],

        // enable in the future (ES2022)
        'prefer-object-has-own': 'off',

        '@stylistic/js/no-confusing-arrow': 'error',
        '@stylistic/js/no-extra-parens': 'error',
        '@stylistic/js/no-extra-semi': 'error',
        '@stylistic/js/no-floating-decimal': 'error',
        '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/js/linebreak-style': ['error', 'unix'],
        '@stylistic/js/no-multi-spaces': 'error',
        '@stylistic/js/no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        '@stylistic/js/no-tabs': 'error',
        '@stylistic/js/no-trailing-spaces': 'error',
        '@stylistic/js/no-whitespace-before-property': 'error',
        '@stylistic/js/no-mixed-operators': 'off',
        '@stylistic/js/array-bracket-spacing': ['error', 'never'],
        '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/js/array-element-newline': ['error', 'consistent'],
        '@stylistic/js/arrow-parens': ['error', 'always'],
        '@stylistic/js/arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        '@stylistic/js/block-spacing': 'off',
        '@stylistic/js/brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        '@stylistic/js/comma-dangle': ['error', 'never'],
        '@stylistic/js/comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        '@stylistic/js/comma-style': ['error', 'last'],
        '@stylistic/js/computed-property-spacing': [
            'error',
            'never',
            {
                enforceForClassMembers: true
            }
        ],
        '@stylistic/js/generator-star-spacing': ['error', { before: false, after: true }],
        '@stylistic/js/dot-location': ['error', 'property'],
        '@stylistic/js/eol-last': 'error',
        '@stylistic/js/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                MemberExpression: 1
            }
        ],
        '@stylistic/js/jsx-quotes': 'off',
        '@stylistic/js/key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        '@stylistic/js/lines-around-comment': 'off',
        '@stylistic/js/multiline-ternary': 'off',
        '@stylistic/js/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/js/new-parens': 'error',
        '@stylistic/js/newline-per-chained-call': 'off',
        '@stylistic/js/object-curly-newline': 'off',
        '@stylistic/js/object-curly-spacing': ['error', 'always'],
        '@stylistic/js/object-property-newline': 'off',
        '@stylistic/js/one-var-declaration-per-line': 'error',
        '@stylistic/js/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        '@stylistic/js/padded-blocks': [
            'error',
            'never',
            {
                allowSingleLineBlocks: false
            }
        ],
        '@stylistic/js/quote-props': ['error', 'as-needed'],
        '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
        '@stylistic/js/rest-spread-spacing': ['error', 'never'],
        '@stylistic/js/semi': ['error', 'always'],
        '@stylistic/js/semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        '@stylistic/js/keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        '@stylistic/js/space-before-blocks': ['error', 'always'],
        '@stylistic/js/space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        '@stylistic/js/space-in-parens': ['error', 'never'],
        '@stylistic/js/space-infix-ops': 'error',
        '@stylistic/js/space-unary-ops': 'error',
        '@stylistic/js/spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+', '*'],
                    markers: ['!', '/', '=>']
                },
                block: {
                    exceptions: ['-', '+', '*'],
                    markers: ['!', '*'],
                    balanced: true
                }
            }
        ],
        '@stylistic/js/template-curly-spacing': 'error',
        '@stylistic/js/wrap-iife': ['error', 'inside'],
        '@stylistic/js/wrap-regex': 'off',
        '@stylistic/js/yield-star-spacing': ['error', { before: false, after: true }],
        '@stylistic/js/func-call-spacing': ['error', 'never'],
        '@stylistic/js/nonblock-statement-body-position': 'off',
        '@stylistic/js/template-tag-spacing': ['error', 'never'],
        '@stylistic/js/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*'
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive'
            }
        ],
        '@stylistic/js/semi-style': ['error', 'last'],
        '@stylistic/js/switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        '@stylistic/js/function-paren-newline': 'off',
        '@stylistic/js/implicit-arrow-linebreak': 'off',
        '@stylistic/js/lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],
        '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/js/max-len': 'off'
    }
};
