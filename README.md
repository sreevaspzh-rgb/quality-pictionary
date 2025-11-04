# Quality Pictionary – HTML/QR Kit

This kit lets you run the game paperless. Each group scans a QR to open a **clue viewer** for Set A/B/C, navigates with **Next/Prev**, uses a built-in **per‑clue timer**, and opens an **Answer Key** QR at the end.

## Files
- `index.html` – Clue viewer (use `?set=A` OR `?set=B` OR `?set=C`)
- `answers.html` – Answer key reveal (light passcode gate)
- `config/config.js` – Edit base URL, timer, passcode, and the **answers** list
- `assets/sets/A|B|C/01.png..20.png` – Replace with your real clue images
- `qr/` – Ready QR codes for Sets and their Answer Keys

## How to Use
1. Replace placeholder images inside `assets/sets/...` with your real clues (keep file names).
2. Open `config/config.js` and set:
   - `baseUrl` to the hosted URL (e.g., `https://your-org.github.io/quality-pictionary`)
   - `perClueSeconds`, `passcode`, and actual `answers` for A/B/C.
3. Host this folder:
   - **Option A:** GitHub Pages / Netlify / your intranet web server
   - **Option B:** Local laptop + local network web server (e.g., `npx serve .`)
4. Print or share QR codes from `qr/` to each group.
5. After gameplay, share the Answer Key QR. 

## URLs (examples)
- Set A: `{baseUrl}/index.html?set=A`
- Set B: `{baseUrl}/index.html?set=B`
- Set C: `{baseUrl}/index.html?set=C`
- Answer Keys: `{baseUrl}/answers.html?set=A` (and B/C)

## Notes
- Passcode is **light deterrence**, not real security.
- The timer is per clue; use **Restart** or **Pause** as needed.
- You can add more sets by editing `config/config.js` and adding asset folders.
