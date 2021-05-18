import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Movie from './Movie';

const ALL_MOVIES_QUERY = gql`
    query ALL_MOVIES_QUERY {
    allMovies {
        id
        description
        name
        rating
    }
    }
`;

const MoviesListStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: 450px;
    margin: 0 auto;
`;

export default function Watch() {
    const { data, error, loading } = useQuery(ALL_MOVIES_QUERY);
    console.log(data, error, loading);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    return (
        <div style={{textAlign: "center"}}> {/* //TODO: fix this styling, in react you need to insert an object */}
            <MoviesListStyles>
                {data.allMovies.map((movie) => (
                    <Movie key={movie.id} movie={movie}></Movie>
                ))}
            </MoviesListStyles>
        </div>
    )
}