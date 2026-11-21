import { useState } from "react";
import { Mail, Send, MapPin, CheckCircle } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
    };

    const socials = [
        { icon: Mail, label: "Email", value: "hello@asmin.design", href: "mailto:hello@asmin.design", color: "text-indigo-500" },
        { icon: SiInstagram, label: "Instagram", value: "@asmin.design", href: "https://instagram.com", color: "text-pink-500" },
        { icon: SiWhatsapp, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210", color: "text-emerald-500" },
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

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div className="text-center">
                    <h1 className="anim-fade-up text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Let&apos;s{" "}
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Talk
                        </span>
                    </h1>
                    <p className="anim-fade-up delay-100 mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Have a project in mind? Send me a message and I&apos;ll get back to you soon.
                    </p>
                </div>

                <div className="anim-fade-up delay-200 mt-10 sm:mt-14 grid md:grid-cols-5 gap-6 sm:gap-10">
                    <form onSubmit={handleSubmit} className="md:col-span-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm p-5 sm:p-8 space-y-5">
                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group inline-flex items-center justify-center gap-2 w-full rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 hover:gap-3 hover:shadow-xl transition-all"
                        >
                            {sent ? (
                                <>
                                    <CheckCircle size={16} /> Message Sent
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={16} className="transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="md:col-span-2 space-y-4">
                        {socials.map((s) => {
                            const Icon = s.icon;
                            return (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm p-4 sm:p-5 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-0.5 transition-all"
                                >
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                                        <Icon size={20} className={s.color} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{s.value}</p>
                                    </div>
                                </a>
                            );
                        })}

                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm p-4 sm:p-5">
                            <MapPin size={18} className="text-indigo-500 shrink-0" />
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Based in India · Available for freelance worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;