import React from 'react'
import './App.css'
import Author from './components/Author'
import BookCard from './components/BookCard'

function App() {
  const authorBio = `In the shadows between reality and mysticism, Samy Oserapis weaves tales that challenge the boundaries of existence itself. His narratives delve deep into the enigmatic realms where divine mysteries intersect with human consciousness, crafting stories that blur the lines between the ordinary and the extraordinary. Through his unique lens, readers are invited to explore the hidden dimensions of reality and question the very nature of creation.`

  const books = [
    {
      title: "The Pavilion of Blue Dreams",
      cover: "src/assets/pavillon-dream.jpg",
      description: "In a world so unreliable lies a narrator who feels lost, who doesn't belong. The only link he finds in his life is a girl named Sophia. Perhaps she holds the key to it all. Maybe it is finally time to realize who has unleashed upon him this damnation, this life-changing damnation. Does the Orion belt tell him something? Or is it merely a guide?",
      pdfLink: "src/assets/pavillon-dream.jpg"
    },
    {
      title: "Vandalism in Yellow",
      cover: "src/assets/vandalism-in-yellow.jpg",
      description: "In a world hanging in the balance, Razi, a college student, receives a cryptic invitation to dine with Lady Shiva—a mysterious and mystic woman with a perilous agenda. Shiva unveils her audacious plan to force the hand of God into bringing an end to the current creation and ushering in a superior one. With the enticing promises of fame and fortune, she implores Razi for assistance. Because for some reason, without him, her plan cannot come to light.",
      pdfLink: "/path/to/book2.pdf"
    }
  ]

  return (
    <div className="portfolio">
      <Author
        image="src/assets/profile-img.png"
        bio={authorBio}
      />
      <div className="books-section">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            cover={book.cover}
            description={book.description}
            pdfLink={book.pdfLink}
          />
        ))}
      </div>
    </div>
  )
}

export default App
