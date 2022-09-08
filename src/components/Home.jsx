
import Animeslist from './Animeslist';
import useFetch from './useFetch';

const Home = () => 
{
    
   let{data:animes,pending,error}=useFetch("https://api.jikan.moe/v4/anime");

        return ( 
    
        <div className="home-content"> 

                {error && <h1>{error}</h1>}

                { pending && <div className='loader'></div> }
            
                {animes && <Animeslist 
                    animes={animes} 
                    title="POPULAR SERIES"
                />}

        </div>

    )  
} 

export default Home;