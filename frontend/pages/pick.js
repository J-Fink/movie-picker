import Shuffle from '../components/Shuffle';
import { ALL_MOVIES_QUERY } from '../components/Movies';
import { useQuery } from '@apollo/client';

export default function PickPage() {
    const { data, error, loading }  = useQuery(ALL_MOVIES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>
    const array = Shuffle([...data.allMovies]);
    
    
    // const displayMovie = data.allMovies;
    // console.log(displayMovie);
    // const displayMovieShuffle = Shuffle();
    // const displayMovieShuffle = Shuffle(displayMovie);
    // console.log(displayMovieShuffle);
    return (
        <div>
            <div>{array[0].name}</div>
        <p>Pick a Movie for me!</p>
        {/* TODO: Set parameters, included movies they've seen, only ones they haven't seen, etc. */}
        </div>
    )
  }
  