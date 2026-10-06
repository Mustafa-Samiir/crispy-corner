Crispy Corner – Vårt team

En enkel SPA byggd med React + TypeScript för att visa personalen på den fiktiva restaurangen Crispy Corner.

Personaldata hämtas från ett externt API.

Kom igång
npm install
npm run dev


Öppna sedan länken som visas i terminalen, oftast http://localhost:5173.

Sidor

/ – Visar alla anställda och har ett sökfält.

/team/:id – Visar information om en anställd.

/om-oss – Information om restaurangen och appen.

* – Visas om sidan inte finns.

Data och API

Vi använder TanStack Query (useQuery) för att hämta och spara personaldata i en cache.

Listan och profilsidan använder samma data, vilket gör att vi slipper onödiga API-anrop.

För att hålla oss under gränsen på 100 anrop per dag används bland annat:

Cachen sparas i 1 timme.

Ingen ny hämtning sker när man byter flik.

API-anrop försöks bara igen en gång vid fel.

Laddning och fel

Laddar: Spinner visas.

Fel: Ett felmeddelande med knappen "Försök igen".

Inga resultat: Ett meddelande visas om inga anställda hittas.

Projektstruktur
src/
├── api/          API-anrop
├── types/        TypeScript-typer
├── hooks/        useUsers
├── components/   Återanvändbara komponenter
├── pages/        Appens sidor
├── App.tsx       Routing
└── main.tsx      Startar appen
