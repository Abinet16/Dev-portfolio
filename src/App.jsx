// --- START OF FILE App.jsx ---
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="min-h-screen relative">
            {/* The Grid Background Layer */}
            <div className="fixed inset-0 bg-grid pointer-events-none -z-10 h-screen" />
            
            <Navbar />
            <main className="px-5 md:px-8 max-w-[1440px] mx-auto">
                <HeroSection />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}