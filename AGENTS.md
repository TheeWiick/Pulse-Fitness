# AGENTS.md — Pulse Fitness Studio

Landing page moderna, minimalista y de alto impacto visual en Dark Mode para un gimnasio urbano en Alicante. Su objetivo principal es captar nuevos socios mediante una experiencia estética premium, presentación de planes, formulario de reserva y una calculadora interactiva de calorías.

## Stack y estructura

- **Tecnologías clave:** React 18+, TypeScript 5+, Vite 6, Tailwind CSS v3+, Lucide React, React Router (HashRouter).
- **Despliegue:** rama `gh-pages` mediante `npm run deploy` (paquete `gh-pages`). El proyecto se publica en `https://theewiick.github.io/Pulse-Fitness/`, por lo que `base` debe ser `/Pulse-Fitness/`.
- **Organización de archivos:**
  ```text
  pulse-fitness-react/
  ├── src/
  │   ├── components/          # Componentes visuales e interactivos
  │   │   ├── Navbar.tsx       # Navegación y menú responsive
  │   │   ├── Hero.tsx         # Sección principal y CTAs
  │   │   ├── CalorieCalc.tsx  # Calculadora de calorías e inputs
  │   │   ├── Pricing.tsx      # Tarjetas de planes y toggle mensual/anual
  │   │   ├── Footer.tsx       # Pie de página y ubicación en Alicante
  │   │   └── LegalPage.tsx    # Plantilla compartida de páginas legales
  │   ├── pages/               # Vistas asociadas a rutas
  │   │   ├── Home.tsx         # Landing principal
  │   │   └── Reservation.tsx  # Formulario de reserva de la semana gratis
  │   ├── data/                # Datasets estáticos
  │   │   ├── pricingData.ts   # Precios y ventajas de cada plan
  │   │   └── legalData.ts     # Textos legales (condiciones, privacidad, cookies)
  │   ├── types/               # Tipados TypeScript globales
  │   │   └── index.ts         # Interfaces de planes, calculadora y legales
  │   ├── utils/               # Funciones puras de cálculo y lógica
  │   │   └── calorieCalc.ts   # Fórmula Mifflin-St Jeor
  │   ├── App.tsx              # Router, ScrollToTop, layout y página 404
  │   ├── main.tsx             # Punto de entrada de React
  │   └── index.css            # Estilos base de Tailwind CSS y animaciones
  ├── public/                  # Favicon, .nojekyll y assets estáticos
  ├── tailwind.config.js       # Paleta personal (ink / volt) y animaciones
  ├── vite.config.ts           # Base '/Pulse-Fitness/' y plugin de React
  ├── package.json             # Dependencias del proyecto
  └── AGENTS.md                # Directrices para agentes de IA y colaboradores
  ```

## Rutas

React Router funciona en modo **HashRouter** para que las rutas profundas funcionen en GitHub Pages sin configuración de servidor.

| Ruta           | Contenido                                         |
| -------------- | ------------------------------------------------- |
| `/`            | Landing: Hero, calculadora de calorías y planes   |
| `/reserva`     | Formulario de reserva de la semana gratis         |
| `/condiciones` | Condiciones generales                             |
| `/privacidad`  | Política de privacidad                            |
| `/cookies`     | Política de cookies                               |
| `*`            | Página 404                                        |

Los enlaces internos usan `Link` de `react-router-dom`. Los anchors de la landing se referencian como `/#seccion` y `ScrollToTop` gestiona el scroll al cambiar de ruta o hash. El índice de las páginas legales usa botones con `scrollIntoView` para no interferir con el hash del router.

## Despliegue

El despliegue se realiza en la rama `gh-pages` (sin depender de GitHub Actions).

1. Ejecuta `npm run deploy`. Compila el proyecto y publica el contenido de `dist` en la rama `gh-pages`.
2. En el repositorio, la primera vez: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / (root)**.
3. La web queda en `https://theewiick.github.io/Pulse-Fitness/`.

Cada vez que quieras publicar cambios, vuelve a ejecutar `npm run deploy`.

> GitHub Actions está deshabilitado en esta cuenta por un problema de facturación, por eso no se usa un workflow de CI. Si se resuelve, se puede añadir `.github/workflows/deploy.yml` y cambiar la fuente de Pages a «GitHub Actions».

Si el repositorio o el dominio cambian, actualiza `base` en `vite.config.ts` para que coincida con la ruta pública.
