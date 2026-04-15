import {useState, useEffect} from 'react'
import { getTracks } from '../dal/api';
import {type TrackListItemResource} from '../dal/api'

export const useTracks = () => {
    const [tracks, setTracks] = useState <Array <TrackListItemResource> | null> (null);
  useEffect(() => {
 
       getTracks().then((json) => setTracks(json.data));
  }, []);
  
  return {tracks}
}
