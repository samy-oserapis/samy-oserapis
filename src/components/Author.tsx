import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface AuthorProps {
  image: string;
  bio: string;
}

const Author: React.FC<AuthorProps> = ({ image, bio }) => {
  const fadeIn = useScrollFadeIn();
  const fadeInImage = useScrollFadeIn({ threshold: 0.3 });
  const fadeInBio = useScrollFadeIn({ threshold: 0.3, rootMargin: '50px' });

  return (
    <section ref={fadeIn.ref} className={`author-section ${fadeIn.className}`}>
      <div ref={fadeInImage.ref} className={`author-image ${fadeInImage.className}`}>
        <img src={image} alt="Samy Oserapis" />
      </div>
      <div ref={fadeInBio.ref} className={`author-bio ${fadeInBio.className}`}>
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default Author;