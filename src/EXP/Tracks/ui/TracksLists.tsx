
import { useTracks } from "../bll/useTracks";

const TracksLists = () => {

  const {tracks, refresh} =useTracks()

  if (tracks === null) {
    return <div> Loagin... </div>;
  }
  const handleRefreshClick =()=> {refresh()}

  return (
    <div>
      <button onClick={handleRefreshClick}> Refresh</button>
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>{track.attributes.title}</li>
      ))}
    </ul>
    </div>
  );
};

export default TracksLists;




