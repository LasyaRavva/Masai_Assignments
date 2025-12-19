import { useRef, useState } from 'react'
import './VideoPlayer.css'

function VideoPlayer() {
  const videoRef = useRef(null)
  
  // State for optional part: multiple videos
  const [videos] = useState([
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  ])
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Mandatory Part: Control functions using useRef (NO STATE CHANGE)
  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  const handleForward = () => {
    videoRef.current.currentTime += 5
  }

  const handleRewind = () => {
    videoRef.current.currentTime -= 5
  }

  // Optional Part: Multiple video support
  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  return (
    <div className="video-player-container">
      <h1>🎬 Custom Video Player Using useRef</h1>
      
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={videos[currentVideoIndex]}
          width="600"
          height="400"
          controls={false}
          className="video-element"
        />
      </div>

      <div className="controls-section">
        <div className="mandatory-controls">
          <h2>Mandatory Controls</h2>
          <p className="info-text">
            ℹ️ These buttons control video behavior using useRef (NO state changes)
          </p>
          <div className="button-group">
            <button onClick={handlePlay} className="btn btn-play">▶️ Play</button>
            <button onClick={handlePause} className="btn btn-pause">⏸ Pause</button>
            <button onClick={handleRewind} className="btn btn-rewind">⏪ Rewind (5s)</button>
            <button onClick={handleForward} className="btn btn-forward">⏩ Forward (5s)</button>
          </div>
        </div>

        <div className="optional-controls">
          <h2>Optional: Multiple Videos</h2>
          <p className="info-text">
            Videos: {currentVideoIndex + 1} / {videos.length}
          </p>
          <div className="button-group">
            <button onClick={handlePrevious} className="btn btn-prev">⏮ Previous</button>
            <button onClick={handleNext} className="btn btn-next">⏭ Next</button>
          </div>
        </div>

        <div className="observation">
          <h3>🔍 Important Observation</h3>
          <p>
            ✅ Clicking Play/Pause/Forward/Rewind <strong>does NOT change React state</strong><br/>
            ✅ Clicking Play/Pause/Forward/Rewind <strong>does NOT cause re-rendering</strong><br/>
            ✅ Still, the video behavior changes immediately<br/>
            <br/>
            <strong>Why?</strong> Because we use <code>useRef</code> to directly access and manipulate the DOM element.<br/>
            <strong>Proof:</strong> Not all UI behavior in React requires state management!
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
