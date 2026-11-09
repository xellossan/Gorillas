// VR Quest & Desktop Crossplay 3D Gorilla Game Engine (v7 - Level Select & Skyscraper City Scape)
const COURT_WIDTH = 26;
const COURT_LENGTH = 50;
const COURT_BOUNDARY_X = COURT_WIDTH / 2;
const COURT_BOUNDARY_Z = COURT_LENGTH / 2;
const AVATAR_EYE_HEIGHT = 2.4;

const LEVEL_DEFINITIONS = [
  {
    id: 'arena',
    name: '🏟️ ARENA',
    description: 'Classic ground-level combat arena with voxel pillars, perimeter barricades, and side-wall scoreboards.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXJlbmFTa3kiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMGExMDFmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWUyOTNiIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY291cnRHcmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzExMTgyNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFlMjY0MCIvPjwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjIwIiBmaWxsPSJ1cmwoI2FyZW5hU2t5KSIvPgogIDxwb2x5Z29uIHBvaW50cz0iNDAsMjAwIDM2MCwyMDAgMzAwLDEwMCAxMDAsMTAwIiBmaWxsPSJ1cmwoI2NvdXJ0R3JhZCkiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuODUiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMTAwIiB4Mj0iMjAwIiB5Mj0iMjAwIiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCw0Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSI5MCwxNDUgMzEwLDE0NSAzMTAsMTUwIDkwLDE1MCIgZmlsbD0iI2VmNDQ0NCIgb3BhY2l0eT0iMC44NSIvPgogIDxsaW5lIHgxPSI5MCIgeTE9IjE0MCIgeDI9IjMxMCIgeTI9IjE0MCIgc3Ryb2tlPSIjZjQzZjVlIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cmVjdCB4PSIxMzAiIHk9IjExNSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjM1IiBmaWxsPSIjNDc1NTY5IiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjI1NCIgeT0iMTE1IiB3aWR0aD0iMTYiIGhlaWdodD0iMzUiIGZpbGw9IiM0NzU1NjkiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwxMDAgNzAsMTIwIDcwLDE3MCAzMCwxNTAiIGZpbGw9IiMwMzY5YTEiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuOSIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzcwLDEwMCAzMzAsMTIwIDMzMCwxNzAgMzcwLDE1MCIgZmlsbD0iIzAzNjlhMSIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC45Ii8+CiAgPHJlY3QgeD0iMTMwIiB5PSIxNCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC44NSkiIHN0cm9rZT0iIzM4YmRmOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzIiIGZpbGw9IiMzOGJkZjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BUkVOQTwvdGV4dD4KPC9zdmc+"
  },
  {
    id: 'cityscape',
    name: '🌆 CITY SCAPE',
    description: 'Skyscraper battle across an urban chasm with destructible water towers, staircase bulkheads, and industrial HVAC chillers.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2l0eVNreSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNTA4MTQiLz48c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iIzFlMTAzNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNiMTE0NSIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im1vb25HcmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmMDA3ZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Y1OWUwYiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjIwIiBmaWxsPSJ1cmwoI2NpdHlTa3kpIi8+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iNzUiIHI9IjM4IiBmaWxsPSJ1cmwoI21vb25HcmFkKSIgb3BhY2l0eT0iMC44NSIvPgogIDxyZWN0IHg9IjM1IiB5PSI4MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iIzBmMTcyYSIgb3BhY2l0eT0iMC45Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSIxMjAsMTEwIDI4MCwxMTAgMjYwLDEzNSAxNDAsMTM1IiBmaWxsPSIjMWUyOTNiIiBzdHJva2U9IiNmNDNmNWUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHJlY3QgeD0iMTQwIiB5PSIxMzUiIHdpZHRoPSIxMjAiIGhlaWdodD0iODUiIGZpbGw9IiMwZjE3MmEiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHJlY3QgeD0iMTM1IiB5PSI4NSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIwIiBmaWxsPSIjNzgzNTBmIiBzdHJva2U9IiNiNDUzMDkiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxwb2x5Z29uIHBvaW50cz0iMTMxLDg1IDE1NSw4NSAxNDMsNzMiIGZpbGw9IiM0NTFhMDMiLz4KICA8cG9seWdvbiBwb2ludHM9IjUwLDE2NSAzNTAsMTY1IDM5MCwyMjAgMTAsMjIwIiBmaWxsPSIjMWUyOTNiIiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjI5NSIgeT0iMTI1IiB3aWR0aD0iMjgiIGhlaWdodD0iMzIiIGZpbGw9IiM3ODM1MGYiIHN0cm9rZT0iI2I0NTMwOSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8cG9seWdvbiBwb2ludHM9IjI4OSwxMjUgMzI5LDEyNSAzMDksMTA1IiBmaWxsPSIjNDUxYTAzIi8+CiAgPHJlY3QgeD0iNjUiIHk9IjEzMiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiBmaWxsPSIjMzM0MTU1IiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHJlY3QgeD0iMTQ1IiB5PSIxNDgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxOCIgZmlsbD0iIzQ3NTU2OSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8cmVjdCB4PSIxMTAiIHk9IjEyIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI2IiByeD0iNiIgZmlsbD0icmdiYSgxNSwyMyw0MiwwLjg1KSIgc3Ryb2tlPSIjZWFiMzA4Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIzMCIgZmlsbD0iI2ZmZDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNJVFkgU0NBUEU8L3RleHQ+Cjwvc3ZnPg=="
  },
  {
    id: 'jungle',
    name: '🌴 JUNGLE',
    description: 'Deep tropical canopy with ancient Mayan stone totems, thick jungle trees, ruin pillars, and bamboo crates.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ianVuZ2xlU2t5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyMmMyMiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA2NGUzYiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imp1bmdsZUdyb3VuZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxNDUzMmQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNTJlMTYiLz48L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgZmlsbD0idXJsKCNqdW5nbGVTa3kpIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwyMDUgMzcwLDIwNSAzMjAsMTEwIDgwLDExMCIgZmlsbD0idXJsKCNqdW5nbGVHcm91bmQpIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHJlY3QgeD0iMTE1IiB5PSI5NSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjUwIiBmaWxsPSIjNDc1NTY5IiBzdHJva2U9IiMzNGQzOTkiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgPHJlY3QgeD0iMjYwIiB5PSI5NSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjUwIiBmaWxsPSIjNDc1NTY5IiBzdHJva2U9IiMzNGQzOTkiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjcwIiB3aWR0aD0iMTgiIGhlaWdodD0iOTUiIGZpbGw9IiM3ODM1MGYiIHN0cm9rZT0iIzQ1MWEwMyIvPgogIDxjaXJjbGUgY3g9IjQ5IiBjeT0iNjUiIHI9IjI4IiBmaWxsPSIjMTU4MDNkIi8+CiAgPHJlY3QgeD0iMzQwIiB5PSI3MCIgd2lkdGg9IjE4IiBoZWlnaHQ9Ijk1IiBmaWxsPSIjNzgzNTBmIiBzdHJva2U9IiM0NTFhMDMiLz4KICA8Y2lyY2xlIGN4PSIzNDkiIGN5PSI2NSIgcj0iMjgiIGZpbGw9IiMxNTgwM2QiLz4KICA8cmVjdCB4PSIxODAiIHk9IjE0NSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjYTE2MjA3IiBzdHJva2U9IiNjYThhMDQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjE0MCIgeT0iMTY1IiB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIGZpbGw9IiNhMTYyMDciIHN0cm9rZT0iI2NhOGEwNCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGxpbmUgeDE9IjgwIiB5MT0iMTUwIiB4Mj0iMzIwIiB5Mj0iMTUwIiBzdHJva2U9IiMxNmEzNGEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiw0Ii8+CiAgPHJlY3QgeD0iMTMwIiB5PSIxNCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9InJnYmEoNiw3OCw1OSwwLjkpIiBzdHJva2U9IiMzNGQzOTkiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjMyIiBmaWxsPSIjNmVlN2I3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SlVOR0xFPC90ZXh0Pgo8L3N2Zz4="
  },
  {
    id: 'beach',
    name: '🏖️ BEACH',
    description: 'Tropical coastline with thatched-roof tiki huts, palm tree clusters, lifeguard towers, and beach umbrellas.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmVhY2hTa3kiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NGM3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmVmMDhhIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2FuZEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmRlMDQ3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjY2E4YTA0Ii8+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMjAiIGZpbGw9InVybCgjYmVhY2hTa3kpIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwyMDUgMzcwLDIwNSAzMjAsMTEwIDgwLDExMCIgZmlsbD0idXJsKCNzYW5kR3JhZCkiIHN0cm9rZT0iI2ZhY2MxNSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8bGluZSB4MT0iNzUiIHkxPSIxMjAiIHgyPSI3NSIgeTI9IjE0NSIgc3Ryb2tlPSIjNzgzNTBmIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIDxwb2x5Z29uIHBvaW50cz0iNjUsMTIwIDExNSwxMjAgOTAsOTUiIGZpbGw9IiNjYThhMDQiIHN0cm9rZT0iI2ExNjIwNyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGxpbmUgeDE9IjI5NSIgeTE9IjExNSIgeDI9IjI5NSIgeTI9IjE1NSIgc3Ryb2tlPSIjZGMyNjI2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIDxyZWN0IHg9IjI5MCIgeT0iMTEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIyODUsMTEwIDMzNSwxMTAgMzEwLDk1IiBmaWxsPSIjZGMyNjI2Ii8+CiAgPHBhdGggZD0iTSA1MCwxNjUgUSA1NSwxMjAgNDAsOTAiIHN0cm9rZT0iIzc4MzUwZiIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSJub25lIi8+CiAgPGNpcmNsZSBjeD0iNDAiIGN5PSI4NSIgcj0iMTgiIGZpbGw9IiMxNmEzNGEiLz4KICA8cG9seWdvbiBwb2ludHM9IjIxMCwxNDAgMjUwLDE0MCAyMzAsMTIwIiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPGxpbmUgeDE9IjgwIiB5MT0iMTUwIiB4Mj0iMzIwIiB5Mj0iMTUwIiBzdHJva2U9IiMwMjg0YzciIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiw0Ii8+CiAgPHJlY3QgeD0iMTMwIiB5PSIxNCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC44NSkiIHN0cm9rZT0iIzM4YmRmOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzIiIGZpbGw9IiMzOGJkZjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CRUFDSDwvdGV4dD4KPC9zdmc+"
  },
  {
    id: 'castle',
    name: '🏰 CASTLE',
    description: 'Medieval fortress courtyard featuring granite battlement merlons, siege catapults, drawbridge gatehouses, and banners.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2FzdGxlU2t5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFlMWI0YiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMxMmU4MSIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN0b25lR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzMzQxNTUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiLz48L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgZmlsbD0idXJsKCNjYXN0bGVTa3kpIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwyMDUgMzcwLDIwNSAzMjAsMTEwIDgwLDExMCIgZmlsbD0idXJsKCNzdG9uZUdyYWQpIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHJlY3QgeD0iOTAiIHk9IjEwMCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE1IiBmaWxsPSIjNDc1NTY5IiBzdHJva2U9IiM5NGEzYjgiLz4KICA8cmVjdCB4PSIyNzAiIHk9IjEwMCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE1IiBmaWxsPSIjNDc1NTY5IiBzdHJva2U9IiM5NGEzYjgiLz4KICA8cmVjdCB4PSIxMzAiIHk9IjEzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjNzgzNTBmIiBzdHJva2U9IiM0NTFhMDMiLz4KICA8cmVjdCB4PSIyMzUiIHk9IjEyNSIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI1IiBmaWxsPSIjMzM0MTU1IiBzdHJva2U9IiM5NGEzYjgiLz4KICA8bGluZSB4MT0iODAiIHkxPSIxNTAiIHgyPSIzMjAiIHkyPSIxNTAiIHN0cm9rZT0iI2ZhY2MxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI4LDQiLz4KICA8cmVjdCB4PSIxMzAiIHk9IjE0IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjI2IiByeD0iNiIgZmlsbD0icmdiYSgxNSwyMyw0MiwwLjg1KSIgc3Ryb2tlPSIjZmJiZjI0Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIzMiIgZmlsbD0iI2ZiYmYyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNBU1RMRTwvdGV4dD4KPC9zdmc+"
  },
  {
    id: 'arctic',
    name: '❄️ ARCTIC',
    description: 'Polar glacial research base with modular science habs, satellite radar dishes, translucent ice blocks, and fuel drums.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXJjdGljU2t5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBjNGE2ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2UwZjJmZSIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImljZUdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjYmFlNmZkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NGM3Ii8+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMjAiIGZpbGw9InVybCgjYXJjdGljU2t5KSIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzAsMjA1IDM3MCwyMDUgMzIwLDExMCA4MCwxMTAiIGZpbGw9InVybCgjaWNlR3JhZCkiIHN0cm9rZT0iIzdkZDNmYyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8cmVjdCB4PSI4NSIgeT0iMTIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjZGMyNjI2IiBzdHJva2U9IiNmY2E1YTUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPGxpbmUgeDE9IjMwNSIgeTE9IjEyMCIgeDI9IjMwNSIgeTI9IjE1MCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIDxlbGxpcHNlIGN4PSIzMDUiIGN5PSIxMTUiIHJ4PSIxNCIgcnk9IjciIGZpbGw9IiNmOGZhZmMiIHN0cm9rZT0iIzY0NzQ4YiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8cmVjdCB4PSIxNTAiIHk9IjEzNSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjI2IiBmaWxsPSIjMzhiZGY4IiBzdHJva2U9IiNiYWU2ZmQiIHN0cm9rZS13aWR0aD0iMS4yIiBvcGFjaXR5PSIwLjg1Ii8+CiAgPHJlY3QgeD0iMjM1IiB5PSIxMzAiIHdpZHRoPSIyNiIgaGVpZ2h0PSIzMCIgZmlsbD0iIzM4YmRmOCIgc3Ryb2tlPSIjYmFlNmZkIiBzdHJva2Utd2lkdGg9IjEuMiIgb3BhY2l0eT0iMC44NSIvPgogIDxsaW5lIHgxPSI4MCIgeTE9IjE1MCIgeDI9IjMyMCIgeTI9IjE1MCIgc3Ryb2tlPSIjMDI4NGM3IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1kYXNoYXJyYXk9IjgsNCIvPgogIDxyZWN0IHg9IjEzMCIgeT0iMTQiIHdpZHRoPSIxNDAiIGhlaWdodD0iMjYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDEyLDc0LDExMCwwLjkpIiBzdHJva2U9IiMzOGJkZjgiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjMyIiBmaWxsPSIjZTBmMmZlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVJDVElDPC90ZXh0Pgo8L3N2Zz4="
  },
  {
    id: 'haunted',
    name: '👻 HAUNTED HOUSE',
    description: 'Eerie midnight graveyard featuring stone crypts, crooked tombstones, twisted dead trees, and glowing jack-o\'-lanterns.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaGF1bnRTa3kiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDkwNTE0Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMmUxMDY1Ii8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic3Bvb2t5R3JvdW5kIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE4MTgxYiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA5MDkwYiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjIwIiBmaWxsPSJ1cmwoI2hhdW50U2t5KSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjU1IiByPSIzMiIgZmlsbD0iI2ZlZjA4YSIgb3BhY2l0eT0iMC44Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwyMDUgMzcwLDIwNSAzMjAsMTEwIDgwLDExMCIgZmlsbD0idXJsKCNzcG9va3lHcm91bmQpIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHJlY3QgeD0iODUiIHk9IjEwNSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM1IiBmaWxsPSIjM2YzZjQ2IiBzdHJva2U9IiNhMWExYWEiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgPHBhdGggZD0iTSAxNDUsMTMwIEMgMTQ1LDEyMCAxNjAsMTIwIDE2MCwxMzAgTCAxNjAsMTUwIEwgMTQ1LDE1MCBaIiBmaWxsPSIjNzE3MTdhIiBzdHJva2U9IiNhMWExYWEiLz4KICA8ZWxsaXBzZSBjeD0iMTgwIiBjeT0iMTU1IiByeD0iOCIgcnk9IjciIGZpbGw9IiNlYTU4MGMiLz4KICA8ZWxsaXBzZSBjeD0iMjI1IiBjeT0iMTU1IiByeD0iOCIgcnk9IjciIGZpbGw9IiNlYTU4MGMiLz4KICA8cmVjdCB4PSIyODUiIHk9IjEwMCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjQ1IiBmaWxsPSIjMjcyNzJhIiBzdHJva2U9IiM3MTcxN2EiLz4KICA8bGluZSB4MT0iODAiIHkxPSIxNTAiIHgyPSIzMjAiIHkyPSIxNTAiIHN0cm9rZT0iI2MwODRmYyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjYsNCIvPgogIDxyZWN0IHg9IjExMCIgeT0iMTQiIHdpZHRoPSIxODAiIGhlaWdodD0iMjYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDE2LDEwMSwwLjkpIiBzdHJva2U9IiNjMDg0ZmMiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjMyIiBmaWxsPSIjZTlkNWZmIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SEFVTlRFRCBIT1VTRTwvdGV4dD4KPC9zdmc+"
  },
  {
    id: 'junkyard',
    name: '⚙️ JUNK YARD',
    description: 'Industrial scrap depot packed with crushed car stacks, metal shipping containers, tire piles, and scrap compressor bins.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ianVua1NreSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxODE4MWIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3ODM1MGYiLz48L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJtdWRHcmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQ1MWEwMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFjMTkxNyIvPjwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjIwIiBmaWxsPSJ1cmwoI2p1bmtTa3kpIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwyMDUgMzcwLDIwNSAzMjAsMTEwIDgwLDExMCIgZmlsbD0idXJsKCNtdWRHcmFkKSIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxyZWN0IHg9Ijg1IiB5PSIxMzAiIHdpZHRoPSIzOCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2I5MWMxYyIgc3Ryb2tlPSIjNDUwYTBhIiByeD0iMiIvPgogIDxyZWN0IHg9Ijg4IiB5PSIxMTgiIHdpZHRoPSIzNCIgaGVpZ2h0PSIxMiIgZmlsbD0iIzFkNGVkOCIgc3Ryb2tlPSIjMTcyNTU0IiByeD0iMiIvPgogIDxyZWN0IHg9IjI3NSIgeT0iMTEwIiB3aWR0aD0iNDUiIGhlaWdodD0iMzQiIGZpbGw9IiMwMzY5YTEiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8cmVjdCB4PSIxMzUiIHk9IjEzMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIyIiBmaWxsPSIjNTI1MjViIiBzdHJva2U9IiNhMWExYWEiLz4KICA8ZWxsaXBzZSBjeD0iMjMwIiBjeT0iMTU1IiByeD0iMTIiIHJ5PSI1IiBmaWxsPSIjMTgxODFiIiBzdHJva2U9IiMzZjNmNDYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxsaW5lIHgxPSI4MCIgeTE9IjE1MCIgeDI9IjMyMCIgeTI9IjE1MCIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1kYXNoYXJyYXk9IjYsNCIvPgogIDxyZWN0IHg9IjEyNSIgeT0iMTQiIHdpZHRoPSIxNTAiIGhlaWdodD0iMjYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDE1LDIzLDQyLDAuODUpIiBzdHJva2U9IiNmOTczMTYiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjMyIiBmaWxsPSIjZmI5MjNjIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SlVOSyBZQVJEPC90ZXh0Pgo8L3N2Zz4="
  },
  {
    id: 'pirate',
    name: '🏴‍☠️ PIRATE',
    description: 'Two opposing galleon quarterdecks across open ocean water with tall ship masts, cannons, rum barrels, and treasure chests.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2VhU2t5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA4MmY0OSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZkYmE3NCIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im9jZWFuR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMzY5YTEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwODJmNDkiLz48L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgZmlsbD0idXJsKCNzZWFTa3kpIi8+CiAgPHJlY3QgeD0iMCIgeT0iMTAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjEyMCIgZmlsbD0idXJsKCNvY2VhbkdyYWQpIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIxMjAsMTEwIDI4MCwxMTAgMjYwLDEzNSAxNDAsMTM1IiBmaWxsPSIjNzgzNTBmIiBzdHJva2U9IiNhMTYyMDciIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSI1MCwxNjUgMzUwLDE2NSAzOTAsMjIwIDEwLDIyMCIgZmlsbD0iIzc4MzUwZiIgc3Ryb2tlPSIjYTE2MjA3IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8bGluZSB4MT0iNzUiIHkxPSI2NSIgeDI9Ijc1IiB5Mj0iMTc1IiBzdHJva2U9IiM0NTFhMDMiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxsaW5lIHgxPSIzMjUiIHkxPSI2NSIgeDI9IjMyNSIgeTI9IjE3NSIgc3Ryb2tlPSIjNDUxYTAzIiBzdHJva2Utd2lkdGg9IjQiLz4KICA8cmVjdCB4PSIxMzUiIHk9IjE3MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIGZpbGw9IiMxODE4MWIiIHJ4PSIyIi8+CiAgPHJlY3QgeD0iMjUwIiB5PSIxNzAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTgxODFiIiByeD0iMiIvPgogIDxlbGxpcHNlIGN4PSIxODAiIGN5PSIxODUiIHJ4PSI3IiByeT0iOSIgZmlsbD0iIzkyNDAwZSIvPgogIDxyZWN0IHg9IjIxMCIgeT0iMTc4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIGZpbGw9IiNjYThhMDQiIHN0cm9rZT0iIzcxM2YxMiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8bGluZSB4MT0iMCIgeTE9IjE1MCIgeDI9IjQwMCIgeTI9IjE1MCIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjEwLDUiLz4KICA8cmVjdCB4PSIxMzAiIHk9IjE0IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjI2IiByeD0iNiIgZmlsbD0icmdiYSgxNSwyMyw0MiwwLjg1KSIgc3Ryb2tlPSIjZjU5ZTBiIi8+CiAgPHRleHQgeD0iMjAwIiB5PSIzMiIgZmlsbD0iI2ZiYmYyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBJUkFURTwvdGV4dD4KPC9zdmc+"
  },
  {
    id: 'arcade',
    name: '🕹️ ARCADE',
    description: 'Retro 80s synthwave neon cyber arcade hall with stand-up arcade cabinets, giant pixel blocks, and dance speaker towers.',
    previewImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXJjYWRlU2t5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE4MDQyOCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFlMTAzNSIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImN5YmVyRmxvb3IiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDkwNTE0Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTgwMDJlIi8+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMjAiIGZpbGw9InVybCgjYXJjYWRlU2t5KSIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzAsMjA1IDM3MCwyMDUgMzIwLDExMCA4MCwxMTAiIGZpbGw9InVybCgjY3liZXJGbG9vcikiIHN0cm9rZT0iI2VjNDg5OSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8cmVjdCB4PSI5MCIgeT0iMTA1IiB3aWR0aD0iMjIiIGhlaWdodD0iNDIiIGZpbGw9IiMxZTFiNGIiIHN0cm9rZT0iI2VjNDg5OSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8cmVjdCB4PSIxMTgiIHk9IjEwNSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSIjMWUxYjRiIiBzdHJva2U9IiNmYWNjMTUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHJlY3QgeD0iMjYwIiB5PSIxMDUiIHdpZHRoPSIyMiIgaGVpZ2h0PSI0MiIgZmlsbD0iIzFlMWI0YiIgc3Ryb2tlPSIjMDZiNmQ0IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxyZWN0IHg9IjE1NSIgeT0iMTMwIiB3aWR0aD0iMTgiIGhlaWdodD0iMjYiIGZpbGw9IiNlYzQ4OTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHJlY3QgeD0iMjI1IiB5PSIxMzAiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzA2YjZkNCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8bGluZSB4MT0iODAiIHkxPSIxNTAiIHgyPSIzMjAiIHkyPSIxNTAiIHN0cm9rZT0iI2Y0M2Y1ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtZGFzaGFycmF5PSI4LDQiLz4KICA8cmVjdCB4PSIxMzAiIHk9IjE0IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjI2IiByeD0iNiIgZmlsbD0icmdiYSgyNCw0LDQwLDAuOSkiIHN0cm9rZT0iI2VjNDg5OSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzIiIGZpbGw9IiNmNDcyYjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BUkNBREU8L3RleHQ+Cjwvc3ZnPg=="
  }
];

