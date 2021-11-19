import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination'
import Movies, { ALL_MOVIES_QUERY, MoviesListStyles } from '../../components/Movies';
import PleaseSignIn from '../../components/PleaseSignIn';
import AboutPage from '../about';
import { useQuery } from '@apollo/client';
import Movie from '../../components/Movie';

export default function MoviesPage() {
    const { query }= useRouter();
    const page = parseInt(query.page);
    const { data, error, loading } = useQuery(ALL_MOVIES_QUERY);
    console.log(data?.authenticatedItem.movies);
    return (
        <>
         <Pagination page={page || 1}/>
            <div>This is the Movies Page</div>
            <MoviesListStyles>
                {data?.authenticatedItem.movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie}></Movie>
                })}
            </MoviesListStyles>
        </>
    )
  }
  