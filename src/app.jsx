useEffect(() => {
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
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
  });

  gsap.from(".hero-text", {
    y: 40,
    opacity: 0,
    delay: 0.3,
    duration: 1.1
  });

  gsap.from(".hero-btn", {
    scale: 0.9,
    opacity: 0,
    delay: 0.6,
    duration: 0.8
  });

  gsap.from(".section", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".section",
      start: "top 85%"
    }
  });

}, []);
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

function App() {

  useEffect(() => {

    // smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // hero animation
    gsap.from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 1.2
    });

    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      delay: 0.3,
      duration: 1
    });

    gsap.from(".hero-btn", {
      scale: 0.9,
      opacity: 0,
      delay: 0.5
    });

  }, []);

  return (
    <>
      {/* NAVBAR */}
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
        <h1 className="hero-title">
          Corporate Luxury Real Estate
        </h1>

        <p className="hero-text">
          Premium consultancy for high-net-worth property investment
          across India & Dubai.
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
          long-term value creation, trust, and institutional-grade
          property consulting.
        </p>
      </section>

      {/* VISION */}
      <section id="vision" className="section dark">
        <h2>Our Vision</h2>
        <p>
          To redefine real estate consulting with transparency,
          discipline, and global standards.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Services</h2>
        <p>
          Investment advisory, property consultation,
          and developer partnerships.
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
