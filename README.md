# SIN VERGÜENZA (SINV) — Landing page

Sitio de una sola página hecho con **React**. Es 100 % tuyo: no depende de Emergent
ni de ningún servicio externo (sin backend, sin analytics).

## Cómo correrlo

```bash
npm install      # solo la primera vez
npm start        # abre http://localhost:3000 y se recarga al guardar
npm run build    # genera la carpeta build/ lista para subir a Netlify/Vercel/etc.
```

## Mapa de carpetas (qué editar según lo que quieras cambiar)

```
public/
  index.html        Título de la pestaña, descripción para Google, color del navegador
  favicon.svg       Iconito de la pestaña
  img/p1..p10.jpg   Las fotos. Reemplázalas por las tuyas (mismo nombre) o agrega nuevas

src/
  data/content.js   ⭐ EMPIEZA AQUÍ. Todo el TEXTO y los DATOS del sitio:
                      LINKS (WhatsApp, Instagram, email…), NAV (menú), MARQUEE (cinta),
                      VALUES, CLASSES (clases), SCHEDULE (horario), ANNOUNCEMENTS
                      (What's poppin'), REELS, FAQ
  components/sinv/  Una pieza por sección de la página (el orden está en App.js):
                      Nav.jsx            Barra superior + menú hamburguesa
                      Hero.jsx           Portada con el logo grande
                      Marquee.jsx        Cinta de texto que se desplaza
                      About.jsx          Quiénes somos
                      Classes.jsx        Tarjetas de Salsa / Bachata / Cumbia
                      Schedule.jsx       Horario semanal
                      Pricing.jsx        Precios
                      Announcements.jsx  Anuncios / eventos
                      Reels.jsx          Videos / redes
                      Faq.jsx            Preguntas frecuentes
                      Location.jsx       Mapa y dirección
                      Footer.jsx         Pie de página + botón flotante de WhatsApp
                      Primitives.jsx     Piezas reutilizables (Logo, títulos, botones)
  App.js            Arma la página: lista las secciones en orden. Mueve/quita una línea
                    para reordenar o esconder una sección
  index.css         Estilos globales y configuración base de Tailwind
  App.css           Estilos propios del sitio (animaciones, texturas, etc.)
  lib/              Utilidades pequeñas (scroll suave, helper de clases)
  components/ui/    Solo el acordeón del FAQ

tailwind.config.js  Configuración de Tailwind (colores/tamaños extra)
craco.config.js     Un atajo: "@/" significa "src/"
package.json        Lista de librerías y comandos
```

## Cómo se edita (ejemplos)

| Quiero…                         | Edito…                                                    |
|---------------------------------|-----------------------------------------------------------|
| Cambiar el link de WhatsApp/IG  | `src/data/content.js` → `LINKS`                           |
| Cambiar horarios o precios      | `content.js` → `SCHEDULE`; precios en `Pricing.jsx`       |
| Agregar un anuncio              | `content.js` → `ANNOUNCEMENTS` (copia un bloque)          |
| Cambiar preguntas del FAQ       | `content.js` → `FAQ`                                      |
| Cambiar una foto                | Reemplaza el archivo en `public/img/`                     |
| Cambiar el logo                 | Componente `Logo` en `components/sinv/Primitives.jsx`     |
| Reordenar secciones             | `src/App.js`                                              |
| Cambiar colores                 | Busca el código (ej. `#E0007A`) en los `.jsx` y `App.css` |

### Paleta actual
Magenta `#E0007A` · Lima `#C8FF2E` · Cobalto `#4D5BFF` · Negro ciruela `#14091F` ·
Naranja `#FF6B2C` · Crema `#FFF3E6` · Violeta `#2A0F45`

## Conceptos para ir aprendiendo
- **JSX** (`.jsx`): HTML dentro de JavaScript. Cada archivo de `components/sinv/` es una función que devuelve HTML.
- **Tailwind**: los estilos van en `className="..."` (ej. `text-white font-bold p-4`). Docs: tailwindcss.com
- **framer-motion**: animaciones (`motion.div`, `initial`, `animate`, `whileInView`).
- **Lenis**: scroll suave (se activa en `App.js`).
- Tip: guarda un archivo y mira el navegador; si algo se rompe, la terminal te dice la línea.
