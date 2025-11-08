import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const Quotes: React.FC = () => {
  const fadeIn = useScrollFadeIn({ threshold: 0.2 });
  const fadeInTitle = useScrollFadeIn({ threshold: 0.3 });

  const quotes = [
    {
      text: "Perhaps the Orion belt wasn't just a guide, but a gateway to understanding our own cosmic significance.",
      book: "The Pavilion of Blue Dreams"
    },
    {
      text: "In Lady Shiva's eyes, I saw not just ambition, but the reflection of creation itself, waiting to be unmade.",
      book: "Vandalism in Yellow"
    }
  ];

  return (
    <section ref={fadeIn.ref} className={`quotes-section ${fadeIn.className}`}>
      <h2 ref={fadeInTitle.ref} className={fadeInTitle.className}>Echoes of Mystery</h2>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <blockquote>
              <p>{quote.text}</p>
              <footer>— {quote.book}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;