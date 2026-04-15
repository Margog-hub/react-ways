import { useState, useEffect } from "react"
//import PageTitle from "./components/PageTitle";
//import Render from './EXP/Render'
//import Counter from "./EXP/Counter";
// interface Track {
//   id: string;
//   attributes: {
//     title: string;
//     lyrics?: string;
//     attachments: Array<{
//       url: string;
//     }>;
//   };
// }

function App() {
  // const [selectedTrackId, setSelectedTrackId] = useState(null);
 // const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': 'b8dc9b43-0170-4215-8394-ad1e02f2919b'
      }
    })
      .then(res => res.json())
      .then(json => setTracks(json.data))
  }, []);

  // useEffect (()=> {
  //   if (!selectedTrackId) {return}
  //    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
  //     headers: {
  //       'api-key': 'b8dc9b43-0170-4215-8394-ad1e02f2919b'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => setSelectedTrack(json.data))
  // }, [selectedTrackId])
 

  if (tracks === null) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <div>loading...</div>
      </>
    );
  }

  // if (tracks.length === 0) {
  //   return (
  //     <>
  //       <h1>Musicfun Player</h1>
  //       <div>No tracks</div>
  //     </>
  //   );
  // }

  return (
    <div>
      <div>
        {/* <Render /> */}
        {/* <Counter /> */}
      </div>
      <h1>Musicfun Player</h1>
{/*   
      <button onClick={() => {
        setSelectedTrackId(null);
        setSelectedTrack(null);
      }}>
        reset selection
      </button> */}
      
      {/* <div style={{ display: 'flex', gap: '30px' }}>
        <ul>
          {tracks.map((track) => (
            <li 
              key={track.id}
              style={{ border: track.id === selectedTrackId ? "1px solid red" : '' }}
            >
              <div onClick={() =>{
                setSelectedTrackId(track.id);  
                setSelectedTrack(null)
                }}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0]?.url} controls></audio>
            </li>
          ))}
        </ul>
        
        <div>
          <h2>Details</h2>
{!selectedTrack &&  !selectedTrackId && 'Track is not selected'}
{!selectedTrack && selectedTrackId && "Loading..."}
{selectedTrack && selectedTrackId && selectedTrackId !== selectedTrack.id && "Loading..."}
{selectedTrack && <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
            </div>}

        </div>
      </div> */}
    </div>
  );
}

export default App;