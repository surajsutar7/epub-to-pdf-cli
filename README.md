<h2 align="center">📘 EPUB to PDF CLI – Node.js EPUB to PDF Converter using Calibre
<p align="center">

  ![npm](https://img.shields.io/npm/v/epub-to-pdf-cli)
  ![npm](https://img.shields.io/npm/dt/epub-to-pdf-cli)
  ![license](https://img.shields.io/npm/l/epub-to-pdf-cli)
  ![node](https://img.shields.io/node/v/epub-to-pdf-cli)
  ![Visitors](https://plausible.io/api/v1/stats/aggregate?site_id=surajsutar7.github.io&period=30d&metrics=visitors)
  ![Analytics](https://img.shields.io/badge/analytics-plausible-green)


</p>
</h2>

📘 EPUB to PDF CLI is a fast, reliable **Node.js EPUB to PDF converter**
built on top of **Calibre’s ebook-convert** tool.

Convert `.epub` ebooks to `.pdf` from the command line or inside Node.js
applications with a simple, cross-platform CLI.


![EPUB to PDF CLI](https://raw.githubusercontent.com/surajsutar7/epub-to-pdf-cli/main/assets/epub-to-pdf-cli-og.png)
---


This tool is ideal for:
- Developers
- Automation pipelines
- Ebook processing
- Batch EPUB to PDF conversion

---

## ✨ Features

- Convert EPUB to PDF using Calibre
- Simple CLI (epub2pdf)
- Programmatic Node.js API
- Cross-platform (Linux, macOS, Windows)
- No bundled binaries (uses system Calibre)
- Lightweight and fast
- Clear error handling

---
## 📦 Installation

### Global install (CLI)

```bash
npm install -g epub-to-pdf-cli
```
After installation, the epub2pdf command will be available globally.

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
This converts an EPUB ebook file into a PDF document using Calibre.

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
This makes the package suitable for **Node.js scripts, backend services**, and **automation workflows**.

## ⚙ Requirements

This package **requires Calibre** to be installed.

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

## ❌ Common Errors & Solutions

ebook-convert not found

→ Install Calibre and ensure it is in PATH.

**Cause**: Calibre is not installed or not in PATH

**Solution**: Install Calibre and restart your terminal

→  Input EPUB file does not exist

**Cause**: Invalid file path

**Solution**: Check the EPUB file path and permissions

## 🔖 Versioning & Breaking Changes

This project follows **Semantic Versioning** using **Conventional Commits**.

### Commit Types
- `fix:` → Patch release
- `feat:` → Minor release
- `feat!:` → Major release (breaking change)

### Breaking Changes
Any change that breaks existing usage **must** be marked as a breaking change.

Example:
```bash
git commit -m "feat!: change CLI input format"
```

## 📄 License

MIT © Suraj Sutar