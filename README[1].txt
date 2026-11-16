# CU Nav — GitHub Pages starter

## Files
- `index.html`: complete responsive app interface and navigation logic
- `data.js`: directory records (teachers, offices, rooms)
- `cu_campus_map.jpg`: add your original campus map image here
- `manifest.json`, `service-worker.js`, `icon.svg`: PWA support

## Upload to GitHub
Upload all files into the same root folder as your repository's `index.html`.
Keep the map filename exactly `cu_campus_map.jpg`.

## Important data note
The original Excel directory was not available in the files I could access while generating this package. `data.js` therefore contains only the two facility entries previously confirmed in our discussion and empty teacher/room arrays. Add the spreadsheet's verified rows before treating the directory as complete.

## Routes
This starter deliberately does not invent walking routes. To draw accurate routes, add verified campus path coordinates / route graph data and connect it to the navigation screen.

## GitHub Pages
Enable Pages from Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
Use HTTPS for service worker/PWA support.
