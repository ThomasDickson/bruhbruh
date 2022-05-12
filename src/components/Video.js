import React from 'react'
import "../App.css";
import "./Video.css";

function Video() {
  return (
    <div className='video-container'>
      <video src="/planevideo.mp4" autoPlay loop muted/>
      <h1>Come fly with us.</h1>
      <h2></h2>
      <p>For quick cheap trips and more!</p>
    </div>
  )
}

export default Video;
