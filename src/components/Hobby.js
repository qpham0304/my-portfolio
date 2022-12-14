import React from 'react'

function Hobby() {
  return (
    <div className="page-container hobby">
      
      <div className="spotify">
        <iframe
          style={{ borderRadius: "5px" }}
          src="https://open.spotify.com/embed/playlist/4hXMUqcD5z7GPTQ3poWIIQ?utm_source=generator"
          width="100%"
          height="90%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      
    </div>
  )
}

export default Hobby