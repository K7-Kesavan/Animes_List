import { useEffect, useState } from "react";
import Animeslist from "./Animeslist";
import useFetch from "./useFetch";

const Wishlist = () => {

    let{data:animes,pending,error}=useFetch("https://api.jikan.moe/v4/anime");

    const[wish,setWish]= useState(null);

        useEffect(()=>{

            let wish = localStorage.getItem("wish");
            wish = JSON.parse(wish);

            setWish(wish);

        },[])
    


    return (

        <div>
            {error && <h1>{error}</h1>}
            
            { pending && <div className='loader'></div> }
            
            {animes && <Animeslist 
                animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})} 
                title="POPULAR SERIES"
            />}

        </div>
     );
}
 
export default Wishlist;