import { execSync } from 'child_process';

console.log('🧪 Running basic CLI tests');

execSync('node bin/cli.js --help', { stdio: 'inherit' });
execSync('node bin/cli.js --version', { stdio: 'inherit' });

console.log('✅ CLI tests passed....');
