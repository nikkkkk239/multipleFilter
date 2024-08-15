import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  productContext } from './Helper/Context'

function App() {
  const {dataToBeDisplayed,setDataToBeDisplayed,categories,data}=useContext(productContext)
  
  const handleAddition=(cat)=>{
    if(dataToBeDisplayed.indexOf(cat) == -1){
      setDataToBeDisplayed([...dataToBeDisplayed,cat])
    }else{
      let arr=dataToBeDisplayed.filter((data)=>{
        return data!=cat
      })
      setDataToBeDisplayed(arr)
    }
  }


  return (
    <>
      <div style={{display:'flex',gap:'30px',justifyContent:'center',marginTop:'30px'}}>
        {categories && categories.map((cat,i)=>{
          return <div key={i} onClick={()=>handleAddition(cat)} style={dataToBeDisplayed.indexOf(cat) != -1 ? {display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid black',paddingLeft:'10px',paddingRight:'10px',paddingTop:'5px',paddingBottom:'5px',borderRadius:'10px',cursor:'pointer',backgroundColor:'black',color:'white'} :{display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid black',paddingLeft:'10px',paddingRight:'10px',paddingTop:'5px',paddingBottom:'5px',borderRadius:'10px',cursor:'pointer'}}>
              {cat}
            </div>
        })}
      </div>
      <div style={{display:'flex',gap:'30px',justifyContent:'center',marginTop:'30px',flexWrap:'wrap'}}>
        {
          dataToBeDisplayed.length==0 ?
          data.map((cat,i)=>{
            return <div key={i} style={{display:'flex',gap:'20px',justifyContent:'start',alignItems:'center',flexWrap:'wrap',border:'2px solid black',padding:'10px 5px',borderRadius:'10px'}}>
              <div style={{fontSize:'17px'}}>{cat.name}</div>
              <div style={{fontSize:'12px',color:'gray'}}>{cat.category}</div>
            </div>
          }) :
          data.map((cat,i)=>{
            if(dataToBeDisplayed.indexOf(cat.category) != -1){
              
              return <div key={i} style={{display:'flex',gap:'20px',justifyContent:'start',alignItems:'center',flexWrap:'wrap',border:'2px solid black',padding:'10px 5px',borderRadius:'10px'}}>
              <div style={{fontSize:'17px'}}>{cat.name}</div>
              <div style={{fontSize:'12px',color:'gray'}}>{cat.category}</div>
            </div>
            }
          })
        }

      </div>
      
    </>
  )
}

export default App
