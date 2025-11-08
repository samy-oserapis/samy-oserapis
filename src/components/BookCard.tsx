import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface BookCardProps {
  title: string;
  cover: string;
  description: string;
  pdfLink: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, cover, description, pdfLink }) => {
  const fadeIn = useScrollFadeIn({ threshold: 0.2 });

  return (
    <div ref={fadeIn.ref} className={`book-card ${fadeIn.className}`}>
      <img src={cover} alt={`${title} cover`} className="book-cover" />
      <div className="book-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="pdf-link">
          Read PDF
        </a>
      </div>
    </div>
  );
};

export default BookCard;