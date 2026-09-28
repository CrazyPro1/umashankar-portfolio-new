# Umashankar portfolio

## Develop and build

Use Node.js 22 or newer. Run `npm ci`, `npm run dev`, and `npm run build`.
`npm run lint` checks TypeScript. `npm test` runs execution-result regression tests.

## Update your public photo (owner only)

Everyone sees `public/profile.jpg`, your selected portrait.
The stock portrait and browser-local photo overrides are no longer used.
Visitors have no upload or location-editing controls.

1. Sign in to GitHub as the repository owner.
2. Open https://github.com/CrazyPro1/umashankar-portfolio-new/upload/main/public
3. Upload your photo as **profile.jpg** (export as JPEG first, preferably under 2 MB).
4. Commit the replacement and let your hosting service redeploy.

Only accounts with repository write access can publish a replacement. Keep that
access limited to yourself to remain the sole editor. No password or access token
is stored in the website. Update your location in `src/data/resumeData.ts`.

The previous upload feature saved photos only in your browser. To reuse one, save
the displayed photo from that browser before uploading it to GitHub.

## Coding practice

Click **Practice coding** to open the drawer, which is closed by default. Use its
header to maximize, restore, minimize, or close it. The desktop width slider
stretches the drawer. Each panel collapses or maximizes independently; text areas
resize vertically. Minimize retains active runs; close stops them.

Under **Input dashboard → Test cases**, add up to 10 inputs and expected outputs.
**Run tests** starts a fresh runtime per test and reports pass/fail results. Only
CRLF line endings and final newlines are normalized; other whitespace matters.
Errors, stops and timeouts cannot pass even if their output matches expectations.

Browser execution timing excludes runtime initialization and TypeScript
transpilation. Total time includes setup and network. Java reports total time
including its network request and compilation because Wandbox provides no CPU
timing. Runs have a 60-second limit and a 50,000-character output cap.

Java sends code/input to Wandbox only on Run. Other languages run in disposable
browser workers; Python downloads its runtime from jsDelivr. PostgreSQL accepts
SQL rather than psql commands, and starts a fresh database per test. The editor
has no AI integration. Code drafts are saved for the browser session.
