import './App.css'

// Header component
function Header() {
  return (
    <header className="header">
      <img src="/assets/logo.svg" alt="Erased Tapes logo" className="logo" />
      <nav className="nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  )
}

// Article component
function Article() {
  return (
    <article className="article">
      <h1 className="title">
        Erased Tapes:
        <span className="subtitle">Exploring the Sonic Frontier</span>
      </h1>

      <p className="lead">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
      </p>

      <div className="columns">
        <div>
          <h2>Heading</h2>
          <p>Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus.</p>
          <p>Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et.</p>
          <p>Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat.</p>
        </div>

        <div>
          <h2>Heading</h2>
          <p>Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec.</p>
          <p>Us cipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent.</p>
          <p>Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra.</p>
        </div>

        <div>
          <h2>Heading</h2>
          <p>Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti.</p>
          <p>Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci.</p>
        </div>
      </div>
    </article>
  )
}

// Album grid component
function AlbumGrid() {
  return (
    <section className="album-grid">
      <div className="featured">
        <img src="/assets/all-encores.jpg" alt="Featured album" />
      </div>
      <div className="small-albums">
        <img src="/assets/articulation.jpg" alt="Album" />
        <img src="/assets/blurred.jpg" alt="Album" />
        <img src="/assets/encores-2.jpg" alt="Album" />
        <img src="/assets/eulogy-for-evolution.jpg" alt="Album" />
      </div>
    </section>
  )
}

// Author component
function Author() {
  return (
    <section className="author">
      <div className="author-text">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
        </p>
      </div>

      <div className="author-side">
        <img src="/assets/profile_picture.jpg" alt="Author" className="author-photo" />
        <div className="socials">
          <a href="#"><img src="/assets/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="/assets/instagram-icon.svg" alt="Instagram" /></a>
          <a href="#"><img src="/assets/twitter-icon.svg" alt="Twitter" /></a>
        </div>
      </div>
    </section>
  )
}

// Comments component
function Comments() {
  return (
    <section className="comments">
      <h2>Comments</h2>

      <div className="comment">
        <p className="username">soundseeker92</p>
        <p>This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries.</p>
      </div>

      <div className="comment">
        <p className="username">Ted Baker</p>
        <p>I've been following the label for years—so glad someone's finally writing about their impact.</p>
      </div>

      <div className="comment">
        <p className="username">Queen_of_noise</p>
        <p>I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories.</p>
      </div>
    </section>
  )
}

// Footer component
function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
      <p className="copyright">Copyright © 2024 Ahmed Webb.</p>
      <div className="footer-socials">
        <a href="#"><img src="/assets/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/assets/instagram-icon.svg" alt="Instagram" /></a>
        <a href="#"><img src="/assets/twitter-icon.svg" alt="Twitter" /></a>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Article />
        <AlbumGrid />
        <Author />
      </div>
      <Comments />
      <Footer />
    </div>
  )
}

export default App