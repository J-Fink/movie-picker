import Shuffle from '../components/Shuffle';
import { ALL_MOVIES_QUERY } from '../components/Movies';
import { useQuery } from '@apollo/client';

export default function PickPage() {
    const { data, error, loading }  = useQuery(ALL_MOVIES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>
    const array = Shuffle([...data.allMovies]);
    function randomMovie() {
        alert(`here is your movie, ${array[0].name}`);
    }
    
    // const displayMovie = data.allMovies;
    // console.log(displayMovie);
    // const displayMovieShuffle = Shuffle();
    // const displayMovieShuffle = Shuffle(displayMovie);
    // console.log(displayMovieShuffle);
    return (
        <>
            <button onClick={randomMovie} type="button">Pick A Movie For Me!</button>
            {/* TODO: Set parameters, included movies they've seen, only ones they haven't seen, etc. */}
        </>
    )
  }
  