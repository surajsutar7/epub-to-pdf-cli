import { execSync } from 'child_process';

if (process.env.CI === 'true') {
  console.log('⚠️ Skipping Calibre check in CI');
  process.exit(0);
}

try {
  execSync('ebook-convert --version', { stdio: 'ignore' });
  console.log('✅ Calibre found');
} catch {
  console.error(`
❌ Calibre is required but not installed.

Please install Calibre:
https://calibre-ebook.com/download
`);
  process.exit(1);
}
