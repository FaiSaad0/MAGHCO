import { useEffect, useMemo, useState } from 'react';
import { translations, isRTL } from './i18n.ts';
import type { Lang } from "./i18n.ts";

import HERO_IMG from './assets/hero-refinery.jpg';
import THUMB_IMG from './assets/hero-refinery.jpg';

type Tab = 'oilgas' | 'petro';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [tab, setTab] = useState<Tab>('oilgas');
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const dict = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    const root = document.documentElement;
    const rtl = isRTL(lang);
    root.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    root.classList.toggle('rtl', rtl);
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = isMoreOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMoreOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMoreOpen) setIsMoreOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMoreOpen]);

  const subject = lang === 'ar' ? 'طلب منتج' : 'Product Request';
  const body =
    lang === 'ar'
      ? 'مرحباً فريق MAGHCO، أرغب في توفير: [اسم المنتج]. الكمية: [ ]. الوجهة: [ ].'
      : 'Hello MAGHCO Team, I\'m interested in sourcing: [product name]. Quantity: [ ]. Destination: [ ].';
  const mailtoLink = `mailto:Sales@app:MAGHCO.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const year = new Date().getFullYear();

  return (
    <div>
      {/* Language Switcher */}
      <div className="lang-switch" aria-label="Language switcher">
        <button
          className={`pill ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >
          {translations.en.header.en}
        </button>
        <button
          className={`pill ${lang === 'ar' ? 'active' : ''}`}
          onClick={() => setLang('ar')}
          aria-pressed={lang === 'ar'}
        >
          {translations.en.header.ar}
        </button>
      </div>

      {/* Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
        }}
        aria-label="Hero"
      >
        <div className="container hero-content">
          <h1 className="brand">{dict.common.brand}</h1>
          <p className="hero-headline">{dict.hero.headline}</p>

          <a href="#contact" className="btn">
            {dict.hero.cta}
          </a>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="panel section" aria-label="Mission and Vision">
        <div className="container">
          <div className="mv-row">
            <div className="mv-card">
              <h3 className="mv-title">
                <svg className="icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="#9fb2c9" strokeWidth="1.5" />
                  <path
                    d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"
                    stroke="#9fb2c9"
                    strokeWidth="1.2"
                  />
                </svg>
                {dict.missionVision.missionTitle}
              </h3>
              <p className="mv-text">{dict.missionVision.missionText}</p>
            </div>

            <div className="mv-card">
              <h3 className="mv-title">
                <svg className="icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                    stroke="#9fb2c9"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="12" cy="12" r="3" fill="#9fb2c9" />
                </svg>
                {dict.missionVision.visionTitle}
              </h3>
              <p className="mv-text">{dict.missionVision.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products section" aria-label="Products">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Product categories">
            <button
              role="tab"
              aria-selected={tab === 'oilgas'}
              className={`tab ${tab === 'oilgas' ? 'active' : ''}`}
              onClick={() => setTab('oilgas')}
            >
              {dict.products.tabs.oilgas}
            </button>
            <button
              role="tab"
              aria-selected={tab === 'petro'}
              className={`tab ${tab === 'petro' ? 'active' : ''}`}
              onClick={() => setTab('petro')}
            >
              {dict.products.tabs.petro}
            </button>
          </div>

          <div className="products-shell">
            <div className="grid">
              {(tab === 'oilgas' ? dict.products.oilgasItems : dict.products.petroItems).map((item, idx) => (
                <div key={idx} className="tile">
                  {item}
                </div>
              ))}

              {/* Right-side thumbnail card (CTA) */}
              <div
                className="thumb"
                style={{ backgroundImage: `url(${THUMB_IMG})` }}
                aria-label="Industrial thumbnail"
                role="button"
                tabIndex={0}
                onClick={() => setIsMoreOpen(true)}
                onKeyDown={(e) => { if (e.key === 'Enter') setIsMoreOpen(true); }}
              >
                <div className="thumb-label">{dict.common.andMore}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities: card grid */}
      <section className="capabilities section" aria-label={dict.capabilities.title}>
        <div className="container">
          <h2 className="section-title">{dict.capabilities.title}</h2>
          <div className="cap-grid">
            {dict.capabilities.items.map((title, idx) => (
              <div key={idx} className="cap-card">
                <div className="cap-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7h16M6 12h12M8 17h8" stroke="#9fb2c9" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="cap-title">{title}</h3>
                <p className="cap-desc">{dict.capabilities.descs[idx]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With MAGHCO? */}
      <section className="partner section" aria-label={dict.partner.title}>
        <div className="container">
          <h2 className="section-title">{dict.partner.title}</h2>
          <div className="partner-grid">
            {dict.partner.points.map((p, idx) => (
              <div key={idx} className={`partner-card ${idx === 1 ? 'emphasis' : ''}`}>
                <div className="partner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="#9fb2c9" strokeWidth="1.2"/>
                    <path d="M7 12l3 3 7-7" stroke="#9fb2c9" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="partner-title">{p.title}</h3>
                <p className="partner-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work: numbered process flow */}
      <section className="process section" aria-label={dict.process.title}>
        <div className="container">
          <h2 className="section-title">{dict.process.title}</h2>
          <div className="process-steps">
            {dict.process.steps.map((title, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              const isLast = idx === dict.process.steps.length - 1;
              return (
                <div key={idx} className={`process-step ${isLast ? 'last' : ''}`}>
                  <div className="step-num">{num}</div>
                  <h3 className="step-title">{title}</h3>
                  <p className="step-desc">{dict.process.descs[idx]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Modal for "And More" */}
      {isMoreOpen && (
        <div className="modal-backdrop" onClick={() => setIsMoreOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="moreCtaTitle"
            aria-describedby="moreCtaBody"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="moreCtaTitle" className="modal-title">{dict.moreCta.title}</h3>
            <p id="moreCtaBody" className="modal-body">{dict.moreCta.body}</p>
            <div className="modal-actions">
              <a href={mailtoLink} className="btn">{dict.moreCta.primary}</a>
              <button className="btn btn-secondary" onClick={() => setIsMoreOpen(false)}>
                {dict.moreCta.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="contact panel" aria-label="Contact">
        <div className="container">
          <h2 className="section-title">{dict.contact.title}</h2>
          <div className="contact-email">{dict.common.email}</div>

          <a className="btn" href="mailto:Sales@app:MAGHCO.com">
            {dict.contact.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" aria-label="Footer">
        <div className="container footer-row">
          <div className="footer-left">{dict.common.brand}</div>
          <div className="footer-center">{dict.footer.copyright(year)}</div>
        </div>
      </footer>
    </div>
  );
}