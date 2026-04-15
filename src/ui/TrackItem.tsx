import {type TrackListItemResource} from '../dal/api'
import styles from './TracksList.module.css'
import clsx from 'clsx'

type Props ={
   track:TrackListItemResource 
   isSelected: boolean,
   onSelect :(trackId: string) => void
}

const TrackItem = ({track, isSelected,  onSelect  } : Props) => {
  
  const handleClick =() => onSelect?.(track.id)

    // const className = styles.track + ' ' + (isSelected ? styles.selected : '');

const className = clsx({
[styles.track] : true,
[styles.selected] : isSelected
})

  return (
    <div>
    
        <li className={className}  >
              <div onClick={handleClick}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0]?.url} controls></audio>
            </li>
    </div>
  )
}

export default TrackItem