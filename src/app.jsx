import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

function App() {

  useEffect(() => {

    // Smooth scroll (cinematic easing)
    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // HERO animation
    gsap.from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      delay: 0.3,
      duration: 1
    });

    gsap.from(".hero-btn", {
      scale: 0.95,
      opacity: 0,
      delay: 0.5
    });

    // SECTION reveal
    gsap.utils.toArray(".section").forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: "top 85%"
        },
        opacity: 0,
        y: 60,
        duration: 1
      });
    });

    // NAV scroll effect
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".nav");

      if (window.scrollY > 50) {
        nav.style.background = "rgba(7,23,15,0.75)";
        nav.style.backdropFilter = "blur(20px)";
      } else {
        nav.style.background = "rgba(7,23,15,0.55)";
        nav.style.backdropFilter = "blur(18px)";
      }
    });

    // MOUSE LIGHT
    const moveLight = (e) => {
      const light = document.querySelector(".cursor-light");
      if (light) {
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveLight);

  }, []);

  return (
    <>
      {/* CURSOR LIGHT */}
      <div className="cursor-light"></div>

      {/* NAV */}
      <nav className="nav">
        <div className="logo">
          <span>Dream</span>Home
        </div>

        <div className="links">
          <a href="#about">About</a>
          <a href="#vision">Vision</a>
          <a href="#services">Services</a>
        </div>

        <button className="cta">Contact</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>

        <h1 className="hero-title">
          Corporate Luxury Real Estate
        </h1>

        <p className="hero-text">
          Premium investment advisory and real estate consultancy
          across India & Dubai’s most exclusive markets.
        </p>

        <button className="hero-btn">
          Explore
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We are a premium real estate advisory firm focused on
          institutional-grade investment consulting and long-term value creation.
        </p>
      </section>

      {/* VISION */}
      <section id="vision" className="section dark">
        <h2>Our Vision</h2>
        <p>
          To redefine luxury real estate consulting through transparency,
          discipline, and global standards.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Services</h2>
        <p>
          Investment advisory, property consulting, and developer partnerships.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 DreamHome. All rights reserved.
      </footer>
    </>
  );
}

export default App;
