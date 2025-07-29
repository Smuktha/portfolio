import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: [
      '**/.next/**',
      'node_modules/**',
      'public/**',
    ],
  },
  ...compat.extends('next/core-web-vitals'),
];

export default eslintConfig;
