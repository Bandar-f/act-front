import axios from 'axios'
import React,{useState} from 'react'
import style from './Addpet.module.css'
const Addpet = () => {

  const [isCorrect,setIsCorrect]=useState(false)

  const [data,setData]=useState({})


  const handleOnChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  const handleOnClick=()=>{
    axios.post('http://127.0.0.1:5000/add',data)
  }
  
  return (
    <div className={style.container}>
      <h1>Pet Shelter</h1>
      <h4>Know a pet needing a home</h4>
      <div className={style.form}>
      <div>
          <div>
         <p>Pet Name:</p>
         <input onChange={handleOnChange} type="text" name="name"/>
          {isCorrect? "":<p>must be atleast three characters</p>}

          </div>

          <div>
         <p>Pet Type:</p>
         <input onChange={handleOnChange} type="text" name="type"/>
          {isCorrect? "":<p>must be atleast three characters</p>}

          </div>

          <div>
         <p>Pet Description:</p>
         <input onChange={handleOnChange} type="text" name="desc"/>
          {isCorrect? "":<p>must be atleast three characters</p>}

          </div>

          

          </div>


          <div className={style.col2}>
            <h5 className={style.tag}>Skills (optional)</h5>

            
          <div>
         <p>Skill 1:</p>
         <input onChange={handleOnChange} type="text" name="skillf"/>
          {isCorrect? "":<p>must be atleast three characters</p>}

          </div>

          
          <div>
         <p>Skill 2:</p>
         <input onChange={handleOnChange} type="text" name="skills"/>
          {isCorrect? "":<p>must be atleast three characters</p>}

          </div>

          
          <div>
         <p>Skill 3:</p>
         <input onChange={handleOnChange} type="text" name="skillt"/>
          {isCorrect? "":<p>must be atleast three characters</p>}

          </div>


          </div>
          </div>


          <button onClick={handleOnClick} className={style.btn}>
            Add Pet
          </button>

          
      </div>

   
  )
}

export default Addpet