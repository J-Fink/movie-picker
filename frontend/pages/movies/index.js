import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination'
import Movies from '../../components/Movies';
import PleaseSignIn from '../../components/PleaseSignIn';
import AboutPage from '../about';

export default function MoviesPage() {
    const { query }= useRouter();
    const page = parseInt(query.page);
    return (
        <>
            <AboutPage />
        </>
    )
  }
  