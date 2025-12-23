#!/usr/bin/env node
import { convertEpubToPdf } from '../src/index.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const args = process.argv.slice(2);

// --help
if (args.includes('--help') || args.length === 0) {
  console.log(`
epub2pdf <input.epub> [output.pdf]

Options:
  --help       Show help
  --version    Show version
`);
  process.exit(0);
}

// --version
if (args.includes('--version')) {
  const pkg = JSON.parse(
    readFileSync(new URL('../package.json', import.meta.url))
  );
  console.log(pkg.version);
  process.exit(0);
}

// Conversion
const input = args[0];
const output = args[1];

convertEpubToPdf(resolve(input), output)
  .then(() => console.log('✅ Conversion completed'))
  .catch(err => {
    console.error('❌', err.message);
    process.exit(1);
  });
