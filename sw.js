/* Gestionale Nails & Makeup – service worker minimo: serve solo a poterlo installare come app.
   Non salva niente: ogni volta si scarica la versione aggiornata. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
