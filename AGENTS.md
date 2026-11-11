# AGENTS.md — Pulse Fitness Studio

Landing page moderna, minimalista y de alto impacto visual en Dark Mode para un gimnasio urbano en Alicante. Su objetivo principal es captar nuevos socios mediante una experiencia estética premium, presentación de planes, formulario de reserva y una calculadora interactiva de calorías.

## Stack y estructura

- **Tecnologías clave:** React 18+, TypeScript 5+, Vite, Tailwind CSS v3+, Lucide React, React Router v6+.
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
  │   │   ├── LegalPage.tsx    # Plantilla compartida de páginas legales
  │   │   └── ScrollToTop.tsx  # Restablecimiento de scroll al navegar
  │   ├── pages/               # Vistas asociadas a rutas
  │   │   ├── Home.tsx         # Landing principal
  │   │   ├── Reservation.tsx  # Formulario de reserva de la semana gratis
  │   │   └── Legal.tsx        # Renderizado de condiciones, privacidad y cookies
  │   ├── data/                # Datasets estáticos
  │   │   ├── pricingData.ts   # Precios, ventajas y características de cada plan
  │   │   └── legalData.ts     # Textos legales (condiciones, privacidad, cookies)
  │   ├── types/               # Tipados TypeScript globales
  │   │   └── index.ts         # Interfaces de planes, calculadora y formularios
  │   ├── utils/               # Funciones puras de cálculo y lógica
  │   │   └── calorieCalc.ts   # Fórmula Mifflin-St Jeor
  │   ├── App.tsx              # Router, layout raíz y manejo de ruta 404
  │   ├── main.tsx             # Punto de entrada de React
  │   └── index.css            # Estilos base de Tailwind CSS y animaciones
  ├── public/                  # Favicon y assets estáticos
  ├── tailwind.config.js       # Paleta personal de colores (#0b0b0b, neón)
  ├── package.json             # Dependencias del proyecto
  └── AGENTS.md                # Directrices para agentes de IA y colaboradores