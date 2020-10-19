import React,{useEffect, useState} from 'react'
import * as Styles from './index.module.css'
import Beer from '../beer'
import Filter from '../filter'

const App=()=>{
    const [beers,setBeers]=useState([])
    const [allBeers,setAllBeers]=useState([])
    useEffect(()=>{
        const fetchBeers=async(url)=>{
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setAllBeers(data)
            })
        }
        fetchBeers('https://api.punkapi.com/v2/beers')
    },[])

    return (
        <div className={Styles.supraContainer}>
            <h1>wellcome to beers!</h1>
            <Filter allBeers={allBeers} setBeers={setBeers}/>
        <div className={Styles.Container}>
            {beers.map(beer=><Beer key={beer.id} name={beer.name} imageURL={beer.image_url}/>)}
        </div>
        </div>
        )
}

export default App