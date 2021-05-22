import { useQuery } from "@apollo/client";
import gql from "graphql-tag"
import DisplayError from "./DisplayError";
import Head from 'next/head';
const SINGLE_MOVIE_QUERY = gql`
    query SINGLE_MOVIE_QUERY($id: ID!) {
        Movie(where: { id: $id }) {
            name
            rating
            description
            id
        }
}
`;

export default function SingleMovie({ id }) {
    const { data, loading, error } = useQuery(SINGLE_MOVIE_QUERY, {
        variables: {
            id: id
    }});
    console.log(data);
    if(loading) return <p>Loading...</p>
    if(error) return <DisplayError error={error}/>
    const { Movie } = data;
    return (
        <div>
            <Head>
                <title>Movie Picker | {Movie.name}</title>
            </Head>
            <div className="details">
                <h2>
                    {Movie.name}
                </h2>
                <p>{Movie.description}</p>

            </div>
        </div>
    )
}