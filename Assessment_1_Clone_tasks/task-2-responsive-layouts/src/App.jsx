import './App.css'

// Header
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">watch.it</h1>

        <nav className="nav">
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#romance">Romance</a>
          <a href="#drama">Drama</a>
        </nav>

        <button className="search-btn">SEARCH</button>
      </div>
    </header>
  )
}

// Movie Card
function MovieCard({ title, description, image, featured = false }) {
  return (
    <article className={featured ? "movie-card featured" : "movie-card"}>
      <div className="poster">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <p className="description">{description}</p>
        <button className="watch-btn">WATCH NOW</button>
      </div>
    </article>
  )
}


function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <div className="movies-grid">
          <MovieCard
            title="Who Framed Roger Rabbit"
            description="In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists."
            image="/assets/who-framed-roger-rabbit.jpg"
            featured={true}
          />
          <MovieCard
            title="Hook"
            description="Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter who must rescue his kids."
            image="/assets/hook.jpg"
          />
          <MovieCard
            title="La La Land"
            description="Love, dreams, and the magic of LA take center stage in this musical masterpiece."
            image="/assets/la-la-land.jpg"
          />
          <MovieCard
            title="Hidden Figures"
            description="Three unsung heroes of NASA's space race take the spotlight in this inspiring true story."
            image="/assets/hidden-figures.jpg"
          />
          <MovieCard
            title="Palm Springs"
            description="A never-ending wedding day turns into an unforgettable time-loop romance!"
            image="/assets/palm-springs.jpg"
          />
          <MovieCard
            title="Barbie"
            description="Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world."
            image="/assets/barbie.jpg"
          />
        </div>
      </main>
    </div>
  )
}

export default App