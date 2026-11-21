import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
                <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    >
                        G-Designer
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/gallery" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Gallery</Link>
                        <Link to="/about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">About</Link>
                        <Link to="/contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Contact</Link>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:scale-110 active:scale-95 transition-transform"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:scale-110 active:scale-95 transition-transform"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="p-2 text-slate-700 dark:text-slate-200"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <Link to="/gallery" onClick={closeMenu} className="text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-500 transition-colors">Gallery</Link>
                <Link to="/about" onClick={closeMenu} className="text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-500 transition-colors">About</Link>
                <Link to="/contact" onClick={closeMenu} className="text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-500 transition-colors">Contact</Link>
            </div>
        </>
    );
}

export default Navbar;