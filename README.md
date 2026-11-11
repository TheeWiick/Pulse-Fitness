# ⚡ Pulse Fitness Studio

<div align="center">

![React](https://img.shields.io/badge/React-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_%3CSS-%2338BDF8.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![OpenCode](https://img.shields.io/badge/OpenCode-%23000000.svg?style=for-the-badge&logo=opencode&logoColor=white)

Landing page moderna, minimalista y de alto impacto visual en Dark Mode para un gimnasio urbano en Alicante. Diseñada con una experiencia estética premium, calculadora de calorías interactiva y flujos de reserva.

[🌐 Visitar Web](https://theewiick.github.io/Pulse-Fitness/)

</div>

---

## 🚀 Características Principales

* **Estética Dark Mode Premium:** Interfaz de alto impacto visual basada en tonos oscuros (`#0b0b0b`) con acentos de color en verde neón y tipografía geométrica limpia.
* **Calculadora de Calorías Interactiva:** Herramienta basada en la fórmula Mifflin-St Jeor que calcula la Tasa Metabólica Basal (TMB), el gasto calórico de mantenimiento y un desglose dinámico de macronutrientes según los objetivos del usuario.
* **Sistema de Precios Dinámico:** Tarjetas de tarifas (Básico, Pro y Elite) con un interruptor (*toggle*) interactivo para alternar entre facturación mensual y anual (con cálculo automático de descuentos).
* **Navegación Multipágina & Enrutamiento:** Implementación de vistas independientes para el formulario de reserva de la semana gratis (`/reserva`) y páginas legales de cumplimiento (`/condiciones`, `/privacidad`, `/cookies`) gestionadas con React Router.
* **Desarrollo Asistido por IA (AI-Workflow):** Proyecto desarrollado mediante flujos de ingeniería guiada por IA para optimizar patrones de código limpio, tipado estricto y componentes modulares en tiempo récord.

---

## 🛠️ Tecnologías Utilizadas

* **React (v18+):** Librería principal para la construcción de la interfaz de usuario basada en componentes funcionales.
* **TypeScript:** Tipado estático robusto para garantizar la seguridad de los datos y la escalabilidad del código.
* **Tailwind CSS:** Framework de utilidades CSS para un diseño ágil, totalmente responsive y personalizado.
* **React Router:** Enrutamiento del lado del cliente para una navegación fluida entre secciones y páginas legales.
* **Vite:** Entorno de desarrollo rápido y empaquetador para producción.
* **Lucide React:** Iconografía vectorial moderna y limpia.

---

## 🤖 Metodología de Desarrollo (AI-Workflow)

Este proyecto ha sido desarrollado bajo un enfoque de **arquitectura de software asistida por IA**:
* **Entorno de trabajo:** OpenCode
* **Modelo utilizado:** DeepSeek V4.1 Flash
* **Enfoque técnico:** El rol principal se ha centrado en la dirección de arquitectura, la definición de restricciones estrictas de diseño (`AGENTS.md`) y la supervisión del código generado para asegurar una implementación funcional, limpia y sin errores de compilación.

---

## 📂 Estructura del Proyecto

```text
Pulse-Fitness/
├── src/
│   ├── components/         # Componentes modulares (Navbar, Hero, CalorieCalc, Pricing, etc.)
│   ├── pages/              # Vistas asociadas a rutas (Home, Reservation, Legal)
│   ├── data/               # Datasets estáticos (planes, precios y textos legales)
│   ├── types/              # Tipados globales e interfaces TypeScript
│   ├── utils/              # Funciones puras de cálculo (fórmula Mifflin-St Jeor)
│   ├── App.tsx             # Router principal y layout raíz
│   ├── main.tsx            # Punto de entrada de React
│   └── index.css           # Estilos base de Tailwind CSS y animaciones
├── public/                 # Assets estáticos y favicon
├── tailwind.config.js      # Configuración de colores personalizados
├── AGENTS.md               # Documentación y directrices de arquitectura e IA
└── package.json            # Dependencias y scripts del proyecto
