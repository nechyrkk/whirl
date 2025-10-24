import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  toggleMobileMenu, 
  closeMobileMenu, 
  setActiveSection,
  setEmail,
  subscribeStart,
  subscribeSuccess
} from './store';
import './App.css';

// SVG Icons Components
const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12 L12 16 L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
  </svg>
);

const CameraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const BellIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
);

const LockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

const BookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
    <circle cx="12" cy="8" r="5"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

function App() {
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.ui);
  const { email } = useSelector((state) => state.newsletter);

  // Закрытие мобильного меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        dispatch(closeMobileMenu());
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen, dispatch]);

  // Обработка скролла для определения активной секции
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'care', 'whirl', 'track', 'tasks', 'blog'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            dispatch(setActiveSection(section));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribeStart());
    
    // Симуляция API запроса
    setTimeout(() => {
      console.log('Email subscribed:', email);
      dispatch(subscribeSuccess());
      alert('Thank you for subscribing!');
    }, 1000);
  };

  const handleMobileMenuClick = (e) => {
    e.stopPropagation();
    dispatch(toggleMobileMenu());
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <LogoIcon />
              <span className="logo-text">Whirl</span>
            </div>
            
            <button 
              className="mobile-menu-btn"
              onClick={handleMobileMenuClick}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              <a href="#features" onClick={() => dispatch(closeMobileMenu())}>Features</a>
              <a href="#pricing" onClick={() => dispatch(closeMobileMenu())}>Pricing</a>
              <a href="#integrations" onClick={() => dispatch(closeMobileMenu())}>Integrations</a>
              <a href="#learn" onClick={() => dispatch(closeMobileMenu())}>Learn</a>
            </nav>

            <div className="header-actions">
              <button className="btn-secondary">Sign in</button>
              <button className="btn-primary">Book a demo</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your everyday<br/>tasks, automated.
              </h1>
              <p className="hero-description">
                Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Book a demo</button>
                <button className="btn-link">Learn more →</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="placeholder-image hero-placeholder">
              </div>
            </div>
          </div>

          <div className="trusted-section">
            <p className="trusted-text">Trusted by 50,000+ companies</p>
            <div className="company-logos">
              <div className="company-logo">Feedzilla</div>
              <div className="company-logo">NuevoTech</div>
              <div className="company-logo">Optimier</div>
              <div className="company-logo">Candiot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-cards" id="features">
        <div className="container">
          <div className="cards-grid">
            <div className="feature-card card-yellow">
              <LightningIcon />
              <h3>Fast. Really fast.</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="feature-card card-blue">
              <CameraIcon />
              <h3>More bang for buck.</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="feature-card card-pink">
              <ShieldIcon />
              <h3>Safe and secure.</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="care-section" id="care">
        <div className="container">
          <div className="care-content">
            <div className="care-text">
              <h2 className="section-title">
                We will take care of everything,<br/>so you can get back to relaxing.
              </h2>
              <div className="care-features">
                <div className="care-feature" style={{ cursor: 'pointer', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                  <div onClick={() => setActiveAccordion(0)} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', width: '100%' }}>
                    <CheckCircleIcon />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>Anti-loss technology</h4>
                        <span style={{ transform: activeAccordion === 0 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                      </div>
                      {activeAccordion === 0 && (
                        <p style={{ marginTop: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="care-feature" style={{ cursor: 'pointer', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                  <div onClick={() => setActiveAccordion(1)} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', width: '100%' }}>
                    <CheckCircleIcon />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>Exchange easily</h4>
                        <span style={{ transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                      </div>
                      {activeAccordion === 1 && (
                        <p style={{ marginTop: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="care-feature" style={{ cursor: 'pointer', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                  <div onClick={() => setActiveAccordion(2)} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', width: '100%' }}>
                    <CheckCircleIcon />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>Fully encrypted</h4>
                        <span style={{ transform: activeAccordion === 2 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                      </div>
                      {activeAccordion === 2 && (
                        <p style={{ marginTop: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="care-feature" style={{ cursor: 'pointer', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                  <div onClick={() => setActiveAccordion(3)} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', width: '100%' }}>
                    <CheckCircleIcon />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>Plenty of options</h4>
                        <span style={{ transform: activeAccordion === 3 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                      </div>
                      {activeAccordion === 3 && (
                        <p style={{ marginTop: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="care-image">
              <div className="placeholder-image care-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Whirl Section */}
      <section className="whats-whirl" id="whirl">
        <div className="container">
          <h2 className="section-title center">What's Whirl<br/>all about?</h2>
          <div className="whirl-cards">
            <div className="whirl-card">
              <SearchIcon />
              <h3>All on one place.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="whirl-card">
              <BellIcon />
              <h3>Get daily alerts.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="whirl-card">
              <LockIcon />
              <h3>Safe and secure.</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Set & Track Section */}
      <section className="track-section" id="track">
        <div className="container">
          <div className="track-content">
            <div className="track-image">
              <div className="placeholder-image track-placeholder"></div>
            </div>
            <div className="track-text">
              <h2 className="section-title white">
                Set, forget, and then track.
              </h2>
              <p className="track-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="track-features">
                <li>✓ Understand your options</li>
                <li>✓ You own the shares</li>
                <li>✓ No lock ins</li>
              </ul>
              <button className="btn-primary">Book a Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks Automated Section */}
      <section className="tasks-section" id="tasks">
        <div className="container">
          <h2 className="section-title center">Your tasks, automated.</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="tasks-grid">
            <div className="task-card">
              <BookIcon />
              <h3>Learn your options.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="task-card">
              <LightbulbIcon />
              <h3>Stay informed.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloretro.</p>
            </div>
            <div className="task-card">
              <ZapIcon />
              <h3>Automate it all.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum.</p>
            </div>
            <div className="task-card">
              <LayersIcon />
              <h3>Stay informed.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et consectetur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="blog-header">
            <h2 className="section-title">Get smarter, with our blog.</h2>
            <a href="#blog" className="see-all">See All Posts</a>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-image pink-bg">
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Improvements</span>
                  <span className="blog-date">April 24, 2022</span>
                </div>
                <h3>Automating Daily Tasks from Your Phone</h3>
                <p>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image blue-bg">
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Tips & Tricks</span>
                  <span className="blog-date">April 24, 2022</span>
                </div>
                <h3>Can You Automate Group Learning?</h3>
                <p>Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus.</p>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image yellow-bg">
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">News</span>
                  <span className="blog-date">April 24, 2022</span>
                </div>
                <h3>Our $3,000,000 B Round Investors</h3>
                <p>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Get started with Whirl</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="cta-details">
              <span>✓ Free 30 day trial</span>
              <span>✓ No credit card required</span>
            </div>
            <button className="btn-primary">Book a demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column footer-brand">
              <div className="logo">
                <LogoIcon />
                <span className="logo-text">Whirl</span>
              </div>
              <p className="footer-credits">
                Built by <span className="highlight">Nikolai Bain</span>.<br/>
                Powered by <span className="highlight">Webflow</span>.
              </p>
            </div>

            <div className="footer-column">
              <h4>Info</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Admin</h4>
              <ul>
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#style">Style Guide</a></li>
                <li><a href="#licenses">Licenses</a></li>
                <li><a href="#instructions">Instructions</a></li>
                <li><a href="#changelog">Changelog</a></li>
                <li><a href="#password">Password</a></li>
                <li><a href="#404">404</a></li>
              </ul>
            </div>

            <div className="footer-column footer-newsletter">
              <h4>Newsletter</h4>
              <p>Sign up for the latest news, company insights, and Whirl updates.</p>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  required
                />
                <button type="submit">→</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2022 Whirl. All Rights Reserved. Illustrations by Streamline.</p>
            <div className="social-links">
              <a href="#twitter" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#linkedin" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
