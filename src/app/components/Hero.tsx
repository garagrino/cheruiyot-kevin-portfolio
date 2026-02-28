import { Linkedin, Github, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-slate-900 text-white">
      <h1 className="text-6xl font-bold mb-4">Cheruiyot Kevin</h1>
      <p className="text-xl text-blue-400 mb-8">Data Analyst | Software Developer</p>
      <div className="flex gap-6">
        <a href="https://github.com/garagrino" className="hover:text-blue-400"><Github size={28}/></a>
        <a href="#" className="hover:text-blue-400"><Linkedin size={28}/></a>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce"><ChevronDown size={32}/></a>
    </section>
  );
}