import "./App.css";
import Author from "./components/Author";
import BookCard from "./components/BookCard";
import Header from "./components/Header";
import profileImg from "./assets/profile-img.jpeg";
import pavillonDream from "./assets/pavillon-dream.jpg";
import vandalismYellow from "./assets/vandalism-in-yellow.jpg";

function App() {
  const authorBio = `Samy Oserapis, born in 1995 in Annaba, Algeria, is a novelist and a doctor. After graduating, he moved to Germany where he is doing his residency training. 

He published his first novel, 'The Pavilion of Blue Dreams' in Algeria after winning a national contest, and his second novel, 'Vandalism in Yellow' in Germany. 

His writing style is mainly influenced by Haruki Murakami's magical-realism, the humor and philosophies of Kurt Vonnegut, the depth of Frank Herbert's characters, and cinema. 

He combines North-African lore with renaissance philosophies, Asian mysticism, pop-culture and postmodernism. 

He is an amateur Jazz piano player, a cinephile, and terrible with names. `;

  const books = [
    {
      title: "The Pavilion of Blue Dreams",
      cover: pavillonDream,
      description:
        "After his placid world is altered by the visit of a an enigmatic man, the protagonist launches on a quest to un-riddle the new mystery enshrouding his reality. Soon however, he finds himself in a netherworld that lies beneath the placid surface of Bone. His path intersects with a group of idiosyncratic people, occurrences, and - otherworldly escapades: an uncanny neurologist; an obscure Oracle; an eccentric, psychic teenage girl; and Sophia, the pianist. In order to gain back the rhythm of the old life, the protagonist must unveil olden secrets, and untwine profound and tangled connections that bind him and the people he meets together. As a result, he ends up learning about the ultimate reason why he's the center of a conundrum that goes beyond time and space.",
      pdfLink:
        "/samy-oserapis/pdfs/The-Pavilion-Of-Blue-Dreams-Manuscript-by-Samy-Oserapis.pdf",
    },
    {
      title: "Vandalism in Yellow",
      cover: vandalismYellow,
      description:
        "In a world hanging in the balance, Razi, a college student, receives a cryptic invitation to dine with Lady Shiva—a mysterious and mystic woman with a perilous agenda. Shiva unveils her audacious plan to force the hand of God into bringing an end to the current creation and ushering in a superior one. With the enticing promises of fame and fortune, she implores Razi for assistance. Because for some reason, without him, her plan cannot come to light. Razi must navigate a web of relationships, including his friend Noah, a fallen math genius, Stella, his amnesic lover, his enigmatic mentor J, the charming Lamperouge, a poet confronting tragedies, and Qalam, the enforcer of fate who opposes Shiva's scheme. Bound by destiny and propelled by profound questions, Razi embarks on a quest to unravel the meaning of life. Will he choose to preserve the fragile fabric of the world or embrace the audacious vision of a new reality? Prepare to be captivated by a thought-provoking odyssey that challenges perceptions and explores the delicate balance between creation and destruction. Where choices carry cosmic consequences, and the true essence of life hangs in the balance.",
      pdfLink: "/samy-oserapis/pdfs/Vandalism-in-Yellow.Final.pdf",
    },
  ];

  return (
    <div className="portfolio">
      <Header />
      <main className="content">
        <Author image={profileImg} bio={authorBio} />
        {/* <Quotes /> */}
        <div className="books-section">
          <h2>Literary Works</h2>
          <div className="books-grid">
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
        <footer className="contact-section">
          <h2>Connect with the Author</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/oserapis/" className="social-link">
              Instagram
            </a>
            <a href="mailto:samy.oserapis@gmail.com" className="social-link">
              Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
