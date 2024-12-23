import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact, { rules } from 'eslint-plugin-react';
import eslintRactHooks from 'eslint-plugin-react-hooks';
import eslintRactrefResh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        plugins: {
            'react-hooks': eslintRactHooks,
            'react-refresh': eslintRactrefResh,
            pritter: prettierPlugin,
        },
        rules: {
            'prettier/prettier': [],
        },
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: { globals: { ...globals.browser, ...globals.es2021 } },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,

    'plugin:react/jsx-runtime',
    {
        files: ['src/*.{js,jsx}'],
        rules: {
            ...eslintConfigPrettier.rules,
        },
    },
];
