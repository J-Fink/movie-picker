import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Movie from './Movie';
import { perPage } from '../config';

export const ALL_MOVIES_QUERY = gql`
    query ALL_MOVIES_QUERY($skip: Int = 0, $first: Int) {
    allMovies(first: $first, skip: $skip) {
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

export default function Movies({ page }) {
    const { data, error, loading } = useQuery(ALL_MOVIES_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage,
        }
    });
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