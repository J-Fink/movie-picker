import PleaseSignIn from "../components/PleaseSignIn";
import { ALL_MOVIES_QUERY, MoviesListStyles } from "../components/Movies";
import { useQuery } from "@apollo/client";
import { perPage } from "../config";
import Pagination from "../components/Pagination";
import Movie from "../components/Movie";


export default function SeenPage({ page }) {
    const { data, error, loading } = useQuery(ALL_MOVIES_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage,
        }
    });
console.log(data);
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    return (
        <PleaseSignIn>
            <div>hello</div>
        <Pagination page={page || 1} />
        <MoviesListStyles>
        {data.authenticatedItem.movies.map((movie) => (
           !!movie.seen ?
           <Movie key={movie.id} movie={movie}></Movie> :
           ""
            )
        )}
        </MoviesListStyles>
        </PleaseSignIn>
    )
  }
  