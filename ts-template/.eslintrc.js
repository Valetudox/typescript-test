module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:json/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['regex', 'no-only-tests'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-unused-expressions': 'error',
    'no-console': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'max-len': ['error', { code: 120, ignorePattern: '^import [^,]+ from' }],
    'regex/invalid': [
      'error',
      [
        {
          regex:
            '(l|L)ogger\\.(debug|info|warn|error|warnFromError|fromError)\\(.+([a-zA-Z0-9_,\'": \\n])*(\\b[a-z_]+[A-Z]{1}[a-z_]+):',
          message: 'Logger params should only contain snake_case properties'
        }
      ]
    ]
  },
  overrides: [
    {
      files: '**/*.spec.ts',
      rules: {
        'no-unused-expressions': 0
      }
    }
  ]
};
