import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import TracksList from './ui/TracksList'
import TracksDetail from './ui/TracksDetail'
// import Exp from './EXP/Exp'
import { useTrackSelection } from './bll/useTrackSelection'

createRoot(document.getElementById('root')!).render(
    <MainPage />
)

 export function MainPage () {
    const{trackId, setTrackId} = useTrackSelection()

    const handleTrackSelect = (id: string  | null) : void => {
          setTrackId(id)
    }

    return <div>
     
        <div style={{display: "grid", gridTemplateColumns: '400px 1fr' }}>
            <TracksList selectedTrackId={trackId} onTrackSelect = {handleTrackSelect}/>
            <TracksDetail trackId ={trackId}/>
        </div>
        {/* <Exp /> */}
       
    </div>
}

