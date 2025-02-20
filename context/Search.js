import { useState, createContext, useContext } from "react";
import { API_TOKEN } from '@env';

const MySearchContext = createContext();
// const url = 'https://api.themoviedb.org/3/search/movie?query='


function MySearchProvider(props) {
    const [movies, setMovies] = useState([]);
    

    async function runSearch(keyword) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&include_adult=false&language=en-US&page=1`, {
                method: 'GET',
                headers: {
                accepts: 'application/json',
                authorization: `Bearer ${API_TOKEN}`,
                    },
                }
            );

            if(!response.ok) throw new Error('Failed to fetch data');

            const data = await response.json();
            
            setMovies(data.results)
        } catch (error) {
            console.log('Failed to search movies', error);
            
        }

    }

    function removeMov(id) {
        //filter the removed movie out from the current movie list
        setMovies(currentMov => currentMov.filter(movie => movie.id !== id));
    }

    return (
        <MySearchContext.Provider value={{
            movies,
            runSearch,
            removeMov
        }}>{props.children}</MySearchContext.Provider>

    );
}

function useSearch() {
    const context = useContext(MySearchContext);
    //this gives our hook access to the global-ish context object

    if(!context) throw new Error('Mismatch MisName Context... what were you thinking?');
    return context;
    //when context is returned it returns value={[data,]}
}


export { MySearchProvider, useSearch };