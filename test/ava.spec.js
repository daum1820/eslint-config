'use strict';

const test = require('ava');
const avaPlugin = require('eslint-plugin-ava');
const avaConfig = require('../configs/ava');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-ava rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: avaConfig.rules,
    rules: avaPlugin.rules,
    pluginName: 'eslint-plugin-ava'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: avaConfig.rules,
    pluginRules: {
        'eslint-plugin-ava': avaPlugin.rules
    }
});
