import { execSync } from 'child_process';

try {
  execSync('ebook-convert --version', { stdio: 'ignore' });
} catch {
  console.error(`
❌ Calibre is required but not installed.

Please install Calibre:
https://calibre-ebook.com/download
`);
  process.exit(1);
}
