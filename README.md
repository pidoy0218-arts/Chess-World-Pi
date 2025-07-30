PROJECT: Chess World Pi
STRUCTURE PLAN - Core to Expansion

chess-world-pi/
├── index.html                 ← Main game board entry (loads scripts, sounds)
│
├── style/
│   └── style-board.css        ← CSS for board layout, colors, 3D styling
│
├── logic/
│   └── logic-board.js         ← JavaScript for game logic, movement, sounds
│
├── assets/
│   ├── move-sound.mp3         ← Piece move sound
│   ├── win-sound.mp3          ← (planned) win sound
│   └── knight-neigh.mp3       ← (optional) fun horse sound
│
├── logo.png                   ← Game logo (optional)

--- Future Upgrades ---
✔ Pi Network Login - logic-login.js
✔ Puzzle Mode       - puzzle.html + logic
✔ Leaderboard       - leaderboard.html + logic
✔ Profile/Feed      - profile.html (optional)
✔ Captured Pieces   - upgrade to logic-board.js
✔ Confetti/SFX      - update logic & assets

Design Philosophy:
"Build from the center outward — core first, expand progressively."
