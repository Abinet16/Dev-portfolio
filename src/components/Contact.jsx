// --- START OF FILE Contact.jsx ---
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Contact = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading, { once: true });
    const [state, handleSubmit] = useForm("xgegejwz");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
       if (state.submitting) setIsSubmitting(true);
       if (state.succeeded || state.errors) setIsSubmitting(false);
    }, [state]);

    return (
        <section className="relative py-20 lg:py-28" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                 <motion.div
                    ref={refHeading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Touch</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/10 shadow-lg dark:shadow-none">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                I'm actively seeking new opportunities. Whether you have inquiries or just want to say hello, feel free to reach out.
                            </p>
                            
                            <div className="flex gap-4">
                                {[
                                    { icon: BsGithub, link: "https://github.com/Abinet16/" },
                                    { icon: BsLinkedin, link: "https://www.linkedin.com/in/abenetshegaw16/" },
                                    { icon: BsTwitter, link: "https://twitter.com/Atersata16" },
                                    { icon: HiMail, link: "mailto:abinetshegaw@gmail.com" }
                                ].map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-slate-100 dark:bg-white/10 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-600 dark:text-white hover:text-white transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/10 shadow-lg dark:shadow-none space-y-6">
                        {state.succeeded && (
                            <div className="p-4 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 rounded-lg">
                                Thanks for reaching out! I'll get back to you soon.
                            </div>
                        )}
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                            <input
                                id="email"
                                type="email" 
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                                placeholder="john@example.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white resize-none"
                                placeholder="Tell me about your project..."
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full py-3 px-6 bg-slate-900 dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-blue-500 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
                
                <footer className="text-center mt-20 pt-8 border-t border-slate-200 dark:border-white/10">
                    <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Abenet Shegaw. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;