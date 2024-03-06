import React, { useState } from 'react'

const Folder = ({explorerData}) => {


  if (explorerData.isFolder){
    return (
      <div className='main-container'>
        <div className='container'>
        <span className='foldercontainer'>📁 {explorerData.name}</span>
        <div>
          <button className='buttons'>Folder +</button>
          <button className='buttons'>File +</button>
          </div>  
          </div>
    <div style={{paddingLeft:"30px"}}>
    {explorerData.items.map((exp) => {
        return (
          <Folder key={exp.id} explorerData={exp}/>  
        );
        })}
      </div>
      </div>
    )}else{
      return <span className='file'>📄 {explorerData.name}</span>
    }

}

export default Folder
