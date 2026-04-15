import {useState, useEffect} from 'react'
import { getTrack, type TrackDetailsResource } from '../dal/api';


export const useTrackDetail = (trackId: string | null) => {
     const [trackDetails, setTrackDetails] = useState<TrackDetailsResource  | null>(null);

 useEffect (()=> {
    if (!trackId) {
      setTrackDetails(null) 
      return}
   
    getTrack(trackId)
             .then(json => setTrackDetails(json.data)) 

  }, [trackId])
 
  return {trackDetails}
}
