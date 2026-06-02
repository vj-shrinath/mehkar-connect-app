"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Megaphone,
  ShoppingCart,
  Wrench,
  Heart,
  Trophy,
  Store,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const slides = ["/slides (1).png", "/slides (2).png", "/slides (3).png"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [hideHeroText, setHideHeroText] = useState(false);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Hide the fixed hero text once the features section reaches the viewport
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        // When the top of features section is at or above 60% of viewport
        setHideHeroText(rect.top <= window.innerHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main>
      <div className="bg-glow"></div>
      <div className="bg-glow2"></div>

      <div className="hero-background">
        <img
          src="/hero.jpg"
          alt="Mehkar Connect Cinematic Background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Fixed hero text layer - only on mobile, stays behind everything */}
      <div className={`mobile-fixed-hero ${hideHeroText ? 'hidden' : ''}`}>
        <div className="container">
          <div className="badge">
            <span className="mr-2">🚀</span> Early Testing Version Available
          </div>

          <h1>
            मेहकर आता होणार <span>Connected!</span>
          </h1>

          <p className="hero-text">
            आपल्या शहरातील अपडेट्स, वस्तू विनंती, घरपोच सेवा,
            मदत, स्थानिक खरेदी आणि community —
            आता एका powerful App मध्ये.
          </p>

          <div className="cta-group">
            <Link href="/mehkarConnect.apk" className="btn btn-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="android-icon-btn">
                <path d="M17.523 15.3414C17.0609 15.3414 16.6908 14.9712 16.6908 14.5092C16.6908 14.0471 17.0609 13.677 17.523 13.677C17.985 13.677 18.3551 14.0471 18.3551 14.5092C18.3551 14.9712 17.985 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01496 15.3414 5.6449 14.9712 5.6449 14.5092C5.6449 14.0471 6.01496 13.677 6.47702 13.677C6.93908 13.677 7.30914 14.0471 7.30914 14.5092C7.30914 14.5092 6.93908 15.3414 6.47702 15.3414ZM17.893 11.0858L19.464 8.36531C19.5855 8.15501 19.5135 7.88601 19.3033 7.76451C19.093 7.643 18.824 7.71499 18.7025 7.92529L17.108 10.6869C15.5494 9.97239 13.8427 9.5843 12 9.5843C10.1573 9.5843 8.45055 9.97239 6.89201 10.6869L5.29749 7.92529C5.176 7.71499 4.90699 7.643 4.6967 7.76451C4.4864 7.88601 4.41441 8.15501 4.53591 8.36531L6.10696 11.0858C2.88331 12.8711 0.741089 16.2917 0.741089 20.25H23.2589C23.2589 16.2917 21.1167 12.8711 17.893 11.0858Z" />
              </svg>
              APK Download
            </Link>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="container hero-container">
          <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
            <div className="logo-wrapper">
              <div className="brand-group">
                <img src="/logo.png" alt="Mehkar Connect Logo" className="nav-logo" />
                <div className="logo">Connect</div>
              </div>

              <Link href="/mehkarConnect.apk" className="nav-download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="android-icon">
                  <path d="M17.523 15.3414C17.0609 15.3414 16.6908 14.9712 16.6908 14.5092C16.6908 14.0471 17.0609 13.677 17.523 13.677C17.985 13.677 18.3551 14.0471 18.3551 14.5092C18.3551 14.9712 17.985 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01496 15.3414 5.6449 14.9712 5.6449 14.5092C5.6449 14.0471 6.01496 13.677 6.47702 13.677C6.93908 13.677 7.30914 14.0471 7.30914 14.5092C7.30914 14.5092 6.93908 15.3414 6.47702 15.3414ZM17.893 11.0858L19.464 8.36531C19.5855 8.15501 19.5135 7.88601 19.3033 7.76451C19.093 7.643 18.824 7.71499 18.7025 7.92529L17.108 10.6869C15.5494 9.97239 13.8427 9.5843 12 9.5843C10.1573 9.5843 8.45055 9.97239 6.89201 10.6869L5.29749 7.92529C5.176 7.71499 4.90699 7.643 4.6967 7.76451C4.4864 7.88601 4.41441 8.15501 4.53591 8.36531L6.10696 11.0858C2.88331 12.8711 0.741089 16.2917 0.741089 20.25H23.2589C23.2589 16.2917 21.1167 12.8711 17.893 11.0858Z" />
                </svg>
                <span>Download APK</span>
              </Link>
            </div>
          </nav>

          <div className="hero-split">
            {/* Desktop: normal hero-left visible. Mobile: hidden (replaced by fixed layer) */}
            <div className="hero-left desktop-only">
              <div className="badge">
                <span className="mr-2">🚀</span> Early Testing Version Available
              </div>

              <h1>
                मेहकर आता होणार <span>Connected!</span>
              </h1>

              <p className="hero-text">
                आपल्या शहरातील अपडेट्स, वस्तू विनंती, घरपोच सेवा,
                मदत, स्थानिक खरेदी आणि community —
                आता एका powerful App मध्ये.
              </p>

              <div className="cta-group">
                <Link href="/mehkarConnect.apk" className="btn btn-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="android-icon-btn">
                    <path d="M17.523 15.3414C17.0609 15.3414 16.6908 14.9712 16.6908 14.5092C16.6908 14.0471 17.0609 13.677 17.523 13.677C17.985 13.677 18.3551 14.0471 18.3551 14.5092C18.3551 14.9712 17.985 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01496 15.3414 5.6449 14.9712 5.6449 14.5092C5.6449 14.0471 6.01496 13.677 6.47702 13.677C6.93908 13.677 7.30914 14.0471 7.30914 14.5092C7.30914 14.5092 6.93908 15.3414 6.47702 15.3414ZM17.893 11.0858L19.464 8.36531C19.5855 8.15501 19.5135 7.88601 19.3033 7.76451C19.093 7.643 18.824 7.71499 18.7025 7.92529L17.108 10.6869C15.5494 9.97239 13.8427 9.5843 12 9.5843C10.1573 9.5843 8.45055 9.97239 6.89201 10.6869L5.29749 7.92529C5.176 7.71499 4.90699 7.643 4.6967 7.76451C4.4864 7.88601 4.41441 8.15501 4.53591 8.36531L6.10696 11.0858C2.88331 12.8711 0.741089 16.2917 0.741089 20.25H23.2589C23.2589 16.2917 21.1167 12.8711 17.893 11.0858Z" />
                  </svg>
                  APK Download
                </Link>

                <Link href="#features" className="btn btn-secondary">
                  Explore Features
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Mobile spacer: takes up the same height as the fixed text so slides start below */}
            <div className="mobile-hero-spacer"></div>

            <div className="hero-right">
              <div className="phone-wrapper">
                <img
                  src={slides[currentSlide]}
                  alt="Mehkar Connect App UI"
                  className="phone-mockup"
                />
                <div className="phone-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features" ref={featuresRef}>
        <div className="container">
          <h2 className="section-title">
            आपल्या शहरासाठी बनवलेलं ❤️
          </h2>

          <p className="section-sub">
            Mehkar Connect हे फक्त App नाही,
            तर मेहकरला digitally connect करणारा community platform आहे.
          </p>

          <div className="features-grid">
            <FeatureCard
              icon={<Megaphone size={32} />}
              title="अपडेट"
              description="शहरातील महत्वाच्या अपडेट्स, notices, events आणि माहिती मिळवा."
            />
            <FeatureCard
              icon={<ShoppingCart size={32} />}
              title="वस्तू विनंती"
              description="Product online मागवण्यापूर्वी मेहकरमध्ये उपलब्ध आहे का विचारा."
            />
            <FeatureCard
              icon={<Wrench size={32} />}
              title="घरपोच सेवा"
              description="इलेक्ट्रिशियन, प्लंबर, मेकॅनिक आणि local services शोधा."
            />
            <FeatureCard
              icon={<Heart size={32} />}
              title="मदत मागा"
              description="तातडीची मदत, blood request, emergency support instantly मिळवा."
            />
            <FeatureCard
              icon={<Trophy size={32} />}
              title="उपक्रम / खेळ"
              description="Sports, events, activities आणि community participation वाढवा."
            />
            <FeatureCard
              icon={<Store size={32} />}
              title="स्थानिक खरेदी"
              description="आपल्या शहरातील दुकानदारांना support करा आणि local shopping ला प्राधान्य द्या."
            />
          </div>

          <div className="local-section">
            <h2>
              "सर्रास online खरेदी करण्यापेक्षा...
              <br />
              <span className="highlight">
                एकदा मेहकरमध्ये विचारा ❤️
              </span>"
            </h2>

            <p className="hero-text" style={{ margin: '0 auto 40px' }}>
              Local लोकांकडून खरेदी करा.
              आपल्या शहरातील व्यवसायांना support करा.
            </p>

            <div className="cta-group" style={{ justifyContent: 'center' }}>
              <Link href="/mehkarConnect.apk" className="btn btn-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="android-icon-btn">
                  <path d="M17.523 15.3414C17.0609 15.3414 16.6908 14.9712 16.6908 14.5092C16.6908 14.0471 17.0609 13.677 17.523 13.677C17.985 13.677 18.3551 14.0471 18.3551 14.5092C18.3551 14.9712 17.985 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01496 15.3414 5.6449 14.9712 5.6449 14.5092C5.6449 14.0471 6.01496 13.677 6.47702 13.677C6.93908 13.677 7.30914 14.0471 7.30914 14.5092C7.30914 14.5092 6.93908 15.3414 6.47702 15.3414ZM17.893 11.0858L19.464 8.36531C19.5855 8.15501 19.5135 7.88601 19.3033 7.76451C19.093 7.643 18.824 7.71499 18.7025 7.92529L17.108 10.6869C15.5494 9.97239 13.8427 9.5843 12 9.5843C10.1573 9.5843 8.45055 9.97239 6.89201 10.6869L5.29749 7.92529C5.176 7.71499 4.90699 7.643 4.6967 7.76451C4.4864 7.88601 4.41441 8.15501 4.53591 8.36531L6.10696 11.0858C2.88331 12.8711 0.741089 16.2917 0.741089 20.25H23.2589C23.2589 16.2917 21.1167 12.8711 17.893 11.0858Z" />
                </svg>
                Download Testing APK
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © 2026 Mehkar Connect — Made for Mehkar with ❤️
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="card">
      <div className="icon-box">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
