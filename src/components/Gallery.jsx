import { useState } from "react";
import { X } from "lucide-react";
import galleryData from "../data/galleryData";

function Gallery() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 anim-stars" style={{
                    backgroundImage: `radial-gradient(2px 2px at 20px 30px, #475569, transparent),
            radial-gradient(2px 2px at 80px 120px, #6366f1, transparent),
            radial-gradient(3px 3px at 150px 60px, #1e293b, transparent),
            radial-gradient(2px 2px at 220px 180px, #475569, transparent),
            radial-gradient(3px 3px at 300px 90px, #ec4899, transparent),
            radial-gradient(3px 3px at 380px 200px, #1e293b, transparent),
            radial-gradient(2px 2px at 450px 40px, #6366f1, transparent)`,
                    backgroundSize: "500px 250px"
                }} />
                <div className="absolute inset-0 hidden dark:block anim-stars" style={{
                    backgroundImage: `radial-gradient(2px 2px at 20px 30px, #a5b4fc, transparent),
            radial-gradient(2px 2px at 80px 120px, #f9a8d4, transparent),
            radial-gradient(3px 3px at 150px 60px, #ffffff, transparent),
            radial-gradient(2px 2px at 220px 180px, #a5b4fc, transparent),
            radial-gradient(3px 3px at 300px 90px, #f9a8d4, transparent),
            radial-gradient(3px 3px at 380px 200px, #ffffff, transparent),
            radial-gradient(2px 2px at 450px 40px, #a5b4fc, transparent)`,
                    backgroundSize: "500px 250px"
                }} />
                <div className="absolute inset-0 anim-glow pointer-events-none" style={{
                    backgroundImage: `radial-gradient(3px 3px at 100px 150px, #6366f1, transparent),
            radial-gradient(4px 4px at 250px 80px, #ec4899, transparent),
            radial-gradient(3px 3px at 400px 200px, #8b5cf6, transparent),
            radial-gradient(4px 4px at 350px 300px, #6366f1, transparent)`,
                    backgroundSize: "500px 350px"
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="px-4 sm:px-6 pt-10 sm:pt-14 text-center">
                    <h1 className="anim-fade-up text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        My{" "}
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Work
                        </span>
                    </h1>
                    <p className="anim-fade-up delay-100 mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                        Posters, packaging, and brand identities I&apos;ve crafted
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 p-4 sm:p-6">
                    {galleryData.map((item, i) => (
                        <div
                            key={item.id}
                            onClick={() => setSelected(item)}
                            className="anim-fade-up group relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600"
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold text-base">{item.title}</h3>
                                <p className="text-slate-200 text-xs mt-0.5">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease]"
                >
                    <button
                        onClick={() => setSelected(null)}
                        aria-label="Close"
                        className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 sm:p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                    >
                        <X size={26} />
                    </button>
                    <img
                        src={selected.image}
                        alt={selected.title}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[96vw] max-h-[85vh] sm:max-w-[95vw] sm:max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </section>
    );
}

export default Gallery;