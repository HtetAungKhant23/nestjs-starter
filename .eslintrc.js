module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'unused-imports',
    'sort-imports-es6-autofix',
    'prettier',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prefer-template': 'error',
    curly: ['error', 'all'],
    'no-trailing-spaces': 'error',
    'lines-between-class-members': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_default'],
      },
    ],
    '@typescript-eslint/naming-convention': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': 'error',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
