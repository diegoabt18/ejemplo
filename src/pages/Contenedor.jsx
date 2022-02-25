import React, {useState, useEffect} from 'react'
import Pagination from '../componets/pagination/Pagination'

const Contenedor = () => {
    const [data,setData] = useState("");
    console.log(data);
    console.log("si entra")
    useEffect(() => {
        getApi();
    }, [])

    async function getApi() {
        console.log("entra")
        const response=await fetch('http://hp-api.herokuapp.com/api/characters');
        const api =await response.json();
        console.log(api);
        setData(api);
        
    }

    return (
        <>
       
        {data && <Pagination itemsPerPage={5} items={data} />}
        </>
        
    )
}

export default Contenedor