import React from 'react';

interface BookCardProps {
  title: string;
  cover: string;
  description: string;
  pdfLink: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, cover, description, pdfLink }) => {
  return (
    <div className="book-card">
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