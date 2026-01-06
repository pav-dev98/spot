# 📍 Spot

**Spot** is a minimalist CLI utility designed for developers who build constantly and end up with a hard drive full of forgotten folders.

With **Spot**, you can register your projects' locations, automatically detect their stack, and query them later without navigating through a directory maze.

---

## ✨ Key Features

- 🔍 **Smart Detection**: Recognizes if your project is **React, Next.js, Vue, Svelte, or Node.js** by analyzing `package.json`.
- 🗄️ **SQLite Persistence**: Uses a lightweight and robust local database. No servers or complex setups required.
- ⚡ **Ultra-fast Commands**: Designed to be used in under 2 seconds.
- 📁 **Absolute Paths**: Saves the exact path so you can jump to your projects from anywhere.
- 🏗️ **Clean Architecture**: Built using Service and Repository patterns for high maintainability and testability.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [SQLite](https://sqlite.org/) (via `better-sqlite3`)
- **CLI Framework:** [Commander.js](https://github.com/tj/commander.js)
- **Validation:** [Zod](https://zod.dev/)
- **Styling:** [Picocolors](https://github.com/alexeyraspopov/picocolors)
- **Testing:** [Vitest](https://vitest.dev/)

---

## 🚀 Roadmap

**Spot** is under active development. These are the planned and implemented features:

1.  `spot add`: Register current directory (Smart detection included). ✅
2.  `spot list`: List all registered projects in a clean table. ✅
3.  `spot find <query>`: Search projects by name or framework. 🛠️
4.  `spot go <name>`: Open the project directly in VS Code. 🛠️
5.  `spot clean`: Detect and remove records of folders already deleted from disk. 🛠️

---

## 💻 Installation (Development)

To try it locally during development:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/pav-dev98/spot.git](https://github.com/pav-dev98/spot.git)
2. **Install dependencies:**
   ```bash
   npm install
3. **Build the project:**
   ```bash
   npm run build
4. **Link the project:**
   ```bash
   npm link

## 📄 License

This project is under the MIT License. Feel free to use and improve it!

Created with ❤️ by [pav-dev98](https://github.com/pav-dev98).
