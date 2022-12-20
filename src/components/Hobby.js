import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Hobby() {
  const playlist_id = "4hXMUqcD5z7GPTQ3poWIIQ"
  const spotify_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
  const [playlist, setPlayList] = useState()
  const [selectedSong, setSelectedSong] = useState("33w7LgNJIuhs5dhSYZ0do1")
  const token = process.env.API_TOKEN
  const tmp_playlist = require('../db/my-spotify-playlist.json')

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await axios.get(spotify_url, {
  //         mode: "cors",
  //         headers: {
  //           'Accept': "application/json",
  //           'Content-Type': "application/json",
  //           'Authorization': `Bearer ${token}`
  //         },
  //       })
  //       .then(response => response).then(response => setPlayList(response.data)).catch(err => console.log(err))
  //       setPlayList(data.data)
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //   }
  //   fetchData()
  //   console.log("fetch called")
  //   console.log(playlist)
  // }, [])

  return (
    <div className="page-container hobby">
      <h4>My Playlist</h4>
      <iframe
        title="spotify-player"
        width="100%"
        height="80px"
        frameBorder="0"
        allow='autoplay'
        src={`https://open.spotify.com/embed/track/${selectedSong}?autoplay=1`}
      />
      <div className="spotify">
        <ul className="song-list">
          {tmp_playlist.items.map((item, i) => {
            return (
              <li
                className={selectedSong === item.track.id ? "song-item active" : "song-item"}
                onClick={() => setSelectedSong(item.track.id)} key={i}
              >
                {item.track.name}
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}

export default Hobby