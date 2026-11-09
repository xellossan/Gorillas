# 🦍 VR Gorillas 3D (1v1 Banana Blitz) - Complete 10-Level Edition

A full-featured 1v1 turn-based banana artillery duel built for crossplay between Meta Quest VR headsets (WebXR) and standard desktop browsers.

### 🎮 All 10 Playable Themed Levels:
1. **🏟️ Arena:** Classic neon ground-level court with voxel pillars and court boundary barricades.
2. **🌆 City Scape:** Skyscraper battle across a 14m urban chasm with destructible water towers, staircase bulkheads, industrial dual-fan HVAC chillers, and antenna towers.
3. **🌴 Jungle:** Tropical canopy floor with ancient Mayan stone totems, thick jungle trees, ruin pillars, and bamboo crates.
4. **🏖️ Beach:** Golden sand coastline with thatched-roof tiki huts, palm tree clusters, lifeguard watchtowers, and surfboard stacks.
5. **🏰 Castle:** Medieval fortress courtyard featuring granite battlement merlons, siege catapults, gatehouse drawbridge winches, and royal banners.
6. **❄️ Arctic:** Polar glacial base with red science hab units, satellite radar dishes, translucent ice blocks, and frozen fuel drums.
7. **👻 Haunted House:** Eerie midnight graveyard featuring stone crypt mausoleums, crooked tombstones, twisted dead trees, and glowing jack-o'-lanterns.
8. **⚙️ Junk Yard:** Industrial salvage depot with stacked crushed car cubes, shipping containers, tire piles, and scrap compressor bins.
9. **🏴‍☠️ Pirate:** Two opposing galleon quarterdecks across ocean water with ship masts, crow's nests, naval cannons, rum barrels, and treasure chests.
10. **🕹️ Arcade:** Retro 80s synthwave neon cyber arcade hall with stand-up arcade cabinets, giant pixel blocks, and dance speaker towers.

### 🌟 Key Features:
- **Dual Level Carousels:** Browse maps on the lobby screen or directly in-world on the stadium scoreboard in VR!
- **Scoreboard Carousel Buttons:** Laser-interactive 3D buttons (`◀ PREV MAP`, `NEXT MAP ▶`, `🔄 RESTART`) mounted right below the stadium side-wall scoreboard.
- **Authoritative Turn Sync:** Master clock and turn states driven by host to eliminate countdown discrepancies between players.
- **Physical Destructibles & Wall-Sliding:** Bananas carve away individual obstacle voxels on impact; gorillas smoothly slide along walls and obstacles.
- **Rooftop & Ship Perimeter Bounds:** Strict boundary enforcement prevents players from walking off ledges into thin air or ocean water.
- **WebRTC Data & Voice Audio Chat:** Integrated voice chat and peer-to-peer data synchronization via PeerJS.

### 🚀 How to Run:
- **Node.js Server:** Run `npm install && npm start` and open `http://localhost:3000` (or local IP with HTTPS for Quest).
- **Python Static Server:** Run `python -m http.server 8000` (use Cloudflare Tunnel or local HTTPS proxy for WebXR & mic permissions on Meta Quest).
