# 📍 Spot

**Spot** es una utilidad de línea de comandos (CLI) minimalista diseñada para desarrolladores que crean proyectos constantemente y terminan con un disco duro lleno de carpetas olvidadas. 

Con **Spot**, puedes registrar la ubicación de tus proyectos, detectar automáticamente su stack y consultarlos después sin tener que navegar por un laberinto de directorios.

---

## ✨ Características principales

- 🔍 **Detección Automática**: Reconoce si tu proyecto es **React, Next.js, Vue, Svelte o Node.js** analizando el `package.json`.
- 🗄️ **Persistencia con SQLite**: Usa una base de datos local ligera y robusta. No necesita servidores ni configuraciones complejas.
- ⚡ **Comandos ultra rápidos**: Diseñado para ser usado en menos de 2 segundos.
- 📁 **Rutas Absolutas**: Guarda la ruta exacta para que puedas saltar a tus proyectos desde cualquier lugar.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Base de Datos:** [SQLite](https://sqlite.org/) (via `better-sqlite3`)
- **Interfaz de Consola:** [Commander.js](https://github.com/tj/commander.js)
- **Estilos:** [Picocolors](https://github.com/alexeyraspopov/picocolors)

---

## 🚀 Próximamente (Roadmap)

Actualmente, **Spot** está en desarrollo activo. Estas son las funciones planeadas:

1.  `spot add`: Registrar el directorio actual (Detección inteligente).
2.  `spot list`: Listar todos los proyectos registrados en una tabla.
3.  `spot find <query>`: Buscar proyectos por nombre o framework.
4.  `spot go <nombre>`: Abrir el proyecto directamente en VS Code.
5.  `spot clean`: Detectar y remover registros de carpetas que ya fueron borradas del disco.

---

## 💻 Instalación (Desarrollo)

Si quieres probarlo localmente mientras lo desarrollo:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/spot.git](https://github.com/tu-usuario/spot.git)
2. Instala las dependencias:
    npm install
3. Compila el proyecto:
    npm run build
4. Enlaza el proyecto:
    npm link

## 📄 Licencia
Este proyecto está bajo la Licencia MIT. ¡Siéntete libre de usarlo y mejorarlo!
Creado con ❤️ para desarrolladores ordenados (o que intentan serlo).