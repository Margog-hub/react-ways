import  { useState } from "react";

const Render = () => {
  const [tracks] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}])
  // const [tracks] = useState([])
  const [selectedTrackId] = useState(1);
  const [selectedTrack] = useState({id: 1});
  return (
    <div>
      <div>
        <h3>Details</h3>
        {selectedTrackId && !selectedTrack && <span>Loading...</span>}
        {selectedTrackId && selectedTrack &&selectedTrackId !== selectedTrack.id && <span>Loading...</span>}
      {selectedTrack && <div>{selectedTrack.id}</div>}  
      </div>
      <div>
        <h3>List</h3>
    
{tracks.length > 0 && tracks.map(track =><div key={track.id} style={{color: track.id === selectedTrackId ? 'green' :'white'}}> {track.id}</div>)}
      </div>
    </div>
  );
};

export default Render;
