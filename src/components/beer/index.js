import React from 'react'
import Styles from './index.module.css'

const Beer=({name,imageURL})=>{
    return (
        <div className={Styles.Container}>
            <div>{name}</div>
            <img src={imageURL} className={Styles.img}/>
            </div>
    )
}

export default Beer