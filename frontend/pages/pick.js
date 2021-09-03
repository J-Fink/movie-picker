import Shuffle from '../components/Shuffle';
import { ALL_MOVIES_QUERY } from '../components/Movies';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styled from 'styled-components';
const PickStyles = styled.div`
    /* margin: var(--headerHeight) auto; */
    max-width: 400px;
    margin: auto;
`;

export default function PickPage() {

    const { data, error, loading }  = useQuery(ALL_MOVIES_QUERY);
    
    const [seeMovie, setSeeMovie] = useState(false);
    const [movie, setMovie] = useState(false);
    
    const handleClick = () => {
        // alert(`hello Joe ${data.allMovies[0].name}`);
        setSeeMovie(true);
        setMovie(Shuffle([...data.allMovies])[0]);
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>
    
    return (
        <PickStyles>
    
        {seeMovie ? <Movie movie={movie} /> : ''}
            <button onClick={handleClick} type="button">Pick A Movie For Me!</button>
            {/* TODO: Set parameters, included movies they've seen, only ones they haven't seen, etc. */}
        </PickStyles>
    )
  }
  