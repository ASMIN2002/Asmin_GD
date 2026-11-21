import { Link } from "react-router-dom";
import { ArrowRight, Palette, Layers, PenTool, Sparkles } from "lucide-react";
import galleryData from "../data/galleryData";

function About() {
    const profileImage = galleryData[0]?.image;

    const skills = [
        { name: "Poster Design", level: 95 },
        { name: "Packaging Design", level: 90 },
        { name: "Brand Identity", level: 85 },
        { name: "Typography", level: 88 },
        { name: "Adobe Photoshop", level: 92 },
        { name: "Adobe Illustrator", level: 90 },
    ];

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

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-5 py-12 sm:py-16 md:py-20">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="anim-fade-up flex justify-center">
                        <div className="relative">
                            <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 blur-xl opacity-30" />
                            <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                                <img src={profileImage} alt="About" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="anim-fade-up delay-100 inline-flex items-center gap-2 rounded-full bg-indigo-100/80 dark:bg-indigo-500/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-600 dark:text-indigo-300">
                            <Sparkles size={14} /> ABOUT ME
                        </span>

                        <h1 className="anim-fade-up delay-200 mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            I turn ideas into{" "}
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                visual stories
                            </span>
                        </h1>

                        <p className="anim-fade-up delay-300 mt-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                            I'm Asmin, a graphics designer with 3+ years of experience crafting bold posters, striking packaging, and memorable brand identities. I believe design is not just about looking good — it's about communicating clearly and making people feel something.
                        </p>

                        <p className="anim-fade-up delay-400 mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                            From concept to final artwork, I handle every project with attention to detail and a passion for clean, impactful visuals.
                        </p>

                        <div className="anim-fade-up delay-500 mt-8 flex flex-wrap gap-4">
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
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24">
                    <h2 className="anim-fade-up text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white text-center">
                        Skills &amp; Tools
                    </h2>
                    <p className="anim-fade-up delay-100 mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
                        What I bring to every project
                    </p>

                    <div className="anim-fade-up delay-200 mt-10 grid sm:grid-cols-2 gap-6">
                        {skills.map((skill, i) => (
                            <div key={skill.name} className="anim-fade-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                                    <span className="text-sm font-bold text-indigo-500 dark:text-indigo-400">{skill.level}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="anim-fade-up delay-300 mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-6 text-center hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
                        <Palette className="mx-auto text-indigo-500" size={28} />
                        <h3 className="mt-4 font-bold text-slate-900 dark:text-white">Creative Direction</h3>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Concept to final artwork with a clear visual vision.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-6 text-center hover:border-pink-400 dark:hover:border-pink-500 transition-colors">
                        <Layers className="mx-auto text-pink-500" size={28} />
                        <h3 className="mt-4 font-bold text-slate-900 dark:text-white">Brand Identity</h3>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Logos, packaging, and systems that stand out.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-6 text-center hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
                        <PenTool className="mx-auto text-purple-500" size={28} />
                        <h3 className="mt-4 font-bold text-slate-900 dark:text-white">Print &amp; Digital</h3>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Posters, packets, social media, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;