class VRGorillasGame {
  constructor() {
    this.myPlayerId = 1;
    this.activeTurnPlayer = 1;
    this.isSoloMode = false;
    this.scores = { 1: 0, 2: 0 };
    this.isGameOver = false;
    this.winnerId = null;

    this.selectedLevelIndex = 0;
    this.settings = {
      turnDuration: 30,
      bananasPerTurn: 5,
      scoreToWin: 3,
      levelId: 'arena'
    };

    this.turnTimeRemaining = 30;
    this.bananasLeftInTurn = 5;
    this.wind = new THREE.Vector3(0, 0, 0);
    this.gravity = -9.81;

    // Destructibles & dynamic level objects
    this.destructibles = [];
    this.activeBananas = [];
    this.explosionParticles = [];
    this.levelGroup = null;

    // WebXR & VR tracking
    this.xrSession = null;
    this.controllers = [];
    this.isInVR = false;
    this.bananaInHand = null;
    this.holdingController = null;
    this.holdingControllerIndex = null;
    this.controllerHistory = [[], []];

    // Raycaster for Side-Wall GUI
    this.raycaster = new THREE.Raycaster();
    this.vrClickables = [];

    // Desktop controls
    this.keys = {};
    this.mousePitch = 0;
    this.mouseYaw = 0;
    this.isPointerLocked = false;
    this.isChargingThrow = false;
    this.throwChargeTime = 0;

    // Authoritative Timer Reference
    this.masterTimerInterval = null;

    // Initialize UI and network callbacks first so the lobby is interactive immediately
    this.setupUI();
    this.setupNetworkCallbacks();

    // Initialize Three.js WebGL & WebXR scene
    try {
      this.initThreeJS();
    } catch (err) {
      console.error("ThreeJS initialization error:", err);
    }
  }

  initThreeJS() {
    const container = document.getElementById('game-container');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a101f);
    this.scene.fog = new THREE.FogExp2(0x0a101f, 0.012);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 250);
    this.camera.position.set(0, AVATAR_EYE_HEIGHT, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.xr.enabled = true;
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    this.playerRig = new THREE.Group();
    this.playerRig.position.set(0, 0, 16);
    this.playerRig.add(this.camera);
    this.scene.add(this.playerRig);

    const ambient = new THREE.AmbientLight(0xddeeff, 0.6);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff1cf, 1.25);
    sun.position.set(25, 55, 15);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    this.scene.add(sun);

    this.buildSideWallScoreboards();
    this.buildOpponentGorilla();
    this.buildEnvironment();
    this.setupWebXRControllers();
    this.setupDesktopInputs();

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.renderLoop());
  }

  // Build the active level (Arena vs City Scape)
  // Build the active level from the 10 available themes
  buildEnvironment() {
    if (this.levelGroup) {
      this.scene.remove(this.levelGroup);
    }
    this.levelGroup = new THREE.Group();
    this.scene.add(this.levelGroup);

    this.destructibles.forEach(d => this.scene.remove(d.mesh));
    this.destructibles = [];

    switch (this.settings.levelId) {
      case 'cityscape': this.buildCityScapeEnvironment(); break;
      case 'jungle':    this.buildJungleEnvironment(); break;
      case 'beach':     this.buildBeachEnvironment(); break;
      case 'castle':    this.buildCastleEnvironment(); break;
      case 'arctic':    this.buildArcticEnvironment(); break;
      case 'haunted':   this.buildHauntedEnvironment(); break;
      case 'junkyard':  this.buildJunkYardEnvironment(); break;
      case 'pirate':    this.buildPirateEnvironment(); break;
      case 'arcade':    this.buildArcadeEnvironment(); break;
      case 'arena':
      default:          this.buildArenaEnvironment(); break;
    }

    this.updateSideWallPositions();
    this.renderSideWallCanvas();
  }

  createVoxelHelper() {
    let pieceId = this.destructibles.length;
    return (x, y, z, sx, sy, sz, color) => {
      const geo = new THREE.BoxGeometry(sx, sy, sz);
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);

      this.destructibles.push({
        id: pieceId++,
        mesh: mesh,
        box: new THREE.Box3().setFromObject(mesh),
        color: color
      });
    };
  }

  // --- 1. ARENA ---
  buildArenaEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({
      color: 0x182030,
      roughness: 0.85,
      metalness: 0.1
    });
    const courtMesh = new THREE.Mesh(courtGeo, courtMat);
    courtMesh.rotation.x = -Math.PI / 2;
    courtMesh.receiveShadow = true;
    this.levelGroup.add(courtMesh);

    const gridHelper = new THREE.GridHelper(COURT_LENGTH, 25, 0x38bdf8, 0x1f293d);
    gridHelper.position.y = 0.02;
    this.levelGroup.add(gridHelper);

    // Center barrier
    const barrierGeo = new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2);
    const barrierMat = new THREE.MeshBasicMaterial({
      color: 0xff0055,
      transparent: true,
      opacity: 0.35,
      wireframe: true
    });
    const barrier = new THREE.Mesh(barrierGeo, barrierMat);
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    const pillarLocations = [
      { x: -6, z: 8 }, { x: 6, z: 8 },
      { x: 0, z: 12 }, { x: -7, z: 16 }, { x: 7, z: 16 }, { x: -3, z: 20 }, { x: 3, z: 20 },
      { x: -6, z: -8 }, { x: 6, z: -8 },
      { x: 0, z: -12 }, { x: -7, z: -16 }, { x: 7, z: -16 }, { x: -3, z: -20 }, { x: 3, z: -20 },
      { x: -8, z: 2 }, { x: 8, z: 2 }, { x: -8, z: -2 }, { x: 8, z: -2 }
    ];

    pillarLocations.forEach(p => {
      const bHeight = 1.4;
      const bSize = 1.5;
      const tiers = 4;
      for (let t = 0; t < tiers; t++) {
        const y = t * bHeight + bHeight / 2;
        const color = (t % 2 === 0) ? 0x475569 : 0x334155;
        addVoxel(p.x, y, p.z, bSize, bHeight, bSize, color);
      }
    });

    for (let z = -22; z <= 22; z += 4) {
      if (Math.abs(z) < 4.5) continue;
      addVoxel(-COURT_BOUNDARY_X - 0.6, 1.5, z, 1.2, 3.0, 3.5, 0x1e293b);
      addVoxel(COURT_BOUNDARY_X + 0.6, 1.5, z, 1.2, 3.0, 3.5, 0x1e293b);
    }
  }

  // --- 2. CITY SCAPE ---
  buildCityScapeEnvironment() {
    const ROOF_WIDTH = 26;
    const ROOF_DEPTH = 18;
    const TOWER_HEIGHT = 16;
    const CHASM_GAP = 14;

    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.8
    });

    const towerGeo1 = new THREE.BoxGeometry(ROOF_WIDTH, TOWER_HEIGHT, ROOF_DEPTH);
    const southTower = new THREE.Mesh(towerGeo1, towerMat);
    southTower.position.set(0, TOWER_HEIGHT / 2, CHASM_GAP / 2 + ROOF_DEPTH / 2);
    southTower.receiveShadow = true;
    this.levelGroup.add(southTower);

    const northTower = southTower.clone();
    northTower.position.set(0, TOWER_HEIGHT / 2, -(CHASM_GAP / 2 + ROOF_DEPTH / 2));
    this.levelGroup.add(northTower);

    const gridP1 = new THREE.GridHelper(ROOF_WIDTH, 14, 0x38bdf8, 0x1e293b);
    gridP1.position.set(0, TOWER_HEIGHT + 0.02, CHASM_GAP / 2 + ROOF_DEPTH / 2);
    this.levelGroup.add(gridP1);

    const gridP2 = new THREE.GridHelper(ROOF_WIDTH, 14, 0xf43f5e, 0x1e293b);
    gridP2.position.set(0, TOWER_HEIGHT + 0.02, -(CHASM_GAP / 2 + ROOF_DEPTH / 2));
    this.levelGroup.add(gridP2);

    const streetGeo = new THREE.PlaneGeometry(120, 120);
    const streetMat = new THREE.MeshStandardMaterial({ color: 0x050814, roughness: 0.9 });
    const street = new THREE.Mesh(streetGeo, streetMat);
    street.rotation.x = -Math.PI / 2;
    street.position.y = 0.01;
    this.levelGroup.add(street);

    const streetGrid = new THREE.GridHelper(120, 30, 0x00ffff, 0x181335);
    streetGrid.position.y = 0.05;
    this.levelGroup.add(streetGrid);

    const bldConfigs = [
      { x: -34, z: 0, w: 18, h: 28, d: 24, col: 0x111827 },
      { x: 34, z: 0, w: 18, h: 28, d: 24, col: 0x111827 },
      { x: -28, z: 28, w: 14, h: 22, d: 16, col: 0x1e1b4b },
      { x: 28, z: -28, w: 14, h: 22, d: 16, col: 0x1e1b4b },
      { x: 0, z: 42, w: 26, h: 24, d: 14, col: 0x0f172a },
      { x: 0, z: -42, w: 26, h: 24, d: 14, col: 0x0f172a }
    ];

    bldConfigs.forEach(b => {
      const bGeo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const bMat = new THREE.MeshStandardMaterial({ color: b.col, roughness: 0.85 });
      const bMesh = new THREE.Mesh(bGeo, bMat);
      bMesh.position.set(b.x, b.h / 2, b.z);
      this.levelGroup.add(bMesh);
    });

    const barrierGeo = new THREE.BoxGeometry(COURT_WIDTH, 6, 0.4);
    const barrierMat = new THREE.MeshBasicMaterial({
      color: 0xff0055,
      transparent: true,
      opacity: 0.28,
      wireframe: true
    });
    const chasmBarrier = new THREE.Mesh(barrierGeo, barrierMat);
    chasmBarrier.position.set(0, TOWER_HEIGHT + 3, 0);
    this.levelGroup.add(chasmBarrier);

    const addVoxel = this.createVoxelHelper();

    const buildWaterTower = (cx, cy, cz) => {
      const legOffset = 1.1;
      const legH = 2.4;
      [[-legOffset, -legOffset], [legOffset, -legOffset], [-legOffset, legOffset], [legOffset, legOffset]].forEach(([lx, lz]) => {
        addVoxel(cx + lx, cy + legH / 2, cz + lz, 0.35, legH, 0.35, 0x475569);
      });
      addVoxel(cx, cy + legH / 2, cz, 0.45, legH, 0.45, 0x334155);
      addVoxel(cx, cy + legH + 0.15, cz, 3.2, 0.3, 3.2, 0x1e293b);

      const tankBaseY = cy + legH + 0.3;
      const tankH = 1.4;
      const tCol = 0x78350f;
      const tColAlt = 0x92400e;

      addVoxel(cx - 0.75, tankBaseY + tankH / 2, cz - 0.75, 1.4, tankH, 1.4, tCol);
      addVoxel(cx + 0.75, tankBaseY + tankH / 2, cz - 0.75, 1.4, tankH, 1.4, tColAlt);
      addVoxel(cx - 0.75, tankBaseY + tankH / 2, cz + 0.75, 1.4, tankH, 1.4, tColAlt);
      addVoxel(cx + 0.75, tankBaseY + tankH / 2, cz + 0.75, 1.4, tankH, 1.4, tCol);

      addVoxel(cx - 0.75, tankBaseY + tankH + tankH / 2, cz - 0.75, 1.4, tankH, 1.4, tColAlt);
      addVoxel(cx + 0.75, tankBaseY + tankH + tankH / 2, cz - 0.75, 1.4, tankH, 1.4, tCol);
      addVoxel(cx - 0.75, tankBaseY + tankH + tankH / 2, cz + 0.75, 1.4, tankH, 1.4, tCol);
      addVoxel(cx + 0.75, tankBaseY + tankH + tankH / 2, cz + 0.75, 1.4, tankH, 1.4, tColAlt);

      addVoxel(cx, tankBaseY + tankH * 2 + 0.5, cz, 2.6, 1.0, 2.6, 0x451a03);
      addVoxel(cx, tankBaseY + tankH * 2 + 1.2, cz, 1.2, 0.6, 1.2, 0x3e1703);
    };

    const buildStaircaseBulkhead = (cx, cy, cz, facingZ) => {
      const bhW = 4.2;
      const bhH = 3.2;
      const bhD = 3.6;
      addVoxel(cx - bhW / 4, cy + bhH / 2, cz, bhW / 2, bhH, bhD, 0x334155);
      addVoxel(cx + bhW / 4, cy + bhH / 2, cz, bhW / 2, bhH, bhD, 0x475569);
      addVoxel(cx, cy + bhH + 0.2, cz, bhW + 0.4, 0.4, bhD + 0.4, 0x1e293b);
      addVoxel(cx, cy + bhH + 0.8, cz, 0.5, 0.8, 0.5, 0x94a3b8);
      addVoxel(cx, cy + 1.1, cz + (facingZ * (bhD / 2 + 0.1)), 1.2, 2.2, 0.2, 0x0284c7);

      const stepW = 1.6;
      const stepDepth = 0.9;
      for (let s = 1; s <= 3; s++) {
        const sH = s * 0.7;
        addVoxel(cx + (bhW / 2 + stepW / 2), cy + sH / 2, cz + (s - 2) * stepDepth, stepW, sH, stepDepth, 0x64748b);
      }
    };

    const buildHVACCluster = (cx, cy, cz, isLarge = true) => {
      if (isLarge) {
        addVoxel(cx, cy + 1.2, cz, 3.8, 2.4, 2.2, 0x475569);
        addVoxel(cx - 1.0, cy + 2.6, cz, 1.2, 0.4, 1.2, 0x1e293b);
        addVoxel(cx + 1.0, cy + 2.6, cz, 1.2, 0.4, 1.2, 0x1e293b);
        addVoxel(cx + 2.0, cy + 1.0, cz, 0.3, 1.4, 0.9, 0xfacc15);
      } else {
        addVoxel(cx, cy + 0.9, cz, 2.2, 1.8, 1.8, 0x334155);
        addVoxel(cx, cy + 1.95, cz, 1.2, 0.3, 1.2, 0x1e293b);
      }
      addVoxel(cx, cy + 0.4, cz + 2.0, 1.0, 0.8, 2.0, 0x94a3b8);
    };

    const buildChimneyAndAntenna = (cx, cy, cz) => {
      addVoxel(cx, cy + 1.8, cz, 1.4, 3.6, 1.4, 0x7f1d1d);
      addVoxel(cx + 1.2, cy + 3.0, cz, 0.25, 6.0, 0.25, 0xe2e8f0);
      addVoxel(cx + 1.2, cy + 6.1, cz, 0.35, 0.35, 0.35, 0xef4444);
    };

    const p1Z = CHASM_GAP / 2 + ROOF_DEPTH / 2;
    const p2Z = -(CHASM_GAP / 2 + ROOF_DEPTH / 2);
    const rY = TOWER_HEIGHT;

    // South Rooftop (P1)
    buildWaterTower(7.5, rY, p1Z + 4.5);
    buildStaircaseBulkhead(-7.0, rY, p1Z + 4.0, -1);
    buildHVACCluster(-5.2, rY, p1Z - 3.8, true);
    buildHVACCluster(5.0, rY, p1Z - 3.5, false);
    buildChimneyAndAntenna(9.5, rY, p1Z - 0.5);
    addVoxel(0, rY + 0.6, p1Z - 5.5, 3.4, 1.2, 0.8, 0x334155);

    // North Rooftop (P2)
    buildWaterTower(-7.5, rY, p2Z - 4.5);
    buildStaircaseBulkhead(7.0, rY, p2Z - 4.0, 1);
    buildHVACCluster(5.2, rY, p2Z + 3.8, true);
    buildHVACCluster(-5.0, rY, p2Z + 3.5, false);
    buildChimneyAndAntenna(-9.5, rY, p2Z + 0.5);
    addVoxel(0, rY + 0.6, p2Z + 5.5, 3.4, 1.2, 0.8, 0x334155);

    [-COURT_BOUNDARY_X + 0.6, COURT_BOUNDARY_X - 0.6].forEach(px => {
      for (let pz = -6; pz <= 6; pz += 3) {
        addVoxel(px, rY + 0.8, p1Z + pz, 1.0, 1.6, 2.6, 0x1e293b);
        addVoxel(px, rY + 0.8, p2Z + pz, 1.0, 1.6, 2.6, 0x1e293b);
      }
    });
  }

  // --- 3. JUNGLE ---
  buildJungleEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0x10b981, 0x052e16);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0x16a34a, transparent: true, opacity: 0.35, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 6, 2.0, zBase + 4 * side, 2.0, 4.0, 2.0, 0x475569);
      addVoxel(side * 6, 4.5, zBase + 4 * side, 2.6, 1.0, 2.6, 0x334155);
      addVoxel(-side * 8, 2.5, zBase, 1.4, 5.0, 1.4, 0x78350f);
      addVoxel(-side * 8, 5.5, zBase, 4.0, 2.5, 4.0, 0x15803d);
      addVoxel(side * 3, 0.9, zBase - 3 * side, 1.8, 1.8, 1.8, 0xa16207);
      addVoxel(side * 3, 2.3, zBase - 3 * side, 1.4, 1.4, 1.4, 0x854d0e);
      addVoxel(0, 1.2, zBase - 5 * side, 4.5, 2.4, 1.2, 0x334155);
      addVoxel(-11, 2.0, zBase, 1.2, 4.0, 1.2, 0x78350f);
      addVoxel(11, 2.0, zBase, 1.2, 4.0, 1.2, 0x78350f);
    });
  }

  // --- 4. BEACH ---
  buildBeachEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0xfde047, roughness: 0.95 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0x38bdf8, 0xca8a04);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.35, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 7, 1.2, zBase + 3 * side, 0.4, 2.4, 0.4, 0x78350f);
      addVoxel(side * 7 + 2, 1.2, zBase + 3 * side, 0.4, 2.4, 0.4, 0x78350f);
      addVoxel(side * 7 + 1, 2.8, zBase + 3 * side, 3.6, 1.2, 3.2, 0xca8a04);
      addVoxel(-side * 7, 2.0, zBase + 2 * side, 2.5, 4.0, 2.5, 0xdc2626);
      addVoxel(-side * 7, 4.4, zBase + 2 * side, 3.2, 0.8, 3.2, 0xffffff);
      addVoxel(side * 4, 2.5, zBase - 4 * side, 0.8, 5.0, 0.8, 0x78350f);
      addVoxel(side * 4, 5.2, zBase - 4 * side, 3.5, 1.0, 3.5, 0x16a34a);
      addVoxel(-side * 3, 0.8, zBase - 2 * side, 2.2, 1.6, 1.8, 0x0284c7);
      addVoxel(0, 0.6, zBase - 5 * side, 3.2, 1.2, 1.0, 0xd97706);
    });
  }

  // --- 5. CASTLE ---
  buildCastleEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0xfacc15, 0x0f172a);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0xdc2626, transparent: true, opacity: 0.35, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 6, 1.2, zBase + 3 * side, 3.6, 2.4, 2.2, 0x78350f);
      addVoxel(side * 6, 2.8, zBase + 3 * side, 0.6, 2.0, 2.6, 0x92400e);
      addVoxel(-side * 6, 2.2, zBase + 2 * side, 4.0, 4.4, 3.0, 0x475569);
      addVoxel(-side * 6, 4.8, zBase + 2 * side, 4.4, 1.0, 3.4, 0x1e293b);
      addVoxel(0, 1.0, zBase - 5 * side, 4.2, 2.0, 1.2, 0x475569);
      addVoxel(side * 3, 1.8, zBase - 2 * side, 1.4, 3.6, 1.4, 0x64748b);
      addVoxel(-side * 3, 1.8, zBase - 2 * side, 1.4, 3.6, 1.4, 0x64748b);
    });
  }

  // --- 6. ARCTIC ---
  buildArcticEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0xbae6fd, roughness: 0.4 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0x38bdf8, 0x0284c7);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.35, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 6, 1.6, zBase + 3 * side, 4.5, 3.2, 3.0, 0xdc2626);
      addVoxel(side * 6, 3.4, zBase + 3 * side, 2.0, 0.8, 2.0, 0xffffff);
      addVoxel(-side * 6, 1.5, zBase + 2 * side, 0.6, 3.0, 0.6, 0x94a3b8);
      addVoxel(-side * 6, 3.4, zBase + 2 * side, 3.0, 1.6, 0.8, 0xf8fafc);
      addVoxel(side * 3, 1.2, zBase - 3 * side, 2.4, 2.4, 2.4, 0x38bdf8);
      addVoxel(-side * 3, 1.0, zBase - 3 * side, 2.0, 2.0, 2.0, 0x7dd3fc);
      addVoxel(0, 0.7, zBase - 5 * side, 3.2, 1.4, 1.4, 0xea580c);
    });
  }

  // --- 7. HAUNTED HOUSE ---
  buildHauntedEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.95 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0xa855f7, 0x09090b);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.35, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 6, 2.0, zBase + 3 * side, 4.0, 4.0, 3.6, 0x3f3f46);
      addVoxel(side * 6, 4.3, zBase + 3 * side, 4.4, 0.8, 4.0, 0x18181b);
      addVoxel(-side * 7, 2.2, zBase + 2 * side, 1.0, 4.4, 1.0, 0x27272a);
      addVoxel(-side * 7, 4.6, zBase + 2 * side, 2.8, 0.8, 2.8, 0x18181b);
      addVoxel(side * 3, 1.0, zBase - 3 * side, 1.4, 2.0, 0.6, 0x71717a);
      addVoxel(-side * 3, 1.0, zBase - 3 * side, 1.4, 2.0, 0.6, 0x71717a);
      addVoxel(0, 0.6, zBase - 5 * side, 3.0, 1.2, 1.2, 0xea580c);
    });
  }

  // --- 8. JUNK YARD ---
  buildJunkYardEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0xf97316, 0x1c1917);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.35, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 6, 0.7, zBase + 3 * side, 4.0, 1.4, 2.2, 0xb91c1c);
      addVoxel(side * 6, 2.0, zBase + 3 * side, 3.6, 1.2, 2.0, 0x1d4ed8);
      addVoxel(side * 6, 3.1, zBase + 3 * side, 3.2, 1.0, 1.8, 0xca8a04);
      addVoxel(-side * 6, 1.6, zBase + 2 * side, 3.0, 3.2, 5.0, 0x0369a1);
      addVoxel(side * 3, 1.1, zBase - 3 * side, 2.5, 2.2, 2.0, 0x52525b);
      addVoxel(-side * 3, 0.8, zBase - 3 * side, 2.2, 1.6, 2.2, 0x18181b);
      addVoxel(0, 0.8, zBase - 5 * side, 3.4, 1.6, 1.2, 0x9a3412);
    });
  }

  // --- 9. PIRATE (Opposing Galleon Decks on Water) ---
  buildPirateEnvironment() {
    const DECK_W = 26;
    const DECK_D = 18;
    const SHIP_H = 4.5;
    const WATER_GAP = 14;

    const ocean = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.2, metalness: 0.4 })
    );
    ocean.rotation.x = -Math.PI / 2;
    this.levelGroup.add(ocean);

    const hullMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
    const deck1 = new THREE.Mesh(new THREE.BoxGeometry(DECK_W, SHIP_H, DECK_D), hullMat);
    deck1.position.set(0, SHIP_H / 2, WATER_GAP / 2 + DECK_D / 2);
    this.levelGroup.add(deck1);

    const deck2 = deck1.clone();
    deck2.position.set(0, SHIP_H / 2, -(WATER_GAP / 2 + DECK_D / 2));
    this.levelGroup.add(deck2);

    const g1 = new THREE.GridHelper(DECK_W, 14, 0xfbbf24, 0x451a03);
    g1.position.set(0, SHIP_H + 0.02, WATER_GAP / 2 + DECK_D / 2);
    this.levelGroup.add(g1);
    const g2 = new THREE.GridHelper(DECK_W, 14, 0xfbbf24, 0x451a03);
    g2.position.set(0, SHIP_H + 0.02, -(WATER_GAP / 2 + DECK_D / 2));
    this.levelGroup.add(g2);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(DECK_W, 6, 0.4),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.28, wireframe: true })
    );
    barrier.position.set(0, SHIP_H + 3, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * (WATER_GAP / 2 + DECK_D / 2);
      addVoxel(side * 7, SHIP_H + 3.5, zBase + 4 * side, 1.0, 7.0, 1.0, 0x451a03);
      addVoxel(side * 7, SHIP_H + 6.0, zBase + 4 * side, 2.8, 1.0, 2.8, 0x78350f);
      addVoxel(-side * 5, SHIP_H + 0.8, zBase - 4 * side, 1.4, 1.6, 2.6, 0x18181b);
      addVoxel(side * 2, SHIP_H + 0.8, zBase - 4 * side, 1.4, 1.6, 2.6, 0x18181b);
      addVoxel(-side * 7, SHIP_H + 1.2, zBase + 2 * side, 2.5, 2.4, 2.0, 0x92400e);
      addVoxel(side * 4, SHIP_H + 0.6, zBase + 2 * side, 1.8, 1.2, 1.4, 0xca8a04);
      addVoxel(0, SHIP_H + 1.2, zBase + 5 * side, 1.6, 2.4, 1.6, 0x451a03);
      addVoxel(0, SHIP_H + 0.6, zBase - 6.5 * side, 4.0, 1.2, 0.8, 0x78350f);
    });
  }

  // --- 10. ARCADE ---
  buildArcadeEnvironment() {
    const courtGeo = new THREE.PlaneGeometry(COURT_WIDTH, COURT_LENGTH);
    const courtMat = new THREE.MeshStandardMaterial({ color: 0x090514, roughness: 0.3 });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.rotation.x = -Math.PI / 2;
    this.levelGroup.add(court);

    const grid = new THREE.GridHelper(COURT_LENGTH, 25, 0xec4899, 0x06b6d4);
    grid.position.y = 0.02;
    this.levelGroup.add(grid);

    const barrier = new THREE.Mesh(
      new THREE.BoxGeometry(COURT_WIDTH, 4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.45, wireframe: true })
    );
    barrier.position.set(0, 2, 0);
    this.levelGroup.add(barrier);

    const addVoxel = this.createVoxelHelper();
    [-1, 1].forEach(side => {
      const zBase = side * 16;
      addVoxel(side * 6, 1.8, zBase + 3 * side, 2.2, 3.6, 2.0, 0x1e1b4b);
      addVoxel(side * 6, 2.2, zBase + 3 * side + (side * 0.9), 1.6, 1.4, 0.2, 0x06b6d4);
      addVoxel(side * 8, 1.8, zBase + 3 * side, 2.2, 3.6, 2.0, 0x1e1b4b);
      addVoxel(side * 8, 2.2, zBase + 3 * side + (side * 0.9), 1.6, 1.4, 0.2, 0xec4899);
      addVoxel(-side * 6, 1.5, zBase + 2 * side, 3.0, 3.0, 2.4, 0x8b5cf6);
      addVoxel(-side * 6, 3.4, zBase + 2 * side, 1.8, 1.8, 1.8, 0xec4899);
      addVoxel(side * 3, 1.6, zBase - 3 * side, 2.0, 3.2, 1.8, 0x180428);
      addVoxel(-side * 3, 1.6, zBase - 3 * side, 2.0, 3.2, 1.8, 0x180428);
      addVoxel(0, 0.9, zBase - 5 * side, 4.0, 1.8, 1.2, 0x06b6d4);
    });
  }
  updateSideWallPositions() {
    let boardY = 4.4;
    if (this.settings.levelId === 'cityscape') {
      boardY = 16 + 4.4;
    } else if (this.settings.levelId === 'pirate') {
      boardY = 4.5 + 4.4;
    }
    this.sideBoardGroups.forEach(group => {
      group.position.y = boardY;
    });
  }
  buildOpponentGorilla() {
    this.remoteGorilla = new THREE.Group();
    const bodyGeo = new THREE.BoxGeometry(1.4, 1.8, 1.0);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.9 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 1.3;
    this.remoteGorilla.add(body);

    const headGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x4e342e });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 2.4;
    this.remoteGorilla.add(head);

    const faceGeo = new THREE.BoxGeometry(0.7, 0.4, 0.2);
    const faceMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.set(0, 2.4, -0.46);
    this.remoteGorilla.add(face);

    const handGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const handMat = new THREE.MeshStandardMaterial({ color: 0x271915 });
    this.remoteLeftHand = new THREE.Mesh(handGeo, handMat);
    this.remoteLeftHand.position.set(-0.85, 1.2, -0.2);
    this.remoteRightHand = new THREE.Mesh(handGeo, handMat);
    this.remoteRightHand.position.set(0.85, 1.2, -0.2);
    this.remoteGorilla.add(this.remoteLeftHand);
    this.remoteGorilla.add(this.remoteRightHand);

    this.remoteGorilla.position.set(0, 0, -16);
    this.scene.add(this.remoteGorilla);
  }

  buildSideWallScoreboards() {
    this.sideBoardGroups = [];

    this.sideCanvas = document.createElement('canvas');
    this.sideCanvas.width = 1024;
    this.sideCanvas.height = 512;
    this.sideCanvasCtx = this.sideCanvas.getContext('2d');
    this.sideTexture = new THREE.CanvasTexture(this.sideCanvas);

    const frameGeo = new THREE.BoxGeometry(0.5, 5.8, 10.4);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });

    const createBoardBtn = (name, label, width, height, colorHex, textColHex = '#ffffff') => {
      const btnGroup = new THREE.Group();
      const boxMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, height, width),
        new THREE.MeshStandardMaterial({
          color: colorHex,
          roughness: 0.25,
          metalness: 0.1,
          emissive: colorHex,
          emissiveIntensity: 0.15
        })
      );
      boxMesh.name = name;
      btnGroup.add(boxMesh);

      const bCanvas = document.createElement('canvas');
      bCanvas.width = 512;
      bCanvas.height = 128;
      const bCtx = bCanvas.getContext('2d');
      bCtx.fillStyle = '#' + new THREE.Color(colorHex).getHexString();
      bCtx.fillRect(0, 0, 512, 128);
      bCtx.fillStyle = textColHex;
      bCtx.font = 'bold 44px sans-serif';
      bCtx.textAlign = 'center';
      bCtx.textBaseline = 'middle';
      bCtx.fillText(label, 256, 64);

      const bTex = new THREE.CanvasTexture(bCanvas);
      const labelMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(width * 0.95, height * 0.88),
        new THREE.MeshBasicMaterial({ map: bTex, side: THREE.DoubleSide })
      );
      labelMesh.name = name;
      btnGroup.add(labelMesh);

      return { group: btnGroup, clickable: boxMesh, labelMesh };
    };

    // Left Wall Board
    const leftBoardGroup = new THREE.Group();
    leftBoardGroup.position.set(-COURT_BOUNDARY_X - 0.4, 4.4, 0);
    leftBoardGroup.add(new THREE.Mesh(frameGeo, frameMat));

    const leftScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(9.6, 4.8),
      new THREE.MeshBasicMaterial({ map: this.sideTexture, side: THREE.DoubleSide })
    );
    leftScreen.position.set(0.27, 0, 0);
    leftScreen.rotation.y = Math.PI / 2;
    leftBoardGroup.add(leftScreen);

    // Prev Level Button
    const lPrev = createBoardBtn('VR_PREV_LEVEL_BTN', '◀ PREV MAP', 2.5, 0.75, 0x1e293b, '#38bdf8');
    lPrev.group.position.set(0.38, -2.1, -2.8);
    lPrev.labelMesh.position.set(0.18, 0, 0);
    lPrev.labelMesh.rotation.y = Math.PI / 2;
    leftBoardGroup.add(lPrev.group);
    this.vrClickables.push(lPrev.clickable);

    // Restart Match Button
    const lRestart = createBoardBtn('VR_RESTART_BTN', '🔄 RESTART', 3.2, 0.75, 0x0284c7, '#ffffff');
    lRestart.group.position.set(0.38, -2.1, 0);
    lRestart.labelMesh.position.set(0.18, 0, 0);
    lRestart.labelMesh.rotation.y = Math.PI / 2;
    leftBoardGroup.add(lRestart.group);
    this.vrClickables.push(lRestart.clickable);

    // Next Level Button
    const lNext = createBoardBtn('VR_NEXT_LEVEL_BTN', 'NEXT MAP ▶', 2.5, 0.75, 0x1e293b, '#38bdf8');
    lNext.group.position.set(0.38, -2.1, 2.8);
    lNext.labelMesh.position.set(0.18, 0, 0);
    lNext.labelMesh.rotation.y = Math.PI / 2;
    leftBoardGroup.add(lNext.group);
    this.vrClickables.push(lNext.clickable);

    this.scene.add(leftBoardGroup);
    this.sideBoardGroups.push(leftBoardGroup);

    // Right Wall Board
    const rightBoardGroup = new THREE.Group();
    rightBoardGroup.position.set(COURT_BOUNDARY_X + 0.4, 4.4, 0);
    rightBoardGroup.add(new THREE.Mesh(frameGeo, frameMat));

    const rightScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(9.6, 4.8),
      new THREE.MeshBasicMaterial({ map: this.sideTexture, side: THREE.DoubleSide })
    );
    rightScreen.position.set(-0.27, 0, 0);
    rightScreen.rotation.y = -Math.PI / 2;
    rightBoardGroup.add(rightScreen);

    const rPrev = createBoardBtn('VR_PREV_LEVEL_BTN', '◀ PREV MAP', 2.5, 0.75, 0x1e293b, '#38bdf8');
    rPrev.group.position.set(-0.38, -2.1, 2.8);
    rPrev.labelMesh.position.set(-0.18, 0, 0);
    rPrev.labelMesh.rotation.y = -Math.PI / 2;
    rightBoardGroup.add(rPrev.group);
    this.vrClickables.push(rPrev.clickable);

    const rRestart = createBoardBtn('VR_RESTART_BTN', '🔄 RESTART', 3.2, 0.75, 0x0284c7, '#ffffff');
    rRestart.group.position.set(-0.38, -2.1, 0);
    rRestart.labelMesh.position.set(-0.18, 0, 0);
    rRestart.labelMesh.rotation.y = -Math.PI / 2;
    rightBoardGroup.add(rRestart.group);
    this.vrClickables.push(rRestart.clickable);

    const rNext = createBoardBtn('VR_NEXT_LEVEL_BTN', 'NEXT MAP ▶', 2.5, 0.75, 0x1e293b, '#38bdf8');
    rNext.group.position.set(-0.38, -2.1, -2.8);
    rNext.labelMesh.position.set(-0.18, 0, 0);
    rNext.labelMesh.rotation.y = -Math.PI / 2;
    rightBoardGroup.add(rNext.group);
    this.vrClickables.push(rNext.clickable);

    this.scene.add(rightBoardGroup);
    this.sideBoardGroups.push(rightBoardGroup);

    this.renderSideWallCanvas();
  }

  renderSideWallCanvas() {
    if (!this.sideCanvasCtx) return;
    const ctx = this.sideCanvasCtx;
    ctx.clearRect(0, 0, 1024, 512);

    ctx.fillStyle = '#070d19';
    ctx.fillRect(0, 0, 1024, 512);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, 1004, 492);

    ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.fillRect(20, 20, 984, 85);

    if (this.isGameOver) {
      const isWinner = (this.winnerId === this.myPlayerId);
      ctx.fillStyle = isWinner ? '#22c55e' : '#ef4444';
      ctx.fillRect(20, 20, 984, 85);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 64px sans-serif';
      ctx.fillText(isWinner ? '🏆 YOU WIN! 🏆' : '💀 YOU LOSE! 💀', 512, 80);
    } else {
      ctx.textAlign = 'center';
      const isMyTurn = (this.activeTurnPlayer === this.myPlayerId);
      ctx.fillStyle = isMyTurn ? '#4ade80' : '#facc15';
      ctx.font = 'bold 46px sans-serif';
      ctx.fillText(isMyTurn ? '👉 YOUR TURN TO THROW' : `PLAYER ${this.activeTurnPlayer}'S TURN`, 512, 75);
    }

    ctx.textAlign = 'left';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('PLAYER 1', 60, 160);
    ctx.font = 'bold 84px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${this.scores[1]}`, 100, 245);

    ctx.textAlign = 'right';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillStyle = '#f87171';
    ctx.fillText('PLAYER 2', 964, 160);
    ctx.font = 'bold 84px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${this.scores[2]}`, 924, 245);

    ctx.textAlign = 'center';
    if (!this.isGameOver) {
      ctx.font = 'bold 82px sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(`${this.turnTimeRemaining}s`, 512, 195);

      ctx.font = 'bold 30px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(`🍌 ${this.bananasLeftInTurn} Bananas Left | Goal: ${this.settings.scoreToWin} Hits`, 512, 245);
    } else {
      ctx.font = 'bold 44px sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(`FINAL: ${this.scores[1]} - ${this.scores[2]}`, 512, 205);
      ctx.font = 'bold 28px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Aim Quest laser at the Restart button below to play again', 512, 248);
    }

    const speed = this.wind.length().toFixed(1);
    const dirTxt = (this.wind.x > 0.5) ? 'EAST ➔' : (this.wind.x < -0.5) ? '⬅ WEST' : 'CALM';
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(40, 280, 944, 52);
    ctx.font = 'bold 30px sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText(`WIND COND: ${speed} m/s (${dirTxt})`, 512, 316);

    // Scoreboard Map Carousel Bar
    const curLevel = LEVEL_DEFINITIONS.find(l => l.id === this.settings.levelId) || LEVEL_DEFINITIONS[0];
    const curIdx = LEVEL_DEFINITIONS.findIndex(l => l.id === this.settings.levelId);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(40, 345, 944, 75);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 345, 944, 75);

    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`MAP SELECT [${(curIdx !== -1 ? curIdx : 0) + 1} / ${LEVEL_DEFINITIONS.length}]`, 512, 372);

    ctx.font = '900 34px sans-serif';
    ctx.fillStyle = '#facc15';
    ctx.fillText(`◀  ${curLevel.name}  ▶`, 512, 408);

    ctx.font = 'italic 20px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Aim Quest Controller laser at wall buttons below to browse maps & restart', 512, 465);

    this.sideTexture.needsUpdate = true;
  }
  setupWebXRControllers() {
    for (let i = 0; i < 2; i++) {
      const controller = this.renderer.xr.getController(i);
      controller.addEventListener('selectstart', (e) => this.onVRTriggerDown(e.target, i));
      controller.addEventListener('selectend', (e) => this.onVRTriggerUp(e.target, i));
      this.playerRig.add(controller);
      this.controllers.push(controller);

      const handMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        new THREE.MeshStandardMaterial({ color: (i === 0) ? 0x38bdf8 : 0xfacc15 })
      );
      controller.add(handMesh);

      const rayGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -28)
      ]);
      const rayMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.65
      });
      const rayLine = new THREE.Line(rayGeo, rayMat);
      rayLine.name = "pointerRay";
      controller.add(rayLine);
    }

    const enterVRBtn = document.getElementById('btn-vr-enter');
    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-vr').then(supported => {
        if (supported) {
          enterVRBtn.addEventListener('click', () => this.startVRSession());
        } else {
          enterVRBtn.innerText = "VR Not Detected";
          enterVRBtn.style.opacity = "0.5";
        }
      });
    }
  }

  async startVRSession() {
    try {
      const session = await navigator.xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking']
      });
      this.renderer.xr.setSession(session);
      this.xrSession = session;
      this.isInVR = true;
      document.getElementById('btn-vr-enter').innerText = "In VR Mode";
    } catch (err) {
      console.error("Failed to start WebXR session:", err);
    }
  }

  onVRTriggerDown(controller, index) {
    const tempMatrix = new THREE.Matrix4();
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    const rayDir = new THREE.Vector3(0, 0, -1).applyMatrix4(tempMatrix).normalize();
    const rayOrigin = new THREE.Vector3();
    controller.getWorldPosition(rayOrigin);

    this.raycaster.set(rayOrigin, rayDir);
    const hits = this.raycaster.intersectObjects(this.vrClickables, true);
    if (hits.length > 0) {
      const hitName = hits[0].object.name;
      window.soundFX.playBananaReady();

      if (hitName === 'VR_RESTART_BTN') {
        this.triggerMatchRestart();
        return;
      }

      if (hitName === 'VR_PREV_LEVEL_BTN') {
        let idx = LEVEL_DEFINITIONS.findIndex(l => l.id === this.settings.levelId);
        idx = (idx - 1 + LEVEL_DEFINITIONS.length) % LEVEL_DEFINITIONS.length;
        this.changeLevelInMatch(LEVEL_DEFINITIONS[idx].id);
        return;
      }

      if (hitName === 'VR_NEXT_LEVEL_BTN') {
        let idx = LEVEL_DEFINITIONS.findIndex(l => l.id === this.settings.levelId);
        idx = (idx + 1) % LEVEL_DEFINITIONS.length;
        this.changeLevelInMatch(LEVEL_DEFINITIONS[idx].id);
        return;
      }
    }

    if (this.isGameOver) return;
    if (this.activeTurnPlayer !== this.myPlayerId) return;
    if (this.bananasLeftInTurn <= 0) return;
    if (this.bananaInHand) return;

    this.bananaInHand = this.createBananaMesh();
    controller.add(this.bananaInHand);
    this.holdingController = controller;
    this.holdingControllerIndex = index;
    this.controllerHistory[index] = [];
    window.soundFX.playBananaReady();
  }

  changeLevelInMatch(newLevelId) {
    this.settings.levelId = newLevelId;
    window.networkManager.send({
      type: 'LEVEL_CHANGE',
      levelId: newLevelId
    });
    this.resetMatch();
  }
  onVRTriggerUp(controller, index) {
    if (this.bananaInHand && this.holdingController === controller) {
      const worldPos = new THREE.Vector3();
      controller.getWorldPosition(worldPos);

      const ctrlRot = new THREE.Quaternion();
      controller.getWorldQuaternion(ctrlRot);
      const pointDir = new THREE.Vector3(0, 0, -1).applyQuaternion(ctrlRot).normalize();

      const history = this.controllerHistory[index];
      let swingVel = new THREE.Vector3(0, 0, 0);

      if (history.length >= 2) {
        const newest = history[history.length - 1];
        let oldest = history[0];
        for (let i = history.length - 2; i >= 0; i--) {
          if (newest.time - history[i].time >= 0.07) {
            oldest = history[i];
            break;
          }
        }
        const dt = Math.max(newest.time - oldest.time, 0.015);
        swingVel.subVectors(newest.pos, oldest.pos).divideScalar(dt);
      }

      const rawSpeed = swingVel.length();
      let launchDir = new THREE.Vector3();
      if (rawSpeed > 1.2) {
        const normSwing = swingVel.clone().normalize();
        launchDir.addScaledVector(normSwing, 0.75);
        launchDir.addScaledVector(pointDir, 0.25);
        launchDir.normalize();
      } else {
        launchDir.copy(pointDir).add(new THREE.Vector3(0, 0.25, 0)).normalize();
      }

      let finalSpeed = 8.0 + rawSpeed * 4.2;
      finalSpeed = Math.min(Math.max(finalSpeed, 6.0), 36.0);

      const throwVel = launchDir.multiplyScalar(finalSpeed);

      controller.remove(this.bananaInHand);
      this.spawnBananaProjectile(worldPos, throwVel, true);

      this.bananaInHand = null;
      this.holdingController = null;
      this.holdingControllerIndex = null;
    }
  }

  setupDesktopInputs() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    const canvas = this.renderer.domElement;
    canvas.addEventListener('click', () => {
      if (!this.isInVR && !this.isPointerLocked) {
        canvas.requestPointerLock();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = (document.pointerLockElement === canvas);
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPointerLocked || this.isInVR) return;
      const sensitivity = 0.0024;
      this.mouseYaw -= e.movementX * sensitivity;
      this.mousePitch -= e.movementY * sensitivity;
      this.mousePitch = Math.max(-Math.PI / 2.3, Math.min(Math.PI / 2.3, this.mousePitch));

      this.playerRig.rotation.y = this.mouseYaw;
      this.camera.rotation.x = this.mousePitch;
    });

    window.addEventListener('mousedown', (e) => {
      if (e.button === 0 && this.isPointerLocked && !this.isInVR) {
        if (!this.isGameOver && this.activeTurnPlayer === this.myPlayerId && this.bananasLeftInTurn > 0) {
          this.isChargingThrow = true;
          this.throwChargeTime = 0;
          document.getElementById('throw-power-container').classList.remove('hidden');
          window.soundFX.playBananaReady();
        }
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0 && this.isChargingThrow) {
        this.isChargingThrow = false;
        document.getElementById('throw-power-container').classList.add('hidden');
        document.getElementById('throw-power-bar').style.width = '0%';

        const chargeRatio = Math.min(this.throwChargeTime / 1.5, 1.0);
        const speed = 10 + chargeRatio * 22;

        const dir = new THREE.Vector3();
        this.camera.getWorldDirection(dir);

        const spawnPos = new THREE.Vector3();
        this.camera.getWorldPosition(spawnPos);
        spawnPos.add(dir.clone().multiplyScalar(0.7));

        const velocity = dir.multiplyScalar(speed);
        this.spawnBananaProjectile(spawnPos, velocity, true);
      }
    });
  }

  createBananaMesh() {
    const bananaGroup = new THREE.Group();
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.25, 0, 0),
      new THREE.Vector3(0, 0.15, 0),
      new THREE.Vector3(0.25, 0, 0)
    );
    const tubeGeo = new THREE.TubeGeometry(curve, 10, 0.06, 8, false);
    const bananaMat = new THREE.MeshStandardMaterial({
      color: 0xffe135,
      roughness: 0.3,
      emissive: 0x443300
    });
    const mesh = new THREE.Mesh(tubeGeo, bananaMat);
    mesh.castShadow = true;
    bananaGroup.add(mesh);
    return bananaGroup;
  }

  spawnBananaProjectile(position, velocity, isLocalThrow = false) {
    const mesh = this.createBananaMesh();
    mesh.position.copy(position);
    this.scene.add(mesh);

    const projectile = {
      mesh: mesh,
      velocity: velocity.clone(),
      ownerId: isLocalThrow ? this.myPlayerId : (3 - this.myPlayerId),
      alive: true
    };
    this.activeBananas.push(projectile);

    window.soundFX.playBananaThrow();

    if (isLocalThrow) {
      this.bananasLeftInTurn = Math.max(0, this.bananasLeftInTurn - 1);
      this.updateHUD();

      window.networkManager.send({
        type: 'BANANA_THROW',
        pos: { x: position.x, y: position.y, z: position.z },
        vel: { x: velocity.x, y: velocity.y, z: velocity.z },
        remainingBananas: this.bananasLeftInTurn
      });

      if (this.bananasLeftInTurn <= 0) {
        this.requestTurnPass();
      }
    }
  }

  setupUI() {
    const micBtn = document.getElementById('btn-mic-toggle');
    micBtn.addEventListener('click', async () => {
      if (!window.networkManager.localStream) {
        await window.networkManager.setupLocalMicrophone();
      }
      const isLive = window.networkManager.toggleMicrophone();
      micBtn.className = isLive ? 'hud-btn mic-on' : 'hud-btn mic-muted';
      micBtn.innerText = isLive ? '🎙️ Mic: ON' : '🔇 Mic: OFF';
    });

    // Level carousel listeners
    const updateLevelDisplay = () => {
      const current = LEVEL_DEFINITIONS[this.selectedLevelIndex];
      document.getElementById('level-counter').innerText = `${this.selectedLevelIndex + 1} / ${LEVEL_DEFINITIONS.length}`;
      document.getElementById('level-preview-img').src = current.previewImg;
      document.getElementById('level-name-badge').innerText = current.name;
      document.getElementById('level-desc-text').innerText = current.description;
      this.settings.levelId = current.id;
    };

    document.getElementById('btn-prev-level').addEventListener('click', () => {
      this.selectedLevelIndex = (this.selectedLevelIndex - 1 + LEVEL_DEFINITIONS.length) % LEVEL_DEFINITIONS.length;
      updateLevelDisplay();
    });

    document.getElementById('btn-next-level').addEventListener('click', () => {
      this.selectedLevelIndex = (this.selectedLevelIndex + 1) % LEVEL_DEFINITIONS.length;
      updateLevelDisplay();
    });

    updateLevelDisplay();

    document.getElementById('btn-create-room').addEventListener('click', async () => {
      this.readSettingsFromUI();
      const hostRoomInput = document.getElementById('host-custom-room-id').value.trim() || 'Xellossan';
      await window.networkManager.setupLocalMicrophone();
      window.soundFX.init();

      window.networkManager.initHost(hostRoomInput, this.settings, (roomName) => {
        document.getElementById('host-room-id').innerText = roomName;
        document.getElementById('host-info').classList.remove('hidden');
        document.getElementById('btn-create-room').style.display = 'none';
        document.getElementById('host-custom-room-id').disabled = true;
      }, (err) => {
        alert("Could not create room with that name (it may be in use). Please try another.");
      });
    });

    document.getElementById('btn-join-room').addEventListener('click', async () => {
      const roomInput = document.getElementById('join-room-id').value.trim() || 'Xellossan';
      await window.networkManager.setupLocalMicrophone();
      window.soundFX.init();

      window.networkManager.initJoin(roomInput, () => {
        console.log("Joined host successfully");
      }, (err) => {
        alert("Failed to join room '" + roomInput + "': " + err);
      });
    });

    document.getElementById('btn-solo-practice').addEventListener('click', () => {
      this.readSettingsFromUI();
      this.isSoloMode = true;
      window.soundFX.init();
      this.startMatch(1, this.settings);
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
      this.triggerMatchRestart();
    });
    document.getElementById('btn-restart-desktop').addEventListener('click', () => {
      this.triggerMatchRestart();
    });
  }

  triggerMatchRestart() {
    window.networkManager.send({ type: 'RESTART_GAME' });
    this.resetMatch();
  }

  readSettingsFromUI() {
    this.settings.turnDuration = parseInt(document.getElementById('turn-time').value) || 30;
    this.settings.bananasPerTurn = parseInt(document.getElementById('banana-count').value) || 5;
    this.settings.scoreToWin = parseInt(document.getElementById('win-score').value) || 3;
    this.settings.levelId = LEVEL_DEFINITIONS[this.selectedLevelIndex].id;
  }

  setupNetworkCallbacks() {
    window.networkManager.onMatchStart = (assignedPlayerId, settings) => {
      this.startMatch(assignedPlayerId, settings);
    };

    window.networkManager.onTurnSync = (data) => {
      this.activeTurnPlayer = data.activePlayer;
      this.turnTimeRemaining = data.timeRemaining;
      this.bananasLeftInTurn = this.settings.bananasPerTurn;
      this.wind.set(data.wind.x, data.wind.y, data.wind.z);
      this.updateHUD();
      window.soundFX.playTurnChange();
    };

    window.networkManager.onTimerTick = (timeRemaining) => {
      this.turnTimeRemaining = timeRemaining;
      this.updateHUD();
    };

    window.networkManager.onTurnChangeRequest = () => {
      if (this.isHostRole()) {
        this.passTurn();
      }
    };

    window.networkManager.onBananaThrow = (data) => {
      const pos = new THREE.Vector3(data.pos.x, data.pos.y, data.pos.z);
      const vel = new THREE.Vector3(data.vel.x, data.vel.y, data.vel.z);
      this.spawnBananaProjectile(pos, vel, false);
      if (data.remainingBananas !== undefined) {
        this.bananasLeftInTurn = data.remainingBananas;
        this.updateHUD();
      }
    };

    window.networkManager.onObstacleDestroy = (obstacleId) => {
      this.destroyPiece(obstacleId, false);
    };

    window.networkManager.onPlayerTransform = (data) => {
      this.remoteGorilla.position.set(data.pos.x, data.pos.y, data.pos.z);
      this.remoteGorilla.rotation.y = data.rotY;
    };

    window.networkManager.onScoreUpdate = (scores) => {
      this.scores = scores;
      this.updateHUD();
      this.checkEndGame();
    };

    window.networkManager.onRestart = () => {
      this.resetMatch();
    };

    window.networkManager.onLevelChange = (levelId) => {
      this.settings.levelId = levelId;
      this.resetMatch();
    };
  }
  isHostRole() {
    return this.myPlayerId === 1 || this.isSoloMode;
  }

  startMatch(myPlayerId, settings) {
    this.myPlayerId = myPlayerId;
    this.settings = Object.assign({}, this.settings, settings);
    this.scores = { 1: 0, 2: 0 };
    this.isGameOver = false;
    this.winnerId = null;

    document.getElementById('lobby-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('game-hud').classList.remove('hidden');

    this.camera.position.set(0, AVATAR_EYE_HEIGHT, 0);

    this.buildEnvironment();
    this.resetGorillaPositions();
    this.activeTurnPlayer = 1;
    this.startTurn();
  }

  resetGorillaPositions() {
    let baseY = 0;
    if (this.settings.levelId === 'cityscape') {
      baseY = 16;
    } else if (this.settings.levelId === 'pirate') {
      baseY = 4.5;
    }
    const zPos = 16;

    if (this.myPlayerId === 1) {
      this.playerRig.position.set(0, baseY, zPos);
      this.playerRig.rotation.y = 0;
      this.remoteGorilla.position.set(0, baseY, -zPos);
      this.remoteGorilla.rotation.y = Math.PI;
    } else {
      this.playerRig.position.set(0, baseY, -zPos);
      this.playerRig.rotation.y = Math.PI;
      this.remoteGorilla.position.set(0, baseY, zPos);
      this.remoteGorilla.rotation.y = 0;
    }

    window.networkManager.send({
      type: 'PLAYER_TRANSFORM',
      pos: { x: this.playerRig.position.x, y: this.playerRig.position.y, z: this.playerRig.position.z },
      rotY: this.playerRig.rotation.y
    });
  }
  generateRandomWind() {
    const wx = (Math.random() - 0.5) * 12.0;
    const wz = (Math.random() - 0.5) * 4.0;
    this.wind.set(wx, 0, wz);
  }

  startTurn() {
    if (this.masterTimerInterval) {
      clearInterval(this.masterTimerInterval);
      this.masterTimerInterval = null;
    }

    this.turnTimeRemaining = this.settings.turnDuration;
    this.bananasLeftInTurn = this.settings.bananasPerTurn;

    if (this.isHostRole()) {
      this.generateRandomWind();
      window.networkManager.send({
        type: 'TURN_SYNC',
        activePlayer: this.activeTurnPlayer,
        timeRemaining: this.turnTimeRemaining,
        wind: { x: this.wind.x, y: this.wind.y, z: this.wind.z }
      });

      this.masterTimerInterval = setInterval(() => {
        if (this.isGameOver) {
          clearInterval(this.masterTimerInterval);
          this.masterTimerInterval = null;
          return;
        }

        this.turnTimeRemaining--;
        this.updateHUD();

        window.networkManager.send({
          type: 'TIMER_TICK',
          timeRemaining: this.turnTimeRemaining
        });

        if (this.turnTimeRemaining <= 0) {
          this.passTurn();
        }
      }, 1000);
    }

    window.soundFX.playTurnChange();
    this.updateHUD();
  }

  requestTurnPass() {
    if (this.isGameOver) return;

    if (this.isHostRole()) {
      this.passTurn();
    } else {
      window.networkManager.send({
        type: 'REQUEST_TURN_PASS'
      });
    }
  }

  passTurn() {
    if (this.isGameOver) return;

    if (this.masterTimerInterval) {
      clearInterval(this.masterTimerInterval);
      this.masterTimerInterval = null;
    }

    this.activeTurnPlayer = (this.activeTurnPlayer === 1) ? 2 : 1;
    this.startTurn();
  }

  updateHUD() {
    document.getElementById('hud-p1-score').innerText = this.scores[1];
    document.getElementById('hud-p2-score').innerText = this.scores[2];
    document.getElementById('hud-timer').innerText = this.turnTimeRemaining + 's';
    document.getElementById('hud-banana-ammo').innerText = '🍌 ' + this.bananasLeftInTurn + ' left';

    const isMyTurn = (this.activeTurnPlayer === this.myPlayerId);
    const indicator = document.getElementById('hud-turn-indicator');
    if (isMyTurn) {
      indicator.innerText = "YOUR TURN TO THROW!";
      indicator.style.color = "#4ade80";
    } else {
      indicator.innerText = "OPPONENT'S TURN...";
      indicator.style.color = "#f87171";
    }

    const speed = this.wind.length().toFixed(1);
    const angleRad = Math.atan2(this.wind.z, this.wind.x);
    const angleDeg = (angleRad * 180) / Math.PI;
    document.getElementById('wind-speed').innerText = `${speed} m/s`;
    document.getElementById('wind-arrow').style.transform = `rotate(${angleDeg}deg)`;

    this.renderSideWallCanvas();
  }

  destroyPiece(pieceId, broadcast = true) {
    const idx = this.destructibles.findIndex(d => d.id === pieceId);
    if (idx !== -1) {
      const piece = this.destructibles[idx];
      this.createExplosionVFX(piece.mesh.position, piece.color || 0x94a3b8);
      this.scene.remove(piece.mesh);
      this.destructibles.splice(idx, 1);

      if (broadcast) {
        window.networkManager.send({
          type: 'OBSTACLE_DESTROY',
          obstacleId: pieceId
        });
      }
    }
  }

  createExplosionVFX(position, color = 0xffaa00) {
    window.soundFX.playExplosion();
    const count = 16;
    for (let i = 0; i < count; i++) {
      const p = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 5, 5),
        new THREE.MeshBasicMaterial({ color: color })
      );
      p.position.copy(position);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 9,
        Math.random() * 8 + 1,
        (Math.random() - 0.5) * 9
      );
      this.scene.add(p);
      this.explosionParticles.push({ mesh: p, vel: vel, life: 1.0 });
    }
  }

  checkEndGame() {
    if (this.scores[1] >= this.settings.scoreToWin || this.scores[2] >= this.settings.scoreToWin) {
      if (this.masterTimerInterval) {
        clearInterval(this.masterTimerInterval);
        this.masterTimerInterval = null;
      }
      this.isGameOver = true;
      this.winnerId = (this.scores[1] >= this.settings.scoreToWin) ? 1 : 2;
      const isWinner = (this.winnerId === this.myPlayerId);

      document.getElementById('winner-title').innerText = isWinner ? "🏆 YOU WIN! 🏆" : "💀 YOU LOSE! 💀";
      document.getElementById('winner-details').innerText = `Final Score: ${this.scores[1]} - ${this.scores[2]}`;
      document.getElementById('game-over-screen').classList.remove('hidden');

      this.renderSideWallCanvas();
      window.soundFX.playVictory();
    }
  }

  resetMatch() {
    if (this.masterTimerInterval) {
      clearInterval(this.masterTimerInterval);
      this.masterTimerInterval = null;
    }
    this.scores = { 1: 0, 2: 0 };
    this.isGameOver = false;
    this.winnerId = null;
    document.getElementById('game-over-screen').classList.add('hidden');
    
    this.buildEnvironment();
    this.resetGorillaPositions();
    this.activeTurnPlayer = 1;
    this.startTurn();
  }

  handlePlayerLocomotion(delta) {
    if (this.isGameOver) return;
    const canMove = (this.activeTurnPlayer === this.myPlayerId);
    if (!canMove) return;

    let moveX = 0;
    let moveZ = 0;
    let rotY = 0;

    if (this.isInVR && this.xrSession) {
      for (const source of this.xrSession.inputSources) {
        if (!source.gamepad) continue;
        const axes = source.gamepad.axes;
        if (source.handedness === 'left') {
          moveX += (Math.abs(axes[2]) > 0.12) ? axes[2] : 0;
          moveZ += (Math.abs(axes[3]) > 0.12) ? axes[3] : 0;
        } else if (source.handedness === 'right') {
          rotY -= (Math.abs(axes[2]) > 0.12) ? axes[2] : 0;
        }
      }
      this.playerRig.rotation.y += rotY * 2.4 * delta;
    } else if (this.isPointerLocked) {
      if (this.keys['KeyW']) moveZ -= 1;
      if (this.keys['KeyS']) moveZ += 1;
      if (this.keys['KeyA']) moveX -= 1;
      if (this.keys['KeyD']) moveX += 1;
    }

    if (moveX !== 0 || moveZ !== 0) {
      const moveVec = new THREE.Vector3(moveX, 0, moveZ).normalize();
      moveVec.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerRig.rotation.y);
      const speed = 7.5;
      const stepX = moveVec.x * speed * delta;
      const stepZ = moveVec.z * speed * delta;

      const playerRadius = 0.65;
      const playerY = this.playerRig.position.y;

      let minX = -COURT_BOUNDARY_X + 1.2;
      let maxX = COURT_BOUNDARY_X - 1.2;
      let minZ, maxZ;

      if (this.settings.levelId === 'cityscape') {
        if (this.myPlayerId === 1) {
          minZ = 7.0 + 1.1;
          maxZ = 25.0 - 1.2;
        } else {
          minZ = -25.0 + 1.2;
          maxZ = -7.0 - 1.1;
        }
      } else if (this.settings.levelId === 'pirate') {
        if (this.myPlayerId === 1) {
          minZ = 7.0 + 1.1;
          maxZ = 25.0 - 1.2;
        } else {
          minZ = -25.0 + 1.2;
          maxZ = -7.0 - 1.1;
        }
      } else {
        if (this.myPlayerId === 1) {
          minZ = 0.8;
          maxZ = COURT_BOUNDARY_Z - 1.5;
        } else {
          minZ = -COURT_BOUNDARY_Z + 1.5;
          maxZ = -0.8;
        }
      }

      const collidesWithObstacles = (checkX, checkZ) => {
        for (let i = 0; i < this.destructibles.length; i++) {
          const d = this.destructibles[i];
          const b = d.box;
          if (b.min.y <= playerY + 2.2 && b.max.y >= playerY + 0.1) {
            if (checkX >= b.min.x - playerRadius && checkX <= b.max.x + playerRadius &&
                checkZ >= b.min.z - playerRadius && checkZ <= b.max.z + playerRadius) {
              return true;
            }
          }
        }
        return false;
      };

      const targetX = Math.max(minX, Math.min(maxX, this.playerRig.position.x + stepX));
      if (!collidesWithObstacles(targetX, this.playerRig.position.z)) {
        this.playerRig.position.x = targetX;
      }

      const targetZ = Math.max(minZ, Math.min(maxZ, this.playerRig.position.z + stepZ));
      if (!collidesWithObstacles(this.playerRig.position.x, targetZ)) {
        this.playerRig.position.z = targetZ;
      }
    }

    window.networkManager.send({
      type: 'PLAYER_TRANSFORM',
      pos: { x: this.playerRig.position.x, y: this.playerRig.position.y, z: this.playerRig.position.z },
      rotY: this.playerRig.rotation.y
    });
  }
  updateBananaPhysics(delta) {
    const isCity = (this.settings.levelId === 'cityscape');
    const isElevated = (this.settings.levelId === 'cityscape' || this.settings.levelId === 'pirate');
    const floorLimit = isElevated ? -10.0 : 0.1;

    for (let i = this.activeBananas.length - 1; i >= 0; i--) {
      const b = this.activeBananas[i];
      if (!b.alive) continue;

      b.velocity.y += this.gravity * delta;
      b.velocity.x += this.wind.x * delta;
      b.velocity.z += this.wind.z * delta;

      b.mesh.position.addScaledVector(b.velocity, delta);
      b.mesh.rotation.x += 12 * delta;
      b.mesh.rotation.z += 8 * delta;

      const pos = b.mesh.position;

      // 1. Floor / Abyss hit
      if (pos.y <= floorLimit) {
        this.createExplosionVFX(pos, 0xffde59);
        this.scene.remove(b.mesh);
        this.activeBananas.splice(i, 1);
        continue;
      }

      // 2. Destructible obstacles
      let hitEnv = false;
      for (const piece of this.destructibles) {
        if (piece.box.containsPoint(pos)) {
          this.destroyPiece(piece.id, true);
          this.scene.remove(b.mesh);
          this.activeBananas.splice(i, 1);
          hitEnv = true;
          break;
        }
      }
      if (hitEnv) continue;

      // 3. Gorilla collision
      const targetPos = (b.ownerId === this.myPlayerId) ? this.remoteGorilla.position : this.playerRig.position;
      const dist = new THREE.Vector2(pos.x - targetPos.x, pos.z - targetPos.z).length();
      const heightDiff = pos.y - targetPos.y;

      if (dist < 1.4 && heightDiff < 3.2 && heightDiff > 0.2) {
        this.createExplosionVFX(pos, 0xff0044);
        this.scene.remove(b.mesh);
        this.activeBananas.splice(i, 1);

        if (b.ownerId === this.myPlayerId) {
          this.scores[this.myPlayerId]++;
          this.updateHUD();
          window.networkManager.send({
            type: 'SCORE_UPDATE',
            scores: this.scores
          });
          this.checkEndGame();
        }
      }
    }
  }

  updateExplosionVFX(delta) {
    for (let i = this.explosionParticles.length - 1; i >= 0; i--) {
      const p = this.explosionParticles[i];
      p.life -= delta * 1.5;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.explosionParticles.splice(i, 1);
      } else {
        p.vel.y += -9.8 * delta;
        p.mesh.position.addScaledVector(p.vel, delta);
        p.mesh.scale.setScalar(p.life);
      }
    }
  }

  renderLoop() {
    const delta = Math.min(this.clock.getDelta(), 0.1);
    const nowTime = performance.now() / 1000;

    if (this.isInVR) {
      for (let i = 0; i < this.controllers.length; i++) {
        const ctrl = this.controllers[i];
        const curPos = new THREE.Vector3();
        ctrl.getWorldPosition(curPos);

        const hist = this.controllerHistory[i];
        hist.push({ time: nowTime, pos: curPos });

        while (hist.length > 0 && (nowTime - hist[0].time > 0.18)) {
          hist.shift();
        }
      }
    }

    if (this.isChargingThrow) {
      this.throwChargeTime += delta;
      const pct = Math.min((this.throwChargeTime / 1.5) * 100, 100);
      document.getElementById('throw-power-bar').style.width = pct + '%';
    }

    this.handlePlayerLocomotion(delta);
    this.updateBananaPhysics(delta);
    this.updateExplosionVFX(delta);

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new VRGorillasGame();
});
