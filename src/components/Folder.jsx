import React, { useState } from 'react'

function Folder({explore}) {

    const [expand,setExpand]= useState(false)
    
    return (
    <>    
    {
        explore.isFolder?
        <div>
            <div className="folder" onClick={()=>setExpand(!expand)}>
                📁 {explore.name}
            </div>
            <div className="file" style={{paddingLeft:25,display:expand?"flex":"none", flexDirection:'column'}}>
            {
                explore.items.map((val,i)=>{
                return(
                    <Folder explore={val} key={i}/>
                )                
            })
            }
            </div>
        </div>
        :<span>📄 {explore.name}</span>
    }
    </>
  )
}

export default Folder
