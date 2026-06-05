import { useEffect, useState } from "react";
import AngledImage from "./common/AngledImage.jsx";
import { company, heroSlides } from "../data/siteData.js";

export default function HeroSlider({ onNavigate }) {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-pattern" />
      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-kicker">{slide.subtitle}</p>
          <h1>{slide.title}</h1>
          <p className="hero-slogan">{slide.slogan || company.tagline}</p>
          <p className="hero-text">{slide.desc}</p>
          <div className="hero-actions">
            <button className="button primary gold" type="button" onClick={() => onNavigate("capabilities")}>
              Khám phá năng lực
            </button>
            <button className="button secondary light" type="button" onClick={() => onNavigate("contact")}>
              Liên hệ tư vấn
            </button>
          </div>
          <div className="hero-dots" aria-label="Chọn slide">
            {heroSlides.map((item, index) => (
              <button
                className={index === active ? "active" : ""}
                key={item.title}
                type="button"
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>

        <AngledImage
          src={slide.image}
          alt={slide.title}
          label="Tư vấn đầu tư · Thiết kế · Môi trường · Xây dựng · Đấu thầu"
        />
      </div>
    </section>
  );
}
