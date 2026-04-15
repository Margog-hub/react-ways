
import TrackItem from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from './TracksList.module.css'


type Props ={
   selectedTrackId: string | null
   onTrackSelect : (id: string | null) => void
}

const TracksList = ({ onTrackSelect, selectedTrackId } : Props) => {
  const {tracks} =useTracks()

  if (tracks === null) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <div>loading...</div>
      </>
    );
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <div>No tracks</div>
      </>
    );
  }

  const handleResetClick = () => {onTrackSelect(null); };

  const handleClick = (trackId : string) => { onTrackSelect?.(trackId); };
  return (
    <div>
      <button onClick={handleResetClick}>Reset</button>
      <hr/>
      <ul className= { styles.track}>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === selectedTrackId}
            onSelect={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};
export default TracksList;
