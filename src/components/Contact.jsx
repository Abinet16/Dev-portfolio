import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Contact = () => {
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading, { once: true });
    const inViewContent = useInView(refContent, { once: true });

    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [state, handleSubmit] = useForm("xgegejwz");
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await handleSubmit(e);
    };

    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            setFormData({
                email: "",
                subject: "",
                message: "",
            });
            setIsSubmitting(false);
            
            // Auto-hide success message after 5 seconds
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
            
            return () => clearTimeout(timer);
        }
        
        if (state.errors) {
            setIsSubmitting(false);
        }
    }, [state.succeeded, state.errors]);

    return (
        <section className="relative sm:px-8 pt-20 lg:pt-28 overflow-hidden" id="contact">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    ref={refHeading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex gap-4 items-center mb-16"
                >
                    <h2 className="text-textWhite text-3xl sm:text-4xl md:text-5xl font-bold">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
                    </h2>
                    <div className="min-w-0 flex-grow mt-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 relative">
                    {/* Contact Info */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                            <p className="text-textPara text-lg leading-relaxed">
                                I'm actively seeking new opportunities and welcome your messages. 
                                Whether you have inquiries or just want to say hello, feel free to reach out. 
                                I'll do my best to get back to you promptly!
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">Find me on</h4>
                            <div className="flex gap-6">
                                <motion.a
                                    href="https://github.com/Abinet16/"
                                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    aria-label="GitHub"
                                >
                                    <BsGithub className="w-6 h-6 text-textPara group-hover:text-white" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/abenetshegaw16/"
                                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    aria-label="LinkedIn"
                                >
                                    <BsLinkedin className="w-6 h-6 text-textPara group-hover:text-white" />
                                </motion.a>
                                <motion.a
                                    href="https://twitter.com/Atersata16"
                                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    aria-label="Twitter"
                                >
                                    <BsTwitter className="w-6 h-6 text-textPara group-hover:text-white" />
                                </motion.a>
                                <motion.a
                                    href="mailto:abinetshegaw@gmail.com"
                                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
                                    whileHover={{ y: -3 }}
                                    aria-label="Email"
                                >
                                    <HiMail className="w-6 h-6 text-textPara group-hover:text-white" />
                                </motion.a>
                            </div>
                        </div>

                        {/* Success Message */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={showSuccess ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-green-300 text-sm">
                                    Thank you for your message! I've received it and will get back to you as soon as possible.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10 backdrop-blur-sm"
                    >
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-textPara focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="your.email@example.com"
                                    disabled={isSubmitting}
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            <div>
                                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-textPara focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="What's this about?"
                                    disabled={isSubmitting}
                                />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-textPara focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or just say hello..."
                                    disabled={isSubmitting}
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting || state.submitting}
                                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.footer 
                    initial={{ opacity: 0 }}
                    animate={inViewContent ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center py-8 mt-12 border-t border-white/10"
                >
                    <span className="text-textPara text-sm">
                        All Rights Reserved © {new Date().getFullYear()} - Abenet Shegaw
                    </span>
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
