import Shuffle from '../components/Shuffle';
import { ALL_MOVIES_QUERY } from '../components/Movies';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Movie from '../components/Movie';
import styled from 'styled-components';
const PickStyles = styled.div`
    margin: 45px auto;
    max-width: 400px;
`;

export default function PickPage() {
    const { data, error, loading }  = useQuery(ALL_MOVIES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>
    const array = Shuffle([...data.allMovies]);
    console.log(array[0]);
    const [randomMovie, setRandomMovie] = useState();
    // function randomMovie() {
    //     return (
    //         alert(`here is your movie, ${array[0].name}`)
    //     )
    // }
    
    // const displayMovie = data.allMovies;
    // console.log(displayMovie);
    // const displayMovieShuffle = Shuffle();
    // const displayMovieShuffle = Shuffle(displayMovie);
    // console.log(displayMovieShuffle);
    return (
        <PickStyles>
            <Movie movie={array[0]}></Movie>
            <button onClick={() => setRandomMovie(array[0])} type="button">Pick A Movie For Me!</button>
            {/* TODO: Set parameters, included movies they've seen, only ones they haven't seen, etc. */}
        </PickStyles>
    )
  }
  