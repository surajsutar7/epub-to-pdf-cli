import { existsSync } from 'fs';
import { execSync } from 'child_process';

console.log('🧪 Running basic CLI tests');

// Test CLI help
execSync('node bin/cli.js --help', { stdio: 'inherit' });

// Test version
execSync('node bin/cli.js --version', { stdio: 'inherit' });

console.log('✅ CLI tests passed');

// Optional: warn if calibre missing (do not fail)
try {
  execSync('ebook-convert --version', { stdio: 'ignore' });
  console.log('ℹ️ Calibre detected');
} catch {
  console.log('⚠️ Calibre not installed (expected in CI)');
}
