import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination'
import Movies from '../../components/Movies';
import PleaseSignIn from '../../components/PleaseSignIn';

export default function MoviesPage() {
    const { query }= useRouter();
    const page = parseInt(query.page);
    return (
        <PleaseSignIn>
            <Pagination page={page || 1} />
            <Movies page={page || 1} />
            <Pagination page={page || 1} />
        </PleaseSignIn>
    )
  }
  