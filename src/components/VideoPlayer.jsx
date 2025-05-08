import { useRef, useState } from 'react'
import '../index.css'

const VideoPlayer = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="video-container">
      <div className="video-wrapper" onClick={togglePlay}>
        <video
          ref={videoRef}
          poster="https://via.placeholder.com/800x450"
          className="video-element"
        >
          <source src="/sample-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5
        </video>
        {!isPlaying && (
          <div className="play-button">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer