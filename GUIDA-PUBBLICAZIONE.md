# Guida sintetica alla pubblicazione

Questa cartella e stata ripulita come progetto portfolio. La pubblicazione reale puo essere fatta in un secondo momento, scegliendo l'hosting piu adatto.

## Prima di pubblicare
1. Apri `index.html` in locale.
2. Controlla `profilo.html`, `aree-di-supporto.html`, `contatti.html` e `privacy.html`.
3. Verifica:
   - menu principale
   - responsive mobile e desktop
   - telefono
   - WhatsApp
   - email
   - LinkedIn
   - Instagram
   - menu mobile
   - video hero e poster

## File utili del pacchetto
- `robots.txt`
- `sitemap.xml`
- `favicon.svg`
- `_redirects`
- `_headers`

## URL pubbliche canoniche
- `/`
- `/profilo/`
- `/aree-di-supporto/`
- `/contatti/`
- `/privacy/`

Nota:
- `_redirects` e `_headers` non sono indispensabili per il portfolio locale.
- Con `Netlify`, le `Pretty URLs` standardizzano le pagine sulla variante con slash finale.
- Per questo il file `_redirects` mantiene solo i redirect legacy da `.html` verso le URL canoniche pubbliche.

## Scelte di hosting possibili
- `Netlify`: semplice per siti statici e adatta a deploy da cartella.
- `GitHub Pages`: utile se vuoi pubblicare direttamente dal repository.
- `Cloudflare Pages`: valida alternativa se vuoi un setup leggero e moderno.

## Quando si decidera la pubblicazione reale
La fase successiva dovra fissare:
1. dominio primario finale
2. eventuale alias `www`
3. verifica finale di canonical, sitemap e redirect sul deploy di produzione
