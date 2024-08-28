module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended',
    '@payloadcms',
    'plugin:prettier/recommended', // Dodaj to, jeśli używasz Prettiera
    'plugin:simple-import-sort/recommended' // Dodaj to, aby korzystać z sortowania importów
  ],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'], // Dodaj plugin simple-import-sort
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    'simple-import-sort/imports': 'error', // Dodaj regułę sortowania importów
    'simple-import-sort/exports': 'error'  // Dodaj regułę sortowania eksportów
  },
}
