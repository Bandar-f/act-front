import React from 'react'
import style from './Home.module.css'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <h1> Pet Shelter</h1>
        <Link to="/add">
        <button className={style.btn}> add a pet to the shelter</button>
        </Link>
      </div>
      <h4>These pets are looking for a good home</h4>


    </div>
  )
}

export default Home