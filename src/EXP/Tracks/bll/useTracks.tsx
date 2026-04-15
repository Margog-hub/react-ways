import { useEffect, useState } from "react";
import { getTracks } from '../dal/getTracks'

export const useTracks = () => {
  const [tracks, setTracks] = useState<Array<any> | null>(null);
  useEffect(() => {
    getTracks().then((json) => setTracks(json.data));
  }, []);
  return {
    tracks: tracks,
    refresh: () => {
      setTracks(null)
      getTracks().then((json) => setTracks(json.data));

    }
  }
};