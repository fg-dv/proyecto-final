import VideoPlayer from './components/VideoPlayer'

function App() {
  return (
    <div className="app-container">
      <h1>Desarrollo de Aplicaciones Móviles II</h1>
      <p>Luis Felipe Fernández Gurrola</p>
      <p>EBC</p>
      
      <VideoPlayer />
      
      <footer className="footer-links">
  <a 
    href="https://github.com/fg-dv/backend-kotlin" 
    target="_blank" 
    rel="noopener noreferrer"
    className="repo-link"
  >
    Repo del Backend
  </a>
  <span className="link-separator">|</span>
  <a 
    href="https://github.com/fg-dv/front-kotlin" 
    target="_blank" 
    rel="noopener noreferrer"
    className="repo-link"
  >
    Repo del Front
  </a>
</footer>
    </div>
  )
}

export default App