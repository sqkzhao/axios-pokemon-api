import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [resData, setResData] = useState({
        names: [],
        display: false
    })
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response => {
            console.log(response.data.results)
            let names = response.data.results.map((item, i) => {
                return item.name
            })
            setResData({
                ...resData,
                names: names
            })
        })
    }, [])
    const onClickHandler = () => {
        setResData({
            ...resData,
            display: true
        })
    }
    return (
        <div>
            <input type="button" value="Fetch Pokemon" onClick={onClickHandler} />
            {resData.display &&
                <ul>
                    {resData.names.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            }
        </div>
    )
}
export default Pokemon