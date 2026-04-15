import { useTrackDetail } from "../bll/useTrackDetail";
import styles from './TrackDetail.module.css'

type Props ={
  trackId: string  | null
}

const TracksDetail = ({trackId}: Props) => {

  const {trackDetails} = useTrackDetail(trackId)
  
  return (
    <div className={styles.track}>
        <div >
          <h2>Details</h2>
{!trackDetails &&  !trackId && 'Track is not selected'}
{!trackDetails && trackId && "Loading..."}
{/* {selectedTrack && trackId && trackId !== selectedTrack.id && "Loading..."} */}
{trackDetails && trackId && String(trackId) !== String(trackDetails.id) && "Loading..."}
{trackDetails && <div>
              <h3>{trackDetails.attributes?.title}</h3>
              <h4>Lyrics</h4>
              <p>{trackDetails.attributes?.lyrics ?? 'no lyrics'}</p>
            </div>}

        </div>
    </div>
  )
}

export default TracksDetail