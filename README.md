# 🖼️ Image Hash — DOCX Image Extraction & SHA‑256 Comparison Tool

A browser‑based tool that extracts images from uploaded **DOCX files**, computes a **SHA‑256 hash** for every image, and compares them to detect **matching or redistributed screenshots** across a group of documents—ideal for education settings, plagiarism detection, and digital forensics.

The tool runs entirely **client‑side**, using HTML/CSS/JavaScript and the **JSZip CDN**, with **no server**, guaranteeing privacy and offline use.

***

## ✅ Key Features

### 📤 Extract Images from DOCX

*   Uses **JSZip** (via CDN) to parse `.docx` files.
*   Extracts all embedded images regardless of document count or structure.
*   Supports multiple DOCX uploads at once.

### 🔐 SHA‑256 Hashing of All Extracted Images

*   Each image is hashed using a client‑side SHA‑256 implementation (`sha256.js`).
*   Produces consistent fingerprints even if image filenames differ.
*   Allows detection of:
    *   Identical screenshots
    *   Cross‑shared student work
    *   Attempts to mask copying by renaming/resaving images

### 🔍 Compare Hashes Across All Documents

*   Automatically groups matching hashes.
*   Displays visually which images appear in multiple submissions.
*   Enables instructors to identify shared screenshots quickly.

### 📊 Exportable Reports

*   Download a **ZIP** of all extracted images (`export-zip.js`)
*   Export a **CSV** of SHA‑256 values (`export-csv.js`)
*   Export results for record‑keeping, moderation, or academic integrity workflows.

### 🌙 Dark Mode

*   Built‑in dark mode toggle (`dark-mode.js`).

***

## 📂 Project Structure

    image_hash/
    │
    ├── index.html              # Main UI & script loader
    ├── LICENSE                 # MIT License
    ├── README.md               # Documentation
    │
    ├── js/
    │   ├── accordion.js        # UI accordion components
    │   ├── dark-mode.js        # Light/dark theme toggling
    │   ├── export-csv.js       # CSV export functionality
    │   ├── export-zip.js       # ZIP export via JSZip
    │   ├── extract-images.js   # DOCX parsing & image extraction
    │   ├── load-image.js       # Image loading helpers
    │   ├── main.js             # Main application control flow
    │   ├── process-all.js      # Batch processing of multiple DOCX files
    │   ├── render-card.js      # Rendering of image cards
    │   ├── render-output.js    # Rendering of results section
    │   └── sha256.js           # SHA‑256 hashing implementation
    │
    └── styles/
        └── styles.css          # UI styling

***

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rwilson-gcc/image_hash
```

### 2. Open the tool

No build step. No backend.  
Just open:

    index.html

### 3. Upload DOCX files

*   Drag multiple Word documents OR
*   Use the “Select multiple DOCX files” upload box

### 4. Click **Process Documents**

The tool will:

1.  Unzip each `.docx`
2.  Extract all images
3.  Hash each image using SHA‑256
4.  Compare hashes across all documents
5.  Display matches visually

### 5. Export results

*   **Download ZIP** of extracted images
*   **Download CSV** containing SHA‑256 hashes

***

## 🧠 How It Works (Technical Breakdown)

### 1. Parsing DOCX Files (`extract-images.js`)

*   DOCX files are zipped XML packages.
*   JSZip loads each `.docx` and navigates `/word/media/`.
*   All media files (`.png`, `.jpg`, `.jpeg`, `.bmp`, `.gif`) are extracted.

### 2. Hashing Images (`sha256.js`)

*   Each image is hashed with SHA‑256.
*   The hash is deterministic and independent of filename or location.

### 3. Comparing Results (`process-all.js`)

*   Hashes are stored in a map / dictionary.
*   Matching hashes = identical images.
*   Used to detect redistributed screenshots between users.

### 4. Rendering Output (`render-output.js`)

*   Image cards show:
    *   Preview
    *   SHA‑256 hash
    *   Occurrences across documents

### 5. Exporting (`export-csv.js` / `export-zip.js`)

*   CSV export for spreadsheet analysis
*   ZIP export for auditing / documentation

***

## 📚 Use Cases

### ✅ Academic Integrity Checking

Identify whether students shared screenshots instead of completing work independently.

### ✅ Digital Forensics

Detect duplicates across evidence sets.

### ✅ Content Moderation

Check whether images circulate across multiple sources.

### ✅ Classroom Automation

Batch‑process a full class worth of submissions in seconds.

***

## 🔐 Privacy & Security

Because everything runs **100% locally in the browser**, your documents and images **never leave the machine**.

No uploads.  
No servers.  
No logging.

***

## 📄 License

This project uses the **MIT License**.  
See the `LICENSE` file for details.

***

Just say the word!
