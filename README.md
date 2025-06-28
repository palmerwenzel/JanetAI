# Janet AI

A universal, keyboard-first assistant that proactively organizes your digital life, turning scattered information into structured knowledge.

## 🎯 Vision

Janet is designed for knowledge workers who manage high volumes of digital information and context switches throughout their day. It provides a single, reliable place to capture fleeting ideas, links, and tasks, preventing them from being lost by intelligently organizing and resurfacing them.

## ✨ Core Principles

- **Keyboard-First**: Every primary action is accessible via hotkeys with efficient, mouse-free navigation
- **Lean & Fast**: Lightweight application with minimal system resources and instant response times
- **Proactive & Intelligent**: Understands user intent, anticipates needs, and provides intuitive suggestions

## 🚀 Key Features

### Global Hotkey Access
Press `Ctrl+Space` (or `Cmd+Space` on macOS) anywhere to open Janet's intelligent input field.

### Intelligent Intent Detection
Janet automatically recognizes what you're trying to do:
- **Links**: Paste a URL → Janet saves it and offers to add summaries or tags
- **Tasks**: Type "Remember to deploy staging tomorrow at 10am" → Janet creates a scheduled task
- **Notes**: Type "Core idea: frictionless capture" → Janet saves it as a note

### Proactive Organization
Janet identifies patterns in your saved information and suggests collections, tags, and organizational improvements.

## 🛠️ Tech Stack

- **Framework**: [Tauri](https://tauri.app/) - Rust-powered desktop application
- **Frontend**: [SvelteKit](https://kit.svelte.dev/) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: SQLite (local-first storage)
- **AI**: OpenAI API for intent detection and processing

## 🏃‍♂️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Rust](https://rustup.rs/) (latest stable)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/palmerwenzel/JanetAI.git
   cd JanetAI/janet-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install system dependencies** (Linux only)
   ```bash
   sudo apt install libsoup-3.0-dev libjavascriptcoregtk-4.1-dev libwebkit2gtk-4.1-dev
   ```

4. **Run development server**
   ```bash
   npm run tauri dev
   ```

### Building for Production

```bash
npm run tauri build
```

## 🗂️ Project Structure

```
janet-app/
├── src/                    # SvelteKit frontend
│   ├── lib/components/     # Reusable Svelte components
│   ├── routes/            # SvelteKit routes
│   └── app.css           # Global styles with Tailwind
├── src-tauri/            # Rust backend
│   ├── src/              # Rust source code
│   └── Cargo.toml        # Rust dependencies
└── static/               # Static assets
```

## 🎯 Roadmap

### v1.0 (MVP) - Current Focus
- [x] Global hotkey activation (`Ctrl+Space`)
- [x] Core Tauri + SvelteKit setup
- [ ] Intelligent input field with intent detection
- [ ] Local SQLite storage for notes, tasks, and links
- [ ] Basic keyboard-navigable viewers

### v1.1 - Coming Next
- [ ] Proactive suggestions and intelligent grouping
- [ ] Link summarization capabilities
- [ ] Collection management

### Future
- [ ] Optional cloud synchronization
- [ ] Calendar and email integrations
- [ ] Plugin system for extensibility

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Tauri](https://tauri.app/) for cross-platform desktop development
- UI powered by [Svelte](https://svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/)
- AI capabilities provided by [OpenAI](https://openai.com/)

---

**Made with ❤️ for knowledge workers everywhere**