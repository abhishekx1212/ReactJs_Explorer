import { useState } from 'react'
import Folder from './components/Folder'
import explorer from './data/Folderdata'
import Fun_com from './components/Fun_com'
import Class_comp from './components/Class_com'
import './index.css'
import './App.css'

function App() {

  const [explore, setExplore] = useState(explorer)

  return (
    <>
      <Fun_com/>
      <Class_comp/>
    </>
  )
}

export default App
