import { useEffect, useState } from "react";
import { company, heroSlides } from "../data/siteData.js";

export default function HeroSlider({ onNavigate }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {heroSlides.map((slide, index) => (
        <article
          className={`hero-slide ${index === active ? "is-active" : ""}`}
          key={slide.title}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 35, 72, 0.92), rgba(0, 35, 72, 0.58)), url(${slide.image})` }}
        >
          <div className="hero-content">
            <p className="eyebrow">{slide.subtitle}</p>
            <h1>{slide.title}</h1>
            <p className="hero-slogan">{company.tagline}</p>
            <p>{slide.desc}</p>
            <div className="hero-actions">
              <button className="button primary gold" type="button" onClick={() => onNavigate("capabilities")}>
                Khám phá năng lực
              </button>
              <button className="button secondary light" type="button" onClick={() => onNavigate("contact")}>
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </article>
      ))}
      <div className="hero-dots" aria-label="Chọn slide">
        {heroSlides.map((slide, index) => (
          <button
            className={index === active ? "active" : ""}
            key={slide.title}
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
