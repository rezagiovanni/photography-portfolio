# Photography Portfolio — Plan & Tracking

> Stack: Static (JAMstack) + Cloud CDN. Target: photographer pemula.
> **GCP LABEL WAJIB:** semua resource di-tag `photography-project` buat trace biaya.
> **OUT OF SCOPE:** `cron-mini` (bakal di-rebuild terpisah di GCP temen — jangan campur).

## Keputusan Arsitektur
- **Static site** (Astro) — gallery + about + contact. Paling murah (~$0 free tier), maintenance minimal.
- **Cloud Storage** bucket → foto original + thumbnail.
- **Cloud CDN** → delivery foto global cepat.
- **Contact form** → Formspree/basics dulu (no code), naik ke Cloud Function kalau perlu.
- **Cloud DNS + managed SSL** → domain + HTTPS gratis.
- **Cloud Build + GitHub** → auto-deploy tiap push.

## Tracking

| # | Phase | Task | Tools | Status |
|---|-------|------|-------|--------|
| 1 | Setup | Repo GitHub `rezagiovanni/photography-portfolio` + Astro scaffold | GitHub, local | ✅ |
| 2 | Design | Hero + masonry gallery + lightbox + about/contact polish + real photos | Astro | ✅ |
| 3 | Storage | **BUCKET BARU** `photography-portfolio-reza-2026` (asia-southeast2) + label `photography-project` + folder original/thumbnails + 9 foto ter-upload | Cloud Storage | ✅ |
| 4 | CDN | Enable CDN + cache config (label: photography-project) | Cloud CDN | ⬜ |
| 5 | Domain | Cloud DNS zone khusus `portofolio.rezagiovanni.my.id` + delegasi NS di parent + SSL | Cloud DNS | ⬜ |
| 6 | Deploy | Hosting (GCS/Cloud Run) + Cloud Build CI (label: photography-project) | Cloud Build, Cloud Run | ⬜ |
| 7 | Contact | Form (Formspree atau Cloud Function) | — / Cloud Functions | ⬜ |
| 8 | Launch | Test + DNS propagate + announce | — | ⬜ |

## Catatan Biaya (GCP label: photography-project)
_Update tiap ada resource baru / biaya muncul._

| Tanggal | Resource | Estimasi |
|---------|----------|----------|
| — | — | — |

## Keputusan (2026-07-11)
- ✅ Cloud Storage: **bucket baru** (jangan reuse bucket lain).
- ✅ Domain: **subdomain** `https://portofolio.rezagiovanni.my.id/` (main domain `rezagiovanni.my.id` dipake buat lain). Cara: managed zone GCP khusus subdomain + delegasi NS record di parent.
- ✅ Foto: HERMES atur struktur/placeholder dulu, bahas optimasi (sharp/script) setelah site jadi.
- ❓ **GitHub repo**: milik siapa? (akun/org mana) — belum ditentukan, blocker buat Phase 1.

## Open Questions
- **GitHub**: repo ini dibuat di akun GitHub siapa? (user/org) — perlu jawaban sebelum Phase 1.
- Foto: optimasi (sharp/thumbnail auto) dibahas setelah site live.
