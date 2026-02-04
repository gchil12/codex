# Multilingual Greeter

A tiny JavaScript app that greets people in multiple languages. It features a language chooser
and a display panel for the greeting text.

## Project goals

- Provide a simple “hello world” experience across multiple languages.
- Keep the UI lightweight and easy to understand for newcomers.
- Establish a foundation for build and test tooling as the project grows.

## Getting started

### Prerequisites

- Git (installed globally)
- Node.js 18+ (recommended, installed per project via a version manager)
- npm 9+ (bundled with Node.js)

### Install Git (global)

You only need to install Git once on your machine:

- **macOS (Homebrew)**: `brew install git`
- **Windows**: https://git-scm.com/download/win
- **Ubuntu/Debian**: `sudo apt-get install git`

Verify the install:

```bash
git --version
```

### Git works in Git Bash but not in VS Code (Windows)

If `git --version` works in **Git Bash** but fails in the **VS Code** terminal, VS Code
likely isn’t inheriting the Git Bash PATH. Try these fixes:

1. **Point VS Code to Git explicitly**  
   Open **Settings** → search for **Git: Path** → set it to:
   `C:\\Program Files\\Git\\bin\\git.exe`
2. **Use Git Bash as the default terminal**  
   Press `Ctrl+Shift+P` → “Terminal: Select Default Profile” → choose **Git Bash**.
3. **Restart VS Code** after changes so PATH updates apply.

If it still fails, ensure `C:\\Program Files\\Git\\bin` is in your system PATH and then
restart VS Code.

### Install Node.js + npm per project

This project assumes you manage Node.js on a per-project basis (recommended). Using a version
manager like `nvm` lets each repo pin the Node version it needs.

> **Windows note:** `nvm` setup instructions often use `bash`. If `bash` is not recognized in
> the VS Code terminal, either (1) switch your default terminal profile to **Git Bash**, or
> (2) use **PowerShell** with **nvm-windows** instead of the bash-based `nvm` installer.
> See the nvm-windows installer: https://github.com/coreybutler/nvm-windows/releases

1. Install `nvm`: https://github.com/nvm-sh/nvm#installing-and-updating
2. From the project root, set the Node version and install dependencies:

```bash
nvm install 18
nvm use 18
npm install
```

### Run locally

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

The production files are emitted to `dist/`.

### Preview the production build

```bash
npm run preview
```

## Testing

This project uses a minimal test setup placeholder so we can add automated checks as the
application grows. For now, the `test` script is a no-op that exits successfully. When you’re
ready to add coverage, consider introducing a lightweight test runner such as Vitest or
Jest, and a UI testing tool like Playwright.

```bash
npm test
```

## Repository structure

```
.
├── README.md          # Project overview and workflows
├── index.html         # Static HTML entry point
├── package.json       # Tooling + scripts
├── src/
│   ├── main.js        # Greeting logic + DOM wiring
│   └── styles.css     # Basic styling
└── dist/              # Build output (generated)
```

## Notes for newcomers

- Start in `src/main.js` to see how the language chooser drives the greeting text.
- Update `src/styles.css` to tweak the UI.
- The app is bundled with Vite for fast local development.

## Next steps to learn

- Add more languages and consider loading them from a JSON file.
- Replace the placeholder test script with Vitest and add unit tests for the greeting logic.
- Add linting (ESLint) and formatting (Prettier) once the codebase grows.
