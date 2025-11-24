import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('June 30, 2026 00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Countdown Timer */}
        <div className="countdown-timer">
          <div className="timer-unit">
            <span className="timer-value">{timeLeft.days}</span>
            <span className="timer-label">Days</span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-unit">
            <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="timer-label">Hours</span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-unit">
            <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="timer-label">Minutes</span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-unit">
            <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="timer-label">Seconds</span>
          </div>
        </div>

        <div className="hero-content">
          <img src="/logo.png" alt="Sunfyre Capital" className="hero-logo" />
          <h1 className="hero-title">Sunfyre Capital</h1>
          <p className="hero-tagline">Where Wealth Ascends</p>
          <p className="hero-description">
            Elevate your financial journey with distinction. We cultivate prosperity through
            refined strategy, impeccable taste, and unwavering commitment to excellence.
          </p>
          <div className="hero-divider"></div>
        </div>

        {/* Service Cards Below Hero */}
        <div className="hero-cards">
          <div className="feature-card">
            <h3>Private Wealth Management</h3>
            <p>Tailored investment strategies crafted exclusively for high-net-worth individuals. We deliver sophisticated portfolio construction, tax-efficient planning, and discretionary asset management that adapts to your evolving financial landscape.</p>
          </div>
          <div className="feature-card">
            <h3>Legacy Planning</h3>
            <p>Secure your family's prosperity across generations with comprehensive estate structuring, trust administration, and succession strategies. We architect financial frameworks that preserve wealth and values for decades to come.</p>
          </div>
          <div className="feature-card">
            <h3>Exclusive Investments</h3>
            <p>Access curated opportunities in private equity, venture capital, and alternative assets reserved for our distinguished clientele. Direct allocations to premier funds and co-investment vehicles unavailable to retail markets.</p>
          </div>
        </div>
      </section>

      {/* Pegasus Product Section */}
      <section className="pegasus">
        <div className="pegasus-content">
          <div className="pegasus-badge">Flagship Product</div>
          <h2 className="pegasus-title">Pegasus</h2>
          <p className="pegasus-subtitle">The All-in-One Financial Core</p>
          <p className="pegasus-description">
            Experience the pinnacle of financial technology. Pegasus seamlessly integrates every aspect
            of your wealth—from portfolio management to real-time analytics, from tax optimization to
            concierge banking—into one elegant, powerful platform.
          </p>
          <div className="pegasus-features">
            <span className="feature">Unified Dashboard</span>
            <span className="feature">Real-Time Intelligence</span>
            <span className="feature">Concierge Support</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="section-title">Begin Your Journey</h2>
          <p className="contact-text">
            Sunfyre Capital accepts a limited number of clients to ensure personalized attention
            and exceptional results. Let us discover how we can serve your ambitions.
          </p>
          <a href="mailto:contact@sunfyrecapital.com" className="contact-button">
            Inquire Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="/logo2.png" alt="Sunfyre Capital" className="footer-logo" />
        <p>&copy; 2025 Sunfyre Capital. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
