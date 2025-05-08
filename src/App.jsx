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
    href="https://drive.google.com/open?id=1kkbvQHSaO5mc83sf0XMlZWmTQdhOUOiO&usp=drive_fs" 
    target="_blank" 
    rel="noopener noreferrer"
    className="repo-link"
  >
    Liga del proyecto
  </a>
  <span className="link-separator"></span>
  <a 
    href="" 
    target="_blank" 
    rel="noopener noreferrer"
    className="repo-link"
  >
  </a>
</footer>
    </div>
  )
}

export default App