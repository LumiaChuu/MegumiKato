import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'

const quotes = [
  "I'm not a main heroine, but... is that really so bad?",
  "I just want to support everyone in my own way.",
  "Sometimes, being ordinary is extraordinary.",
  "If you notice me, maybe I'm not so plain after all."
]

function Navbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.megumi-navbar')?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="megumi-navbar">
      <div className="nav-logo">
        <a href="#">Megumi Kato</a>
      </div>
      <ul className="nav-links">
        <li><a href="#bio" onClick={(e) => scrollToSection(e, 'bio')}>Biography</a></li>
        <li><a href="#quotes" onClick={(e) => scrollToSection(e, 'quotes')}>Quotes</a></li>
        <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Gallery</a></li>
        {/* Add more links as sections are added */}
      </ul>
    </nav>
  );
}

function App() {
  const bioRef = useRef(null)
  const quoteRef = useRef(null)
  const [quoteIdx, setQuoteIdx] = useState(0)

  useEffect(() => {
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
  }, [])

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }
      )
    }
  }, [quoteIdx])

  const nextQuote = () => {
    setQuoteIdx((prev) => (prev + 1) % quotes.length)
  }

  const galleryImages = [
    { src: "/casual.jpeg", alt: "Megumi in casual wear" },
    { src: "/elegant.jpeg", alt: "Megumi in elegant dress" },
    { src: "/signature.jpeg", alt: "Megumi's signature pose" },
  ];

  return (
    <>
      <Navbar />
      <div className="megumi-container">
        <header id="home" className="megumi-header">
          <img
            src="/katomegumi.jpeg"
            alt="Megumi Kato"
            className="megumi-img"
          />
          <h1>Megumi Kato</h1>
          <h2>from Saekano: How to Raise a Boring Girlfriend</h2>
          <p className="dev-credit">Web developed by LumiaChuu</p>
        </header>
        
        <main ref={bioRef} id="bio" className="megumi-bio">
          <h3>Biography</h3>
          <p>
            Megumi Kato is the primary heroine of the popular anime and light novel series, "Saekano: How to Raise a Boring Girlfriend" (Saenai Heroine no Sodatekata). Initially portrayed as an 'ordinary' high school student, Megumi possesses a remarkably calm and often unnoticed presence. This very characteristic, however, becomes the central inspiration for Tomoya Aki, the protagonist, who aims to develop her into the main heroine of his visual novel game.
          </p>
          <p>
            Despite her seemingly plain demeanor, Megumi is observant, surprisingly insightful, and possesses a dry wit that often catches others off guard. She is not prone to dramatic emotional displays, which contrasts sharply with the other heroines in the series. Her development throughout the story showcases her growing confidence and her subtle but significant impact on those around her. She learns to express herself more, becoming an indispensable part of the Blessing Software game development circle. Her ability to remain grounded and offer practical perspectives makes her a unique and deeply cherished character by fans for her realistic and relatable portrayal.
          </p>
          <h4>Character Details:</h4>
          <ul>
            <li><strong>Full Name:</strong> Megumi Kato (加藤 恵)</li>
            <li><strong>Birthday:</strong> September 23</li>
            <li><strong>Zodiac Sign:</strong> Libra</li>
            <li><strong>Height:</strong> 160 cm (5'3")</li>
            <li><strong>Weight:</strong> Secret</li>
            <li><strong>Blood Type:</strong> O</li>
            <li><strong>School:</strong> Toyogasaki Academy</li>
            <li><strong>Class:</strong> 2-B (initially), later 3-A</li>
            <li><strong>Hobbies:</strong> Playing video games (though she doesn't show it much), observing people.</li>
            <li><strong>Signature Trait:</strong> Her ability to be 'stealthy' or unnoticeable, often referred to as her 'Stealth Mode'.</li>
            <li><strong>Voice Actor (Japanese):</strong> Kiyono Yasuno (安野希世乃)</li>
            <li><strong>Voice Actor (English):</strong> Katelyn Gault</li>
          </ul>
          <h4>Key Aspects:</h4>
          <ul>
              <li><strong>The "Boring" Heroine:</strong> Her initial label, which she gradually and charmingly subverts.</li>
              <li><strong>Emotional Anchor:</strong> Often acts as the calm center in the chaotic group dynamics.</li>
              <li><strong>Character Growth:</strong> Shows significant personal development, becoming more assertive and emotionally expressive.</li>
              <li><strong>Relationship with Tomoya:</strong> Her evolving bond with Tomoya is a central theme, moving from a classmate to a muse, and then to something more profound.</li>
          </ul>
        </main>
        
        <div id="quotes" className="megumi-quotes">
          <h3>Wisdom Corner</h3>
          <div className="quote-card" ref={quoteRef}>
            <p className="quote-text">"{quotes[quoteIdx]}"</p>
            <div className="quote-author">- Megumi Kato</div>
          </div>
          <div className="quote-controls">
            <button className="quote-btn prev-btn" onClick={() => setQuoteIdx((prev) => (prev - 1 + quotes.length) % quotes.length)} title="Previous Quote">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <div className="quote-dots">
              {quotes.map((_, index) => (
                <span key={index} className={`dot ${index === quoteIdx ? 'active' : ''}`} onClick={() => setQuoteIdx(index)}></span>
              ))}
            </div>
            <button className="quote-btn next-btn" onClick={nextQuote} title="Next Quote">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
            </button>
          </div>
        </div>
        
        <div id="gallery" className="megumi-gallery">
          <h3>Gallery</h3>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="gallery-img" />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
