import PleaseSignIn from "../components/PleaseSignIn";
import fetch from 'isomorphic-fetch';
import useSWR from 'swr';
// import { ALL_MOVIES_QUERY, MoviesListStyles } from "../components/Movies";
// import { useQuery } from "@apollo/client";
// import { perPage } from "../config";
// import Pagination from "../components/Pagination";
import Movie from '../components/Movie';




export default function SearchPage() {
    let movieTitle = 'joe';
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_URL}?s=${movieTitle}&page=55&apikey=${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_KEY}`, fetcher)
    console.log(data);
    // console.log(data.Search);
    if(error) return <div>{error}</div>
    if(!data) return <div>loading...</div>
    return (
        <>
        {/* <PleaseSignIn> */}
            {data.Search[0].Title} 
            {data.Search[0].Year}
            <div>hi</div>
        
        {/* </PleaseSignIn> */}
        </>
    )
  }
  