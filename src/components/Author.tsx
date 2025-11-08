import React from 'react';

interface AuthorProps {
  image: string;
  bio: string;
}

const Author: React.FC<AuthorProps> = ({ image, bio }) => {
  return (
    <section className="author-section">
      <div className="author-image">
        <img src={image} alt="Samy Oserapis" />
      </div>
      <div className="author-bio">
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default Author;