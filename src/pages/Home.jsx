import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Sparkles } from "lucide-react";
import galleryData from "../data/galleryData";

function Home() {
    const profileImage = galleryData[0]?.image;
    const [lightbox, setLightbox] = useState(false);

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

            <div className="relative z-10 max-w-4xl mx-auto px-5 py-16 md:py-20 flex flex-col items-center text-center">

                <button onClick={() => setLightbox(true)} className="anim-fade-up group relative">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 anim-ring" />
                    <div className="anim-float relative h-40 w-40 md:h-52 md:w-52 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-2xl group-hover:scale-105 transition-transform">
                        <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                    </div>
                </button>

                <span className="anim-fade-up delay-100 mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-100/80 dark:bg-indigo-500/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-600 dark:text-indigo-300">
                    <Sparkles size={14} /> AVAILABLE FOR FREELANCE
                </span>

                <h1 className="anim-fade-up delay-200 mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent anim-shimmer">
                        Asmin
                    </span>
                </h1>

                <p className="anim-fade-up delay-300 mt-3 text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300">
                    Graphics Designer &amp; Visual Storyteller
                </p>

                <p className="anim-fade-up delay-400 mt-4 max-w-md text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400">
                    I craft bold posters, striking packaging, and memorable brand identities that make people stop and look.
                </p>

                <div className="anim-fade-up delay-500 mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/gallery"
                        className="group inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 hover:gap-3 hover:shadow-xl transition-all"
                    >
                        View My Work
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>

                <div className="anim-fade-up delay-500 mt-12 flex gap-10">
                    <div>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">120+</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Projects</p>
                    </div>
                    <div>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">40+</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Clients</p>
                    </div>
                    <div>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">3+</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Years</p>
                    </div>
                </div>
            </div>

            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightbox(false)}
                >
                    <button
                        onClick={() => setLightbox(false)}
                        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Close"
                    >
                        <X size={28} />
                    </button>
                    <img
                        src={profileImage}
                        alt="Profile full view"
                        className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}

export default Home;