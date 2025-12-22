![npm](https://img.shields.io/npm/v/epub-to-pdf-cli)
![npm](https://img.shields.io/npm/dt/epub-to-pdf-cli)
![license](https://img.shields.io/npm/l/epub-to-pdf-cli)
![node](https://img.shields.io/node/v/epub-to-pdf-cli)

# 📘 EPUB to PDF CLI

A simple and reliable **EPUB → PDF converter** using **Calibre**.  
Works as both a **CLI tool** and a **Node.js library**.

---

## ✨ Features

- Convert EPUB to PDF using Calibre
- CLI and programmatic API
- Cross-platform (Linux, macOS, Windows)
- Lightweight, no bundled binaries
- Clear error messages

---

## 📦 Installation

### Global install (CLI)

```bash
npm install -g epub-to-pdf-cli
```

## Or run without installing
```bash
npx epub-to-pdf-cli book.epub
```

## 🖥 CLI Usage
```
epub2pdf <input.epub> [output.pdf]

Examples
epub2pdf mybook.epub
epub2pdf mybook.epub mybook.pdf
```

## 📚 Programmatic Usage
### bash
```bash
npm install epub-to-pdf-cli
```
### js
```
import { convertEpubToPdf } from 'epub-to-pdf-cli';

await convertEpubToPdf('book.epub', 'book.pdf');
```

## ⚙ Requirements

This package requires Calibre to be installed.

Verify installation:
### bash
```
ebook-convert --version
```
## Install Calibre

### Ubuntu/Debian
```bash
sudo apt install calibre
```
### macOS
``` bash
brew install calibre
```
### Windows
``` bash
Download from: https://calibre-ebook.com/download
```

## ❌ Common Errors

ebook-convert not found
→ Install Calibre and ensure it is in PATH.

## 📄 License

MIT © Suraj Sutar