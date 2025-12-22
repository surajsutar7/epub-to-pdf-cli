import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

export function convertEpubToPdf(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(inputPath)) {
      return reject(new Error('Input EPUB file does not exist'));
    }

    const inFile = path.resolve(inputPath);
    const outFile = path.resolve(
      outputPath || inFile.replace(/\.epub$/i, '.pdf')
    );

    const cmd = `ebook-convert "${inFile}" "${outFile}"`;

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(stderr || error.message));
      }
      resolve(outFile);
    });
  });
}
