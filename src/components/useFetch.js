import { useState,useEffect } from "react";

const useFetch = (request) => 
{
    let [data,setData] = useState(null);

    let[pending,setPending] = useState(true);

    let[error,setError] = useState(null)
   
    useEffect(()=>{

        setTimeout(()=>{
            fetch(request)
            .then((response)=>{
                if (response.ok===false) 
                {
                    throw Error("Data is not found,please try for another resourse")   
                }
                else
                {
                    return ( response.json() );
                }
            })
            .then((recievedData)=>{ setData(recievedData.data); setPending(false); })
            .catch((error)=>{setError(error.message); setPending(false);})

        },500)
    },[])

    return {data,pending,error };
}
 
export default useFetch;