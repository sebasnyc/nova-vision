# IronHUD / Nova Vision Web App

Open `index.html` in a desktop browser to test. Use left/right arrows and Enter to simulate the Meta Neural Band’s D-pad input. The weather card asks for optional location permission and uses Open-Meteo; all task state stays in browser local storage.

For glasses deployment, host these three files on any public HTTPS service (GitHub Pages, Vercel, Netlify, etc.). In the Meta AI app go to **Devices → Display Glasses settings → App connections → Web apps**, then add the public URL. The layout is exactly 600×600, uses black as transparent display background, and all navigation is keyboard/D-pad driven.

This is a display-only field manual; browser Web Apps do not expose the DAT camera feed needed for live object detection.
