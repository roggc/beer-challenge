import React, { useEffect,useState } from 'react'
import Styles from './index.module.css'

const Filter=({allBeers,setBeers})=>{
    
    const [maxIbu,setMaxIbu]=useState(1000)
    const [maxAbv,setMaxAbv]=useState(1000)

    //intento establecer sin exito valores iniciales para el filtro igual al maximo abv y ibu de todas las cervezas.
    useEffect(()=>{
        if(allBeers){
            let maxIbu=0
            let maxAbv=0
            allBeers.forEach(beer=>{
                if(beer.ibu>maxIbu){
                    maxIbu=beer.ibu
                }
                if(beer.abv>maxAbv){
                    maxAbv=beer.abv
                }
            })
            setMaxIbu(maxIbu)
            setMaxAbv(maxAbv)
            console.log(maxIbu)
            console.log(maxAbv)
        }
    },[allBeers])

    const [abv,setAbv]=useState(maxAbv)
    const [ibu,setIbu]=useState(maxIbu)

    const abvHandler=(e)=>{
        const val=e.target.value
        setAbv(val)
    }

    const ibuHandler=(e)=>{
        const val=e.target.value
        setIbu(val)
    }

    useEffect(()=>{
        console.log(allBeers)
        if(allBeers){
            setBeers(allBeers.filter(beer=>{
                if(beer.abv<abv&& beer.ibu<ibu){
                    return true
                }
            }))
        }
    },[abv,ibu,allBeers])
    
    return (
        <div className={Styles.container}>
            <div className={Styles.row}>
                <span>abv up to:</span>
                <input type='number' onChange={abvHandler} value={abv}/>
            </div>
            <div className={Styles.row}>
            <span>ibu up to:</span>
                <input type='number' onChange={ibuHandler} value={ibu}/>
            </div>
        </div>
    )
}

export default Filter