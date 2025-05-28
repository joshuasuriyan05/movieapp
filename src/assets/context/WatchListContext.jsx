import { createContext, useState, useEffect} from 'react';
import WatchList from './../pages/WatchList';
export const WatchListContext = createContext();
export const WatchListProvider = ({children}) => {
    const [WatchList, setWatchlist] = useState([]);
    const [genrelist, setGenreList] = useState([]);
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=5e6186824571d09ba9809df0681d5739`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => setGenreList(data.genres || []));
      }, []);

    const toggleWatchlist = (movie) => {
        const index = WatchList.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setWatchlist([...WatchList, movie]);
        } else {
            setWatchlist([...WatchList.slice(0, index),
                ...WatchList.slice(index + 1),
            ]);
        }
    };
    return (
        <WatchListContext.Provider value={{ WatchList, toggleWatchlist, genrelist  }}>
        {children}
        </WatchListContext.Provider>
    )
}
