import { useState } from 'react'
import Folder from './components/Folder'
import explorer from './data/Folderdata'
// import './App.css'

function App() {

  const [explore, setExplore] = useState(explorer)

  return (
    <>
      <Folder explore={explore}/>
    </>
  )
}

export default App
