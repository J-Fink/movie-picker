import PleaseSignIn from "../components/PleaseSignIn";
import fetch from 'isomorphic-fetch';
import useSWR from 'swr';
// import { ALL_MOVIES_QUERY, MoviesListStyles } from "../components/Movies";
// import { useQuery } from "@apollo/client";
// import { perPage } from "../config";
// import Pagination from "../components/Pagination";
import Movie from '../components/Movie';
import Form from "../components/styles/Form";
import useForm from "../lib/useForm";
import { useEffect } from "react";




export default function SearchPage() {

    const { inputs, handleChange } = useForm({
        movieName: '',
    });
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const publicMovieAPI = () => useSWR(`${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_URL}?s=${inputs.movieName}&page=55&apikey=${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_KEY}`, fetcher)
    // console.log(data);
    // console.log(myApi.data);
    // console.log(data.Search);
    // if(error) return <div>{error}</div>
    // if(!data) return <div>loading...</div>
    // console.log(inputs);
    // useEffect() {
    //     // inputs.movieName =
    // }
    return (
        <>
        {/* <PleaseSignIn> */}
            <Form onSubmit={async (e) => {
                e.preventDefault();
                //Submit the input fields to the api, use that function
                publicMovieAPI();
            }}>
                <fieldset>
                    <input onChange={() => handleChange}type="text" placeholder="Search for a Movie" value={inputs.movieName || ""} name="search" id="search" />
                    <button type="submit" >SEE MOVIES</button>
                    <div>hi</div>

                </fieldset>
            </Form>
                {/* {data.Search[0].Title} 
                {data.Search[0].Year} */}
        
        {/* </PleaseSignIn> */}
        </>
    )
  }
  