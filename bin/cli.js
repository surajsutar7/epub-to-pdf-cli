#!/usr/bin/env node

import { convertEpubToPdf } from '../src/index.js';

const input = process.argv[2];
if (!input) {
  console.error('Usage: epub2pdf <file.epub>');
  process.exit(1);
}

convertEpubToPdf(input);