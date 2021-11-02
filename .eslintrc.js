module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
    'prettier', // prettierのextendsは他のextendsより後に記述する
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides:[
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'module',
        project: './src/tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
      }
    }
  ],
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
}