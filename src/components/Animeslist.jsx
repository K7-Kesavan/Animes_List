
import { useEffect } from 'react';


const Animeslist = ({animes,title}) => {

    

    useEffect(()=>{
        if(localStorage.getItem("wish")==null)  //if wish array is not presnt before 
        {
            localStorage.setItem("wish","[]")   //then add the wish
        }
    },[]) 

    let handleWishList = (id)=>{
        let x = localStorage.getItem("wish");

        x = JSON.parse(x);

        if (! x.includes(id))  //if id is not present then we need to add
        {
            x.push(id);       
            x = JSON.stringify(x);            
            localStorage.setItem("wish",x)
        }
        else
        {
            alert("remove from wishlist");
            
            let i=x.indexOf(id);
            x.splice(i, 1);
            x= JSON.stringify(x);
            localStorage.setItem("wish",x);
    
        }
    }

    return ( 
        <div className="anime-list">
            {
                animes.map((anime)=>{
                    return(
                        <div key={anime.mal_id}  className="anime">
                            <div id='anime'>
                                <img src={anime.images.webp.large_image_url} alt="" />
                                <h1><span>Title Name</span> :{anime.title_english}</h1>
                                <h1><span>Total Episodes</span> :{anime.episodes}</h1>
                                <h1><span>Maturity Rating</span> :{anime.rating}</h1>
                                <h1><span>Release Year</span> :{anime.year}</h1>
                            </div>
                            <button onClick={()=>{handleWishList(anime.mal_id)}}> 
                                 &#10084; 
                            </button>
                        </div>
                    
                    )
                })
            }
        </div>
     );
}
 
export default Animeslist;