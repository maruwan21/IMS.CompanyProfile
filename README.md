# IMS Frontend (React)

Konversi `site/index.html` (company profile PT Indorig Mitra Sejati) ke React 18 + Vite. File mockup asli tidak diubah.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # hasil di dist/
```

## Konfigurasi
Salin `.env.example` ke `.env`.

| Variabel | Fungsi |
|---|---|
| `VITE_API_BASE_URL` | Base URL API (dipakai axios di `src/services/api.js`) |
| `VITE_USE_MOCKS` | `true` (default) = data dari `src/mocks/*.json`; `false` = panggil endpoint |

Semua komponen mengambil data lewat `src/services/*`, jadi pindah ke API nyata tidak mengubah komponen.

## Docker
```bash
docker build -t ims-frontend .
docker run -p 8080:80 ims-frontend
```
Build arg: `--build-arg VITE_USE_MOCKS=false --build-arg VITE_API_BASE_URL=/api`.

## Pemetaan mockup ke React
| Bagian mockup | File React |
|---|---|
| CSS (`<style>`) | `src/styles/global.css` |
| Header + nav | `components/Header.jsx` |
| Hero | `pages/Home/Hero.jsx` |
| About | `pages/Home/About.jsx` |
| Founder | `pages/Home/Founder.jsx` |
| Expertise | `pages/Home/Expertise.jsx`, `components/ExpertiseCard.jsx` |
| Services | `pages/Home/Services.jsx`, `components/ServiceRow.jsx`, `PartsGallery.jsx` |
| Rigs | `pages/Home/Rigs.jsx`, `components/RigCard.jsx`, `SpecList.jsx` |
| Clients | `pages/Home/Clients.jsx`, `components/ClientMarquee.jsx` |
| Contact | `pages/Home/Contact.jsx`, `components/ContactCard.jsx`, `CopyButton.jsx` |
| Footer, Back to top | `components/Footer.jsx`, `components/BackToTop.jsx` |
| Script scroll/menu/copy/animasi | `hooks/useSmoothScroll.js`, `useCopyToClipboard.js`, `components/Reveal.jsx` |
