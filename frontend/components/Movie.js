import Link from 'next/link';
import DeleteMovie from './DeleteMovie';
import MovieStyles from './styles/MovieStyles';
import Rating from './styles/Rating';
import Title from './styles/Title';

export default function Movie({ movie }) {
    return (
        <MovieStyles>
            <Title>
                <Link href={`/movie/${movie.id}`}>{movie.name}</Link>
            </Title>
            {movie.rating ? 
                <Rating>
                    {movie.rating}
                </Rating>
                :
                ""
            }
            <div className="buttonList">
                <Link href={{
                    pathname: 'update',
                    query: {
                        id: movie.id
                    }
                }}>Edit</Link>
                <DeleteMovie id={movie.id}>Delete</DeleteMovie>
            </div>
        </MovieStyles>
    )
}