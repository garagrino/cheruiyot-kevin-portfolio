export function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2026 Cheruiyot Kevin. Built with React & Tailwind.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="https://github.com/garagrino" className="hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